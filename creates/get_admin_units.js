const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/admin-levels",
    params: { "country": bundle.inputData["country"] },
  });
  return response.data;
};

export default {
  key: "get_admin_units",
  noun: "GeoDB",
  display: {
    label: "Get Administrative Units for a Country",
    description: "Retrieve administrative units based on ISO 3166-1 alpha-2 country code.",
  },
  operation: {
    inputFields: [
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format",
      },
    ],
    perform,
    sample: {
      "admin_levels": [
        "example"
      ]
    },
  },
};
