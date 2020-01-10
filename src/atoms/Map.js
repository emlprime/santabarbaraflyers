import React, {
  useState,
  useEffect,
  useRef,
  Component
} from "react";
import styled from "styled-components";
import DogPin from "./DogPin3.png";
import { Container, Row, Col } from "react-bootstrap";
import { isEqual, omit, functions } from "lodash";

function Map({ options, onMount, className }) {
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
              position: results[0].geometry.location
              //   icon: icon,
              //   animation: window.google.maps.Animation.DROP
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

            // directions
            const directions = () => {
              const directionsRenderer = new window.google.maps.DirectionsRenderer();
              const directionsService = new window.google.maps.DirectionsService();

              directionsRenderer.setMap(map);
              directionsRenderer.setPanel(
                document.getElementById("right-panel")
              );
              const control = document.getElementById(
                "right-panel"
              );

              const start = document.getElementById(
                "origin-input"
              ).value;
              const end = document.getElementById(
                "destination-input"
              ).value;

              console.log("start" + start);
              console.log("end" + end);
              directionsService.route(
                {
                  origin: start,
                  destination: end,
                  travelMode: "DRIVING"
                },
                function(response, status) {
                  if (status === "OK") {
                    directionsRenderer.setDirections(
                      response
                    );
                  } else {
                    window.alert(
                      "Directions request failed due to " +
                        status
                    );
                  }
                }
              );
            };
            directions();
          });
        });

        //autocomplete
        // Create the search box and link it to the UI element.
        const input = document.getElementById(
          "origin-input"
        );

        const searchBox = new window.google.maps.places.SearchBox(
          input
        );
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", function() {
          searchBox.setBounds(map.getBounds());
        });

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", function() {
          const places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // For each place, get the icon, name and location.
          const bounds = new window.google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log(
                "Returned place contains no geometry"
              );
              return;
            }
            const icon = {
              url: place.icon,
              size: new window.google.maps.Size(71, 71),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 34),
              scaledSize: new window.google.maps.Size(
                25,
                25
              )
            };
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
        //end
      }
    };

    //render map
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwpDhxfo8aygIX4ZrfdC4NULGK8KKteVc&libraries=places";
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () =>
        script.removeEventListener(`load`, onLoad);
    } else onLoad();

    //end directions
  }, [onMount, options]);

  return (
    <Style>
      <Container>
        <Row>
          <Col md={8}>
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

            <button id="submit">Get Directions</button>
            {/* <button onClick={} id="submit">Get Directions</button> */}
            <div
              id="map"
              style={{
                height: `60vh`,
                margin: `1% 0`,
                borderRadius: `0.5%`
              }}
              {...{ ref, className }}
            ></div>
            <div id="infowindow-content">
              <img
                src=""
                width="16"
                height="16"
                id="place-icon"
              />
              <span id="place-name" class="title"></span>
              <span id="place-address"></span>
            </div>
          </Col>
          <Col>
            <div id="right-panel"></div>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}
const shouldUpdate = (prevProps, nextProps) => {
  delete prevProps.options.mapTypeId;
  const [prevFuncs, nextFuncs] = [
    functions(prevProps),
    functions(nextProps)
  ];
  return (
    isEqual(
      omit(prevProps, prevFuncs),
      omit(nextProps, nextFuncs)
    ) &&
    prevFuncs.every(
      fn =>
        prevProps[fn].toString() ===
        nextProps[fn].toString()
    )
  );
};
export default React.memo(Map, shouldUpdate);

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
    font-size: 12px;
    font-weight: 300;
    text-overflow: ellipsis;
    margin-left: 1%;
    margin-top: 16%;
    position: absolute;
    z-index: 1;
    border-color: #fff;
    color: #fff;
  }

  #origin-input,
  #destination-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 300;
    text-overflow: ellipsis;
  }

  #origin-input {
    position: absolute;
    margin-top: 2%;
    z-index: 1;
    margin-left: 1%;
    padding: 0 0.5%;
    width: 30%;
    border-color: #4d90fe;
    text-overflow: ellipsis;
  }

  #destination-input {
    position: absolute;
    margin-top: 9%;
    z-index: 1;
    margin-left: 1%;
    padding: 0 0.5%;
    width: 30%;
    border-color: #4d90fe;
  }
  #right-panel {
    display: block;
    height: 60vh;
    overflow: scroll;
    font-family: Roboto;
    font-size: 12px;
  }
`;
