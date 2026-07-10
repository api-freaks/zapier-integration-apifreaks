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
    label: "Get supported countries",
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
  },
};
