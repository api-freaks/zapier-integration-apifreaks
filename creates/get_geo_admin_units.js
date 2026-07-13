const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/admin-units",
    params: { "country": bundle.inputData["country"], "adminLevels": bundle.inputData["adminLevels"] },
  });
  return response.data;
};

export default {
  key: "get_geo_admin_units",
  noun: "GeoDB",
  display: {
    label: "Get Administrative Units by Country",
    description: "Retrieve administrative divisions for a given country using ISO 3166-1 alpha-2 country codes. You can optionally filter by administrative levels.",
  },
  operation: {
    inputFields: [
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "adminLevels",
        label: "Adminlevels",
        type: 'string',
        required: false,
        helpText: "Comma-separated list to filter results by one or more administrative levels.",
      },
    ],
    perform,
    sample: {
      "admin_units": [
        {
          "name": "United States",
          "admin_code": "example",
          "admin_level": "example"
        }
      ]
    },
  },
};
