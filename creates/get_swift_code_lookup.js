const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/swift-code/lookup",
    params: { "swiftCode": bundle.inputData["swiftCode"] },
  });
  return response.data;
};

export default {
  key: "get_swift_code_lookup",
  noun: "Financial",
  display: {
    label: "Lookup SWIFT code details",
    description: "Fetches detailed information about a SWIFT code.",
  },
  operation: {
    inputFields: [
      {
        key: "swiftCode",
        label: "Swiftcode",
        type: 'string',
        required: true,
        helpText: "SWIFT/BIC code to lookup (must be 8 or 11 characters).",
      },
    ],
    perform,
  },
};
