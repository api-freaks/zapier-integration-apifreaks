const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/rates/historical",
    params: { "base": bundle.inputData["base"], "symbols": bundle.inputData["symbols"], "date": bundle.inputData["date"] },
  });
  return response.data;
};

export default {
  key: "get_historical_exchange_rates",
  noun: "Currency",
  display: {
    label: "Get Historical Exchange Rates",
    description: "Returns exchange rates for a specific historical date.",
  },
  operation: {
    inputFields: [
      {
        key: "base",
        label: "Base",
        type: 'string',
        required: false,
        helpText: "Base currency code. Defaults to `USD`. Supports fiat, crypto, and metals.",
      },
      {
        key: "symbols",
        label: "Symbols",
        type: 'string',
        required: false,
        helpText: "Comma-separated currency codes. Omit to get all available rates.",
      },
      {
        key: "date",
        label: "Date",
        type: 'string',
        required: true,
        helpText: "Historical date in `YYYY-MM-DD` format.",
      },
    ],
    perform,
    sample: {
      "date": "2025-01-10",
      "base": "USD",
      "rates": {
        "EUR": "0.9762",
        "PKR": "278.65"
      }
    },
  },
};
