const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/distance/match",
    method: "POST",
    body: { "codes": bundle.inputData["codes"], "country": bundle.inputData["country"], "distance": bundle.inputData["distance"], "unit": bundle.inputData["unit"] },
  });
  return response.data;
};

export default {
  key: "get_zipcode_distance_match",
  noun: "ZIP Code",
  display: {
    label: "Get Matching ZIP/Postal Code Pairs Within a Distance",
    description: "Get matching ZIP/postal code pairs within a specified distance. Maximum `100` postal codes per request.",
  },
  operation: {
    inputFields: [
      {
        key: "codes",
        label: "Codes",
        type: 'string',
        required: true,
        helpText: "Comma-separated list of postal/zip codes. Maximum 100 values allowed.",
      },
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "distance",
        label: "Distance",
        type: 'string',
        required: false,
        helpText: "Maximum allowed distance between postal code pairs.",
      },
      {
        key: "unit",
        label: "Unit",
        type: 'string',
        required: false,
        helpText: "Supported distance units are m, km, mi, ft, yd, in.",
        choices: ["m", "km", "mi", "ft", "yd", "in"],
      },
    ],
    perform,
    sample: {
      "result_count": 1,
      "results": [
        {
          "code_1": "49610",
          "code_2": "55270",
          "distance": 14.835
        }
      ]
    },
  },
};
