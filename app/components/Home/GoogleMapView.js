import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import Markers from "./Markers";
import { SelectedPandalsContext } from "@/context/SelectedPandalsContext";


function GoogleMapView({pandalsList}) {
   const { selectedPandals, setSelectedPandals } = useContext(SelectedPandalsContext)
   const {userLocation, setUserLocation} = useContext(UserLocationContext)
   
  const mapContainerStyle = {
    height: "70vh",
    width: "100%",
  };
  const coordinate = { lat: 22.5744, lng: 88.3629 };
//console.log(userLocation)

  return (
    <div className="p-4">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={['57457ed755dd2ce0cf29a50f']}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
           center={coordinate}
         // center={selectedPandals.name?selectedPandals.geometry.location:userLocation}
          options={{mapId:'57457ed755dd2ce0cf29a50f'}}
          zoom={13}
        
         //</LoadScript> className="rounded-2xl"
        >
          <MarkerF position={coordinate} />

          {pandalsList.map(
            (item, index) =>
              index <= 7 && <Markers pandals={item} key={index} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
