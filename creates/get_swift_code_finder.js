const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/swift-code/finder",
    params: { "country": bundle.inputData["country"], "bank": bundle.inputData["bank"], "city": bundle.inputData["city"] },
  });
  return response.data;
};

export default {
  key: "get_swift_code_finder",
  noun: "Financial",
  display: {
    label: "Find SWIFT codes",
    description: "Fetches SWIFT codes for a given country, bank, and city.",
  },
  operation: {
    inputFields: [
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: false,
        helpText: "Country name (accepts full name, e.g., Pakistan, United States). If only the country parameter is supplied, lists all banks in the country.",
      },
      {
        key: "bank",
        label: "Bank",
        type: 'string',
        required: false,
        helpText: "Bank name (upper case) used to filter SWIFT codes. Should be used together with the country parameter. If only country and bank are provided (without city), returns the list of cities for that bank.",
      },
      {
        key: "city",
        label: "City",
        type: 'string',
        required: false,
        helpText: "Gives SWIFT codes for a bank. Optionally specify the city (upper case) to narrow results to a specific city for that bank.",
      },
    ],
    perform,
  },
};
