import React, { useContext } from "react";
import PandalsItem from "./PandalsItem";
import { SelectedPandalsContext } from "@/context/SelectedPandalsContext";

function PandalList({ pandalsList }) {
  const { selectedPandals, setSelectedPandals } = useContext(
    SelectedPandalsContext
  );

  return (
    <div className="flex overflow-scroll overflow-x-auto gap-4 scrollbar-hide">
      {pandalsList.map((item, index) => (
        <div key={index} onClick={() => setSelectedPandals(item)}>
          <PandalsItem pandals={item} />
        </div>
      ))}
    </div>
  );
}

export default PandalList;
