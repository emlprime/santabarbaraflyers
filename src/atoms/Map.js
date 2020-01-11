import React, {
  useState,
  useEffect,
  useRef,
  Component
} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { isEqual, omit, functions } from "lodash";

function Map({ options, onMount, className }) {
  const ref = useRef();

  const [userAddress, setUserAddress] = useState("");

  const SBbFlyerAddress =
    "223 E de La Guerra, Santa Barbara, CA, 93101";

  console.log(userAddress);

  const geocoder = new window.google.maps.Geocoder();
  let directionsRenderer = new window.google.maps.DirectionsRenderer();
  let directionsService = new window.google.maps.DirectionsService();

  let map = new window.google.maps.Map(options);

  //directions
  const directions = () => {
    map = new window.google.maps.Map(
      document.getElementById("map"),
      {
        disableDefaultUI: true
      }
    );
    document.getElementById("right-panel").innerHTML = "";
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(
      document.getElementById("right-panel")
    );
    console.log("getting new directions");
    const start = document.getElementById("origin-input")
      .value;
    const end = document.getElementById("destination-input")
      .name;
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: "DRIVING"
      },
      function(response, status) {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
          console.log(response);
        } else {
          window.alert(
            "Directions request failed due to " + status
          );
        }
      }
    );
  };

  //autocomplete

  // Create the search box and link it to the UI element.
  const input = document.getElementById("origin-input");

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
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new window.google.maps.Size(71, 71),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(17, 34),
        scaledSize: new window.google.maps.Size(25, 25)
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

  //enter
  const onKeyPress = e => {
    if (e.which === 13) {
      directions();
    }
  };

  const getUserLocation = () => {
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

          // call directions

          directions();
        });
      });
      //end
    }
  };
  useEffect(() => {
    const onLoad = () => {
      map = new window.google.maps.Map(
        ref.current,
        options
      );

      if (typeof onMount === `function`) onMount(map);
      getUserLocation();

      // get user location
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
  }, [onMount, options]);

  return (
    <Style>
      <Container>
        <Row id="row1">
          <Col md={8} id="mapCol">
            <div id="directions-box">
              <div class="input-box">
                <i
                  onClick={getUserLocation}
                  class="material-icons icon"
                  id="currentLoc"
                >
                  my_location
                </i>
                <input
                  className="controls"
                  id="origin-input"
                  type="text"
                  value={userAddress}
                  onChange={e =>
                    setUserAddress(e.target.value)
                  }
                />
              </div>
              <div class="input-box" id="input2">
                <i class="material-icons icon2">place</i>
                <input
                  id="destination-input"
                  className="controls"
                  type="text"
                  name={SBbFlyerAddress}
                  value="Santa Barbara Flyers"
                  onKeyPress={onKeyPress}
                ></input>
              </div>
              <button
                onClick={directions}
                onKeyPress={onKeyPress}
                id="submit"
              >
                Get Directions
              </button>
            </div>

            {/* <button id="submit">Get Directions</button> */}

            <div
              id="map"
              onKeyPress={onKeyPress}
              {...{ ref, className }}
            ></div>
          </Col>
          <Col id="directionsCol">
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
  #row1 {
    border: 1px solid silver;
  }
  #map {
    height: 60vh;
  }

  .adp-placemark {
    margin: 0;
    border-top-width: 0px;
    border-right-width: 0px;
  }

  #mapCol {
    margin: 0;
    padding: 0;
  }
  #directionsCol {
    margin: 0;
    padding: 0;
  }
  #submit {
    border: 1px solid #fff;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #4d90fe;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    text-overflow: ellipsis;
    margin-left: 0%;
    margin-top: 1%;
    z-index: 1;
    color: #fff;
  }

  #origin-input:focus {
    outline: 2px solid #4d90fe;
  }
  #destination-input:focus {
    outline: 2px solid #4d90fe;
  }

  .icon,
  .icon2 {
    padding: 5px;
    background: #4d90fe;
    color: white;
    min-width: 30px;
    text-align: center;
    z-index: 6;
    font-size: 20px;
    padding: 6px;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  .controls {
    padding-top: 6px;
    border-color: #4d90fe;
    text-overflow: ellipsis;
    border: 1px solid #4d90fe;
    border-radius: 0px 2px 2px 0px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 300;
    text-overflow: ellipsis;
    position: absolute;
    text-overflow: ellipsis;
    width: 30%;
  }
  #currentLoc {
    cursor: pointer;
  }
  #directions-box {
    position: absolute;
    z-index: 5;
    width: 100%;
    margin-top: 1.5%;
    margin-left: 1%;
  }
  #input2 {
    margin-top: 1%;
  }
  /* end test */

  #right-panel {
    display: block;
    height: 60vh;
    overflow: scroll;
    font-family: Roboto;
    font-size: 12px;
    z-index: 5;
  }
`;
