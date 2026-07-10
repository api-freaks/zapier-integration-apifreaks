const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/subregions",
    params: { "region": bundle.inputData["region"] },
  });
  return response.data;
};

export default {
  key: "get_subregions_by_region",
  noun: "GeoDB",
  display: {
    label: "Get Subregions by Region",
    description: "Get Subregions by Region",
  },
  operation: {
    inputFields: [
      {
        key: "region",
        label: "Region",
        type: 'string',
        required: true,
        helpText: "Name of the region.",
      },
    ],
    perform,
  },
};
