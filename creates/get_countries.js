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
    label: "Get list of countries",
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
  },
};
