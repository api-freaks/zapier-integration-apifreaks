const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/commodity/fluctuation",
    params: { "symbols": bundle.inputData["symbols"], "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"] },
  });
  return response.data;
};

export default {
  key: "get_commodity_fluctuation",
  noun: "Commodity",
  display: {
    label: "Get commodity price fluctuations",
    description: "Returns price fluctuation metrics (start, end, change, percent change) for the requested commodity symbols over a date range.",
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
        helpText: "End date in `YYYY-MM-DD` format.",
      },
    ],
    perform,
    sample: {
      "success": true,
      "startDate": "2024-01-01",
      "endDate": "2024-01-31",
      "rates": {
        "WTIOIL-SPOT": {
          "startRate": 72.02,
          "endRate": 75.81,
          "change": 3.79,
          "changePercent": 5.26
        },
        "XAU": {
          "startRate": 2063.63,
          "endRate": 2039.83,
          "change": -23.8,
          "changePercent": -1.15
        }
      }
    },
  },
};
