const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/countries",
    params: { "region": bundle.inputData["region"], "subregion": bundle.inputData["subregion"] },
  });
  return response.data;
};

export default {
  key: "get_countries",
  noun: "GeoDB",
  display: {
    label: "Get List of Countries",
    description: "Retrieve countries, optionally filtered by region or subregion.",
  },
  operation: {
    inputFields: [
      {
        key: "region",
        label: "Region",
        type: 'string',
        required: false,
        helpText: "Optional filter to return countries within a specific region from the region endpoint.",
      },
      {
        key: "subregion",
        label: "Subregion",
        type: 'string',
        required: false,
        helpText: "Optional filter to return countries within a specific subregion from the subregion endpoint.",
      },
    ],
    perform,
    sample: {
      "countries": [
        {
          "name": "United States",
          "iso_alpha_2": "US",
          "iso_alpha_3": "USA",
          "iso_numeric": 840,
          "capital": "Washington",
          "region": "Americas",
          "subregion": "Northern America"
        }
      ]
    },
  },
};
