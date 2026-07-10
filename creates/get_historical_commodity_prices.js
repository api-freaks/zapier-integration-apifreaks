const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/commodity/rates/historical",
    params: { "symbols": bundle.inputData["symbols"], "date": bundle.inputData["date"] },
  });
  return response.data;
};

export default {
  key: "get_historical_commodity_prices",
  noun: "Commodity",
  display: {
    label: "Get historical commodity prices",
    description: "Returns OHLC price data for the requested commodity symbols on a specific date.",
  },
  operation: {
    inputFields: [
      {
        key: "symbols",
        label: "Symbols",
        type: 'string',
        required: true,
        helpText: "Comma-separated list of commodity symbols.",
      },
      {
        key: "date",
        label: "Date",
        type: 'string',
        required: true,
        helpText: "Date in `YYYY-MM-DD` format. Data available from 1990 onwards.",
      },
    ],
    perform,
    sample: {
      "success": true,
      "date": "2025-01-10",
      "rates": {
        "WTIOIL-SPOT": {
          "date": "2025-01-10",
          "open": 73.77,
          "high": 77.16,
          "low": 73.55,
          "close": 75.97
        },
        "XAU": {
          "date": "2025-01-10",
          "open": 2669.93,
          "high": 2697.85,
          "low": 2663.61,
          "close": 2689.44
        }
      }
    },
  },
};
