import axios from "axios";

// Ocultar la key en un archivo .env
const API_KEY =
  "pk.eyJ1IjoiaGF6emFyZDA5IiwiYSI6ImNscDJzZWJtaTBzdDAyam9iem5sMnlxeW4ifQ.DAyQinAiG2UBPxWhbsVeuw";

export const checkAddress = async (address) => {

  const encodedAddress = encodeURIComponent(address);

  const resp = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${API_KEY}`
  );

  return resp.data.features[0];
};

export const reverseGeocode = async (lng, lat) => {

  const resp = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${API_KEY}`
  );

  return resp.data.features[0];
};
