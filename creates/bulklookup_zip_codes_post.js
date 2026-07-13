const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/lookup",
    method: "POST",
    body: { "codes": bundle.inputData["codes"], "country": bundle.inputData["country"] },
  });
  return response.data;
};

export default {
  key: "bulklookup_zip_codes_post",
  noun: "ZIP Code",
  display: {
    label: "Bulk Lookup Zip/Postal Codes",
    description: "Validates a bulk of ZIP/postal codes and returns result for each. Maximum `100` ZIP/postal codes per request.",
  },
  operation: {
    inputFields: [
      {
        key: "codes",
        label: "Codes",
        type: 'string',
        required: true,
        helpText: "Comma separated list of postal / zip codes. Max. 100 values.",
      },
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: false,
        helpText: "Country code in ISO 3166-1 alpha-2 format. If not provided, search results will be returned from all countries.",
      },
    ],
    perform,
    sample: {
      "results": [
        {
          "code": "55270",
          "country_code": "PK",
          "region": "Punjab",
          "city": "Manga Mandi",
          "locality": "",
          "latitude": 31.2989,
          "longitude": 74.07
        },
        {
          "code": "55270",
          "country_code": "PK",
          "region": "Punjab",
          "city": "Lahore",
          "locality": "Manga Mandi",
          "latitude": 31.303999,
          "longitude": 74.063995
        }
      ]
    },
  },
};
