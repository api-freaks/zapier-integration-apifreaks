const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/flags/supported",
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
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
      "results": [
        {
      "name": "United States",
      "iso2": "US",
      "iso3": "USA"
    }
      ]
    },
  },
};