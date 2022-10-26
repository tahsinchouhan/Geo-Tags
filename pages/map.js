import Script from "next/script";
import React from "react";
import MapmyIndia, { MapMarker } from "react-mapmyindia";

const Maps = () => {
  // <script src="https://apis.mapmyindia.com/advancedmaps/v1/<Lic_Key>/map_load?v=1.3"></script>
  return (
    <div>
      <Script src="https://apis.mapmyindia.com/advancedmaps/v1/3758f2e35e5baa120e5af659d1a2be63/map_load?v=1.3"></Script>

      <MapmyIndia>
        <MapMarker
          position={[12.34343, 90.5655222]}
          popupContent={"My-place"}
        />
      </MapmyIndia>
    </div>
  );
};

export default Maps;
