import axios from "axios";

const GOOGLE_MAPS_API_KEY = "AIzaSyBEODzpa1Xgv1e-k86FpC4JtNW3LxaUsts";

async function getLocationName(latitude, longitude) {
  console.log(latitude, longitude);

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
    );

    if (response.data.results.length > 0) {
      console.log(response.data.results[0].formatted_address);
      var address_parts = response.data.results[0].formatted_address.split(",");
      console.log("Address", address_parts);
      var place_name = address_parts[1];

      if (place_name) {
        return place_name;
      }
      return response.data.results[0].formatted_address;
    } else {
      return "Location not found";
    }
  } catch (error) {
    console.error("Error getting location name:", error);
    return "Error fetching location";
  }
}

export default getLocationName;
