const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geocoder/reverse",
    params: { "lat": bundle.inputData["lat"], "lon": bundle.inputData["lon"] },
  });
  return response.data;
};

export default {
  key: "get_geocoder_reverse",
  noun: "Geocoding",
  display: {
    label: "Reverse geocoding (coordinates to address)",
    description: "Convert geographic coordinates (latitude and longitude) into a human-readable address or place name.",
  },
  operation: {
    inputFields: [
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: true,
        helpText: "WGS84 latitude value ranging from -90 to 90.",
      },
      {
        key: "lon",
        label: "Lon",
        type: 'string',
        required: true,
        helpText: "WGS84 longitude value ranging from -180 to 180.",
      },
    ],
    perform,
    sample: {
      "lat": 40.7489669,
      "lon": -73.985399,
      "name": "LensCrafters",
      "category": "shop",
      "type": "optician",
      "poi": [
        {
          "name": "LensCrafters",
          "category": "shop",
          "type": "optician"
        },
        {
          "name": "7",
          "category": "place",
          "type": "house_number"
        }
      ],
      "street": "West 34th Street",
      "area": "Manhattan, New York County",
      "postcode": "10001",
      "city": "New York",
      "state_code": "US-NY",
      "state": "New York",
      "country_code": "US",
      "country": "United States",
      "full_address": "LensCrafters, 7, West 34th Street, Midtown South, Manhattan Community Board 5, Manhattan, New York County, New York, 10001, United States",
      "bounding_box": [
        "40.7489169",
        "40.7490169",
        "-73.9854490",
        "-73.9853490"
      ]
    },
  },
};
