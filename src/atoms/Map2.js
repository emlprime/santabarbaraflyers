import React, {
  useState,
  useEffect,
  useRef,
  Component
} from "react";
import styled from "styled-components";
import DogPin from "./DogPin3.png";

function Map2({ options, onMount, className }) {
  const ref = useRef();
  const [userAddress, setUserAddress] = useState("");
  const SBbFlyerAddress =
    "223 E de La Guerra, Santa Barbara, CA, 93101";

  console.log(userAddress);

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(
        ref.current,
        options
      );

      if (typeof onMount === `function`) onMount(map);

      //geocode to drop pin
      const geocoder = new window.google.maps.Geocoder();

      const icon = DogPin;
      geocoder.geocode(
        { address: SBbFlyerAddress },
        function(results, status) {
          if (status === "OK") {
            console.log(results);
            map.setCenter(results[0].geometry.location);
            const marker = new window.google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: icon,
              animation: window.google.maps.Animation.DROP
            });
            marker.setMap(map);
          }
        }
      );

      // get user location

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(
          position
        ) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(pos);

          //user location to address

          geocoder.geocode({ location: pos }, function(
            results,
            status
          ) {
            const newAddress = results[0].formatted_address;
            setUserAddress(newAddress);
          });
        });
      }
    };

    //render map
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwpDhxfo8aygIX4ZrfdC4NULGK8KKteVc";
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () =>
        script.removeEventListener(`load`, onLoad);
    } else onLoad();

    //start directions
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();
    directionsRenderer.setPanel(
      document.getElementById("right-panel")
    );

    const directions = function onSubmit(
      directionsService,
      directionsRenderer
    ) {
      var start = document.getElementById("origin-input")
        .value;
      var end = document.getElementById("destination-input")
        .value;
      directionsService.route(
        {
          origin: start,
          destination: end,
          travelMode: "DRIVING"
        },
        function(response, status) {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
          } else {
            window.alert(
              "Directions request failed due to " + status
            );
          }
        }
      );
    };

    //end directions
  }, [onMount, options]);

  return (
    <Style>
      <div>
        <div>
          <input
            className="controls"
            id="origin-input"
            type="text"
            value={userAddress}
            onChange={e => setUserAddress(e.target.value)}
          />
          <input
            id="destination-input"
            className="controls"
            type="text"
            value={SBbFlyerAddress}
          ></input>

          {/* <button id="submit" onClick={directions}>
            Get Directions
          </button> */}
          <button id="submit">Get Directions</button>
        </div>
        <div id="right-panel"></div>
        <div
          id="map"
          style={{
            height: `60vh`,
            margin: `1% 0`,
            borderRadius: `0.5%`
          }}
          {...{ ref, className }}
        ></div>
      </div>
    </Style>
  );
}
export default React.memo(Map2);
Map.defaultProps = {
  options: {
    zoom: 5,
    disableDefaultUI: true
  }
};

const Style = styled.section`
  .controls {
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  #submit {
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #4d90fe;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    text-overflow: ellipsis;
    margin-left: 33%;
    margin-top: 1%;
    position: absolute;
    z-index: 1;
    border-color: #fff;
    color: #fff;
  }

  #origin-input,
  #destination-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    text-overflow: ellipsis;
  }

  #origin-input {
    position: absolute;
    margin-top: 1%;
    z-index: 1;
    margin-left: 1%;
    padding: 0 0.5%;
    width: 15%;
    border-color: #4d90fe;
  }

  #destination-input {
    position: absolute;
    margin-top: 1%;
    z-index: 1;
    margin-left: 17%;
    padding: 0 0.5%;
    width: 15%;
    border-color: #4d90fe;
  }
`;
