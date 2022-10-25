import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

const GeoLocation = () => {
  const [location, setLocation] = useState({});

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  useEffect(() => {
    if (!isGeolocationEnabled) {
      alert("Please allow location access");
      window.location.reload();
    }
  }, [isGeolocationEnabled]);

  const latitude = coords?.latitude;
  const longitude = coords?.longitude;
  const getGeoLocation = async () => {
    try {
      const res = await fetch(
        `https://apis.mapmyindia.com/advancedmaps/v1/3758f2e35e5baa120e5af659d1a2be63/rev_geocode?lat=${latitude}&lng=${longitude}&region=IND&lang=Eng`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setLocation(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("location", location);
  return (
    <div>
      <div>
        {coords ? (
          <button onClick={getGeoLocation}>get location</button>
        ) : (
          <p>Getting the location data&hellip; </p>
        )}
        {location?.results?.map((item, index) => {
          return (
            <div key={index}>
              <p>{item?.formatted_address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeoLocation;
