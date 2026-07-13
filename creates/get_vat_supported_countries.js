const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/vat/supported-countries",
    params: { "type": bundle.inputData["type"] },
  });
  return response.data;
};

export default {
  key: "get_vat_supported_countries",
  noun: "Financial",
  display: {
    label: "Get Supported Countries",
    description: "Retrieves a list of supported countries.",
  },
  operation: {
    inputFields: [
      {
        key: "type",
        label: "Type",
        type: 'string',
        required: false,
        helpText: "Type of supported country. Supported values: IBAN, SWIFT, VAT. By default, it returns all supported countries for all types.",
        choices: ["IBAN", "SWIFT", "VAT"],
      },
    ],
    perform,
    sample: {
      "VAT_Supported_Countries_And_States": [
        {
          "afghanistan": {
            "code": "af"
          }
        },
        {
          "albania": {
            "code": "al"
          }
        },
        {
          "algeria": {
            "code": "dz"
          }
        }
      ],
      "IBAN_Supported_Countries": [
        {
          "countryCode": "AL",
          "name": "Albania"
        },
        {
          "countryCode": "AD",
          "name": "Andorra"
        },
        {
          "countryCode": "AT",
          "name": "Austria"
        },
        {
          "countryCode": "AZ",
          "name": "Azerbaijan"
        }
      ],
      "SWIFT_Supported_Countries": [
        {
          "name": "Albania",
          "countryCode": "AL"
        },
        {
          "name": "Andorra",
          "countryCode": "AD"
        },
        {
          "name": "Argentina",
          "countryCode": "AR"
        }
      ]
    },
  },
};
