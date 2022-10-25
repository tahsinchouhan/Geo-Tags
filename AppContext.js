import React, { createContext, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
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
  //   useEffect(() => {
  //     if (coords) {
  //       try {
  //         const response = fetch(
  //           `https://apis.mapmyindia.com/advancedmaps/v1/3758f2e35e5baa120e5af659d1a2be63/rev_geocode?lat=${latitude}&lng=${longitude}&region=IND&lang=Eng`,
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //               "Access-Control-Allow-Origin": "*",
  //               mode: "no-cors",
  //             },
  //           }
  //         )
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             setLocation(data);
  //           });
  //       } catch (error) {
  //         console.log(error);
  //         return res.status(500).json({ error: error.message });
  //       }
  //     }
  //   }, [coords]);
  //   const getGeoLocation = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://apis.mapmyindia.com/advancedmaps/v1/3758f2e35e5baa120e5af659d1a2be63/rev_geocode?lat=${latitude}&lng=${longitude}&region=IND&lang=Eng`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //       setLocation(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    if (coords) {
      try {
        const response = fetch(
          `https://apis.mapmyindia.com/advancedmaps/v1/sssf8c1ecf98cdfc465e042a2bedfba54d3ssss/rev_geocode?lat=${latitude}&lng=${longitude}&region=IND&lang=Eng`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLocation(data);
          });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
      }
    }
  }, [coords]);

  return (
    <LocationContext.Provider value={{ location: location !== {} && location }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
