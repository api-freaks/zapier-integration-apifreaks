const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/commodity/time-series",
    params: { "symbols": bundle.inputData["symbols"], "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"] },
  });
  return response.data;
};

export default {
  key: "get_commodity_time_series",
  noun: "Commodity",
  display: {
    label: "Get Commodity Price Time Series",
    description: "Returns day-by-day OHLC data for the requested commodity symbols within a date range.",
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
        key: "startDate",
        label: "Startdate",
        type: 'string',
        required: true,
        helpText: "Start date in `YYYY-MM-DD` format.",
      },
      {
        key: "endDate",
        label: "Enddate",
        type: 'string',
        required: true,
        helpText: "End date in `YYYY-MM-DD` format. Maximum range is 365 days.",
      },
    ],
    perform,
    sample: {
      "success": true,
      "startDate": "2025-01-06",
      "endDate": "2025-01-10",
      "rates": {
        "2025-01-06": {
          "XAU": {
            "open": 2649.01,
            "high": 2651.33,
            "low": 2645.36,
            "close": 2646.91
          }
        },
        "2025-01-07": {
          "XAU": {
            "open": 2662.45,
            "high": 2663.06,
            "low": 2655.66,
            "close": 2658.9
          }
        },
        "2025-01-08": {
          "XAU": {
            "open": 2669.69,
            "high": 2674.68,
            "low": 2668.58,
            "close": 2671.8
          }
        },
        "2025-01-09": {
          "XAU": {
            "open": 2669.89,
            "high": 2697.87,
            "low": 2663.16,
            "close": 2685.61
          }
        },
        "2025-01-10": {
          "XAU": {
            "open": 2669.93,
            "high": 2697.85,
            "low": 2663.61,
            "close": 2689.44
          }
        }
      }
    },
  },
};
