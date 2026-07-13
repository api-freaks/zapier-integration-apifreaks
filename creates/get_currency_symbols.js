const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/symbols",
  });
  return response.data;
};

export default {
  key: "get_currency_symbols",
  noun: "Currency",
  display: {
    label: "Get All Currency Symbols",
    description: "Returns a map of currency codes to their full names.",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "currencySymbols": {
        "USD": "US Dollar",
        "EUR": "Euro",
        "GBP": "British Pound Sterling",
        "PKR": "Pakistani Rupee",
        "BTC": "Bitcoin",
        "XAU": "Gold (troy ounce)"
      }
    },
  },
};
