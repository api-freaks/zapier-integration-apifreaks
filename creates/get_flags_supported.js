const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/flags/supported",
  });
  return response.data;
};

export default {
  key: "get_flags_supported",
  noun: "GeoDB",
  display: {
    label: "Supported Flags",
    description: "Get list of all supported flags with their metadata",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "name": "United States",
      "iso2": "US",
      "iso3": "USA"
    },
  },
};