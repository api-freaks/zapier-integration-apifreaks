const perform = async (z, bundle) => {
  // compare must be an ARRAY of strings (the field accepts a comma-separated list).
  const toArray = (val) => {
    if (val == null || val === "") return [];
    const parts = Array.isArray(val) ? val : String(val).split(",");
    return parts.map((s) => String(s).trim()).filter(Boolean);
  };

  // Required fields.
  const body = {
    compare: toArray(bundle.inputData.compare),
    country: bundle.inputData.country,
  };

  // Optional base point + unit — only include when provided so we never send
  // empty strings (an empty string where a number is expected triggers the
  // "not in the expected format" 400). lat/long must be numbers.
  if (bundle.inputData.code) {
    body.code = bundle.inputData.code;
  }
  if (bundle.inputData.lat !== undefined && bundle.inputData.lat !== null && bundle.inputData.lat !== "") {
    body.lat = Number(bundle.inputData.lat);
  }
  if (bundle.inputData.long !== undefined && bundle.inputData.long !== null && bundle.inputData.long !== "") {
    body.long = Number(bundle.inputData.long);
  }
  if (bundle.inputData.unit) {
    body.unit = bundle.inputData.unit;
  }

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/distance",
    method: "POST",
    body,
  });
  return response.data;
};

export default {
  key: "get_zipcode_distance",
  noun: "ZIP Code",
  display: {
    label: "Get Distance Between Postal Codes",
    description: "Get distance between postal codes. Maximum `100` postal codes per request.",
  },
  operation: {
    inputFields: [
      {
        key: "compare",
        label: "Compare",
        type: "string",
        list: true,
        required: true,
        helpText:
          "Postal / zip codes to compare against the base point. Max 100 zip codes. (Also accepts a single comma-separated value.)",
      },
      {
        key: "code",
        label: "Code",
        type: "string",
        required: false,
        helpText: "Postal/Zip code to be used as the base point.",
      },
      {
        key: "lat",
        label: "Lat",
        type: "number",
        required: false,
        helpText: "Latitude coordinate for the base location (-90 to 90).",
      },
      {
        key: "long",
        label: "Long",
        type: "number",
        required: false,
        helpText: "Longitude coordinate for the base location (-180 to 180).",
      },
      {
        key: "country",
        label: "Country",
        type: "string",
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
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
      "result_count": 2,
      "results": [
        {
          "code": "49610",
          "distance": 14.835
        },
        {
          "code": "49608",
          "distance": 14.835
        }
      ]
    },
  },
};