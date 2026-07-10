const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/iban/validation",
    params: { "iban": bundle.inputData["iban"] },
  });
  return response.data;
};

export default {
  key: "get_iban_validation",
  noun: "Financial",
  display: {
    label: "Validate IBAN",
    description: "Checks an IBAN for structural validity, checksum accuracy, and bank metadata.",
  },
  operation: {
    inputFields: [
      {
        key: "iban",
        label: "Iban",
        type: 'string',
        required: true,
        helpText: "IBAN to validate.",
      },
    ],
    perform,
  },
};
