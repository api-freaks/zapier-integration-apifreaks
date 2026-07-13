const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/vat/rates/country",
    method: "POST",
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

    ],
    perform,
    sample: {
      "countries": [
        {
          "country": "de",
          "type": "vat",
          "currency": "EUR",
          "standard_rate": 0.19,
          "reduced_rate": [
            0.07,
            0
          ],
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
