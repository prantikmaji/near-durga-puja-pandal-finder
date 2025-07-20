import React, { useContext } from "react";
import { MarkerF, OverlayView } from "@react-google-maps/api";
import PandalsItem from "./PandalsItem";
import { SelectedPandalsContext } from "@/context/SelectedPandalsContext";

function Markers({ pandals }) {
  const {selectedPandals, setSelectedPandals} = useContext(SelectedPandalsContext)
  return (
    <div>
      <MarkerF
        position={pandals.geometry.location}
        onClick={()=>setSelectedPandals(pandals)}
        icon={{
          url: "./circle.png",
          scaledSize: {
            height: 10,
            width: 10,
          },
        }}
      >
        {selectedPandals.reference == pandals.reference?
        
        <OverlayView
        position={pandals.geometry.location}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div className="ml-[-90px] mt-[-200px]">
          <PandalsItem pandals={pandals} showDir={true} />
        </div>
      </OverlayView>:null}
      </MarkerF>
    </div>
  );
}

export default Markers;
