const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/regions",
  });
  return response.data;
};

export default {
  key: "get_geo_regions",
  noun: "GeoDB",
  display: {
    label: "Get GeoDB Regions",
    description: "Get GeoDB Regions",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "regions": [
        "Africa",
        "Asia",
        "Europe",
        "North America",
        "South America"
      ]
    },
  },
};
