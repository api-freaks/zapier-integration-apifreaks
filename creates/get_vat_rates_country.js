const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/vat/rates/country",
    params: { "country": bundle.inputData["country"], "state": bundle.inputData["state"] },
  });
  return response.data;
};

export default {
  key: "get_vat_rates_country",
  noun: "Financial",
  display: {
    label: "Get VAT rate by country code",
    description: "Fetches VAT rates for a single country or state provided via query parameters.",
  },
  operation: {
    inputFields: [
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country identifier in Alpha-2 (PK), Alpha-3 (PAK), or full name (Pakistan). Combine with the optional \"state\" query for sub-national VAT; values are case-insensitive and may use underscores instead of spaces.",
      },
      {
        key: "state",
        label: "State",
        type: 'string',
        required: false,
        helpText: "Optional state or region in Alpha-2 (NY) or full name (New_York). Use with \"country\" for state-level VAT; values are case-insensitive and may use underscores.",
      },
    ],
    perform,
    sample: {
      "country": "de",
      "type": "vat",
      "currency": "EUR",
      "standard_rate": 0.19,
      "reduced_rate": [
        0.07,
        0
      ],
      "super_reduced_rate": [
        0.021
      ],
      "parking_rate": 0.19,
      "categories": {
        "broadcasting": 0.19,
        "books": 0.07,
        "newspapers": 0.07,
        "periodicals": 0.07
      }
    },
  },
};
