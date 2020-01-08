import React, { useState, useEffect, useRef } from "react";

export default function Map({
  options,
  onMount,
  className
}) {
  const ref = useRef();

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(
        ref.current,
        options
      );
      if (typeof onMount === `function`) onMount(map);

      const geocoder = new window.google.maps.Geocoder();
      const address =
        "223 E de La Guerra, Santa Barbara, CA, 93101";

      geocoder.geocode({ address: address }, function(
        results,
        status
      ) {
        if (status == "OK") {
          console.log(results);
          map.setCenter(results[0].geometry.location);
          const marker = new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " +
              status
          );
        }
      });
    };
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwpDhxfo8aygIX4ZrfdC4NULGK8KKteVc";
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () =>
        script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [onMount, options]);

  return (
    <div
      style={{
        height: `60vh`,
        margin: `1em 0`,
        borderRadius: `0.5em`
      }}
      {...{ ref, className }}
    />
  );
}

Map.defaultProps = {
  options: {
    zoom: 5
  }
};
