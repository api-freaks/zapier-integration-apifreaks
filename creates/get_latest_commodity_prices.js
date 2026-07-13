const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/commodity/rates/latest",
    params: { "symbols": bundle.inputData["symbols"], "updates": bundle.inputData["updates"], "quote": bundle.inputData["quote"] },
  });
  return response.data;
};

export default {
  key: "get_latest_commodity_prices",
  noun: "Commodity",
  display: {
    label: "Get Latest Commodity Prices",
    description: "Returns the current live price for the requested commodity symbols.",
  },
  operation: {
    inputFields: [
      {
        key: "symbols",
        label: "Symbols",
        type: 'string',
        required: true,
        helpText: "Comma-separated list of commodity symbols (e.g., `XAU`, `WTIOIL-SPOT`).",
      },
      {
        key: "updates",
        label: "Updates",
        type: 'string',
        required: true,
        helpText: "Update frequency. Accepted values: `1m` (default), `10m`.",
        choices: ["1m", "10m"],
      },
      {
        key: "quote",
        label: "Quote",
        type: 'string',
        required: false,
        helpText: "Target currency for the exchange rate. Defaults to the market currency of each commodity.",
      },
    ],
    perform,
    sample: {
      "success": true,
      "timestamp": 1780644645,
      "rates": {
        "WTIOIL-SPOT": 90.62,
        "XAU": 4466.05
      },
      "metadata": {
        "WTIOIL-SPOT": {
          "unit": "Bbl",
          "quote": "USD"
        },
        "XAU": {
          "unit": "T.oz",
          "quote": "USD"
        }
      }
    },
  },
};
