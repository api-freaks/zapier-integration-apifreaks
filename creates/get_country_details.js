const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/country/details",
    params: { "country": bundle.inputData["country"] },
  });
  return response.data;
};

export default {
  key: "get_country_details",
  noun: "GeoDB",
  display: {
    label: "Get GeoDB Country Details",
    description: "Get GeoDB Country Details",
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
    ],
    perform,
  },
};
