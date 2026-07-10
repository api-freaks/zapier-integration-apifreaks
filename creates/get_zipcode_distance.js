const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/distance",
    method: "POST",
    body: { "compare": bundle.inputData["compare"], "code": bundle.inputData["code"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "country": bundle.inputData["country"], "unit": bundle.inputData["unit"] },
  });
  return response.data;
};

export default {
  key: "get_zipcode_distance",
  noun: "ZIP Code",
  display: {
    label: "Get distance between postal codes",
    description: "Get distance between postal codes. Maximum `100` postal codes per request.",
  },
  operation: {
    inputFields: [
      {
        key: "compare",
        label: "Compare",
        type: 'string',
        required: true,
        helpText: "Comma separated list of postal / zip codes with which base point is compared w.r.t. Max 100 zip codes can be provided.",
      },
      {
        key: "code",
        label: "Code",
        type: 'string',
        required: false,
        helpText: "Postal/Zip code to be used as the base point.",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude coordinate for the base location.",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude coordinate for the base location.",
      },
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
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
  },
};
