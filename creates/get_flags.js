const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/flags",
    params: { "name": bundle.inputData["name"], "shape": bundle.inputData["shape"], "size": bundle.inputData["size"], "type": bundle.inputData["type"] },
  });
  return response.data;
};

export default {
  key: "get_flags",
  noun: "GeoDB",
  display: {
    label: "Get Flag for Country",
    description: "Retrieve the flag for a specific country",
  },
  operation: {
    inputFields: [
      {
        key: "name",
        label: "Name",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "shape",
        label: "Shape",
        type: 'string',
        required: true,
        helpText: "Flag shape. One of: `'flat'` or `'round'`.",
        choices: ["flat", "round"],
      },
      {
        key: "size",
        label: "Size",
        type: 'string',
        required: false,
        helpText: "Flag size in pixels. Valid options: `16px`, `24px`, `32px`, `48px`, `64px`. Applicable only for PNG or WEBP formats.",
        choices: ["16px", "24px", "32px", "48px", "64px"],
      },
      {
        key: "type",
        label: "Type",
        type: 'string',
        required: true,
        helpText: "Type of flag. One of: `country` or `organization`.",
        choices: ["country", "organization"],
      },
    ],
    perform,
  },
};
