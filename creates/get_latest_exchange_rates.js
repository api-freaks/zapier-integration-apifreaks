const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/rates/latest",
    params: { "base": bundle.inputData["base"], "symbols": bundle.inputData["symbols"], "updates": bundle.inputData["updates"] },
  });
  return response.data;
};

export default {
  key: "get_latest_exchange_rates",
  noun: "Currency",
  display: {
    label: "Get the latest exchange rates",
    description: "Returns the latest exchange rates for the requested base currency and symbols.",
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
        key: "updates",
        label: "Updates",
        type: 'string',
        required: false,
        helpText: "Update frequency: `1m` (default), `10m`, `1h`, or `1d`.",
        choices: ["1m", "10m", "1h", "1d"],
      },
    ],
    perform,
    sample: {
      "date": "2026-06-05 09:03:00+00",
      "base": "USD",
      "rates": {
        "EUR": "0.859476",
        "PKR": "278.425"
      }
    },
  },
};
