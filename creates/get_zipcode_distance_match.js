const perform = async (z, bundle) => {
  // "codes" must be an ARRAY of strings (the field accepts a comma-separated list).
  const toArray = (val) => {
    if (val == null || val === "") return [];
    const parts = Array.isArray(val) ? val : String(val).split(",");
    return parts.flatMap((v) => String(v).split(",")).map((s) => s.trim()).filter(Boolean);
  };

  // Required fields.
  const body = {
    codes: toArray(bundle.inputData.codes),
    country: bundle.inputData.country,
  };

  // Optional fields — only include when present so empty strings never hit the
  // body (an empty string where a number is expected triggers the 400).
  if (
    bundle.inputData.distance !== undefined &&
    bundle.inputData.distance !== null &&
    bundle.inputData.distance !== ""
  ) {
    body.distance = Number(bundle.inputData.distance);
  }
  if (bundle.inputData.unit) {
    body.unit = bundle.inputData.unit;
  }

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/distance/match",
    method: "POST",
    body,
  });
  return response.data;
};

export default {
  key: "get_zipcode_distance_match",
  noun: "ZIP Code",
  display: {
    label: "Get Matching Zip/Postal Code Pairs Within a Distance",
    description: "Get matching ZIP/postal code pairs within a specified distance. Maximum `100` postal codes per request.",
  },
  operation: {
    inputFields: [
      {
        key: "codes",
        label: "Codes",
        type: "string",
        list: true,
        required: true,
        helpText: "Postal/zip codes to match against each other. Maximum 100 values. (Also accepts a single comma-separated value.)",
      },
      {
        key: "country",
        label: "Country",
        type: "string",
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "distance",
        label: "Distance",
        type: "number",
        required: false,
        helpText: "Maximum allowed distance between postal code pairs.",
      },
      {
        key: "unit",
        label: "Unit",
        type: "string",
        required: false,
        helpText: "Supported distance units are m, km, mi, ft, yd, in. Default is km.",
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