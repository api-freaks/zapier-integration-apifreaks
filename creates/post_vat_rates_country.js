const perform = async (z, bundle) => {
  // Zapier passes the line-item field "countries" as an array of objects,
  // e.g. [{ country: "PAK" }, { country: "United_States", state: "New_York" }].
  // Drop any blank rows and omit empty "state" values.
  const countries = (bundle.inputData["countries"] || [])
    .filter((c) => c && c.country)
    .map((c) => {
      const entry = { country: c.country };
      if (c.state) entry.state = c.state;
      return entry;
    });

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/vat/rates/country",
    method: "POST",
    body: { "countries": countries },
  });
  return response.data;
};

export default {
  key: "post_vat_rates_country",
  noun: "Financial",
  display: {
    label: "Bulk VAT Lookup by Country",
    description: "Retrieves VAT details for multiple countries or country-state combinations in a single request. Maximum of `100` entries per request are allowed.",
  },
  operation: {
    inputFields: [
      {
        key: "countries",
        label: "Countries",
        required: true,
        children: [
          {
            key: "country",
            label: "Country",
            type: 'string',
            required: true,
            helpText: "Country identifier in Alpha-2 (PK), Alpha-3 (PAK), or full name (Pakistan). Case-insensitive; may use underscores instead of spaces.",
          },
          {
            key: "state",
            label: "State",
            type: 'string',
            required: false,
            helpText: "Optional state/region in Alpha-2 (NY) or full name (New_York) for state-level VAT.",
          },
        ],
      },
    ],
    perform,
    sample: {
      "countries": [
        {
          "country": "de",
          "type": "vat",
          "currency": "EUR",
          "standard_rate": 0.19,
          "reduced_rate": [0.07, 0],
          "categories": {
            "broadcasting": 0.19,
            "books": 0.07,
            "newspapers": 0.07,
            "periodicals": 0.07
          }
        },
        {
          "country": "United_States",
          "state": "New_York",
          "type": "vat",
          "currency": "USD",
          "standard_rate": 0.04
        }
      ]
    },
  },
};