const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geocoder/search",
    params: { "query": bundle.inputData["query"], "limit": bundle.inputData["limit"], "min_lat": bundle.inputData["min_lat"], "max_lat": bundle.inputData["max_lat"], "min_lon": bundle.inputData["min_lon"], "max_lon": bundle.inputData["max_lon"] },
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
};

export default {
  key: "get_geocoder_search",
  noun: "Geocoding",
  display: {
    label: "Forward Geocoding (Address to Coordinates)",
    description: "Convert a given address or place name into geographic coordinates (latitude and longitude).",
  },
  operation: {
    inputFields: [
      {
        key: "query",
        label: "Query",
        type: 'string',
        required: true,
        helpText: "Free-form search query, e.g. Wembley Stadium, London",
      },
      {
        key: "limit",
        label: "Limit",
        type: 'string',
        required: false,
        helpText: "Max number of results to return (1\u201340). May return fewer if matches are weak.",
      },
      {
        key: "min_lat",
        label: "Min Lat",
        type: 'string',
        required: false,
        helpText: "Minimum latitude for the viewbox. Must be \u2264 max_lat and between -90 and 90.",
      },
      {
        key: "max_lat",
        label: "Max Lat",
        type: 'string',
        required: false,
        helpText: "Maximum latitude for the viewbox. Must be \u2265 min_lat and between -90 and 90.",
      },
      {
        key: "min_lon",
        label: "Min Lon",
        type: 'string',
        required: false,
        helpText: "Minimum longitude for the viewbox. Must be \u2264 max_lon and between -180 and 180.",
      },
      {
        key: "max_lon",
        label: "Max Lon",
        type: 'string',
        required: false,
        helpText: "Maximum longitude for the viewbox. Must be \u2265 min_lon and between -180 and 180.",
      },
    ],
    perform,
    sample: {
      "results": [
        {
      "lat": 48.8566,
      "lon": 2.3522,
      "name": "Paris",
      "category": "place",
      "type": "city",
      "street": "Rue de Rivoli",
      "area": "Arrondissement 1",
      "postcode": "75001",
      "city": "Paris",
      "county": "Paris",
      "state_code": "IDF",
      "state": "\u00cele-de-France",
      "country_code": "FR",
      "country": "France",
      "full_address": "Rue de Rivoli, 75001 Paris, France",
      "bounding_box": [
        "48.8099",
        "48.9033",
        "2.2916",
        "2.4323"
      ],
      "poi": [
        {
          "name": "Eiffel Tower",
          "category": "amenity",
          "type": "attraction"
        }
      ]
    }
      ]
    },
  },
};
