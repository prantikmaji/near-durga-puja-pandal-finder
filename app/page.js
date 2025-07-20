"use client";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import CategoryList from "./components/Home/CategoryList";
import RangeSelect from "./components/Home/RangeSelect";
import GoogleMapView from "./components/Home/GoogleMapView";
import GlobalApi from "@/shared/GlobalApi";
import { Axios } from "axios";
import PandalList from "./components/Home/PandalList";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [pandalsList, setPandalsList] = useState([]);

  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    GlobalApi.getGooglePlace(category, radius).then((resp) => {
      console.log(resp.data.product.results)
      setPandalsList(resp.data.product.results);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="">
        <CategoryList
          onCategoryChange={(value) => {
            setCategory(value);
          }}
        />
        <RangeSelect
          onRadiusChange={(value) => {
            setRadius(value);
          }}
        />
      </div>

      <div className="bg-white-400 col-span-3">
        <GoogleMapView pandalsList={pandalsList} />

        <div className="md:absolute w-[90%] md:w-[71%] ml-6 md:ml-10 bottom-36 relative md:bottom-3">
          <PandalList pandalsList={pandalsList} className="m-0" />
        </div>
      </div>
    </div>
  );
}
