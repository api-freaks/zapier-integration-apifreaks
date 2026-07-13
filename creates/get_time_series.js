const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/time-series",
    params: { "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"], "base": bundle.inputData["base"], "symbols": bundle.inputData["symbols"] },
  });
  return response.data;
};

export default {
  key: "get_time_series",
  noun: "Currency",
  display: {
    label: "Get Time Series of Exchange Rates",
    description: "Returns day-by-day historical exchange rates for a custom date range.",
  },
  operation: {
    inputFields: [
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
        required: false,
        helpText: "End date in `YYYY-MM-DD` format. Defaults to yesterday.",
      },
      {
        key: "base",
        label: "Base",
        type: 'string',
        required: false,
        helpText: "Base currency code. Defaults to `USD`.",
      },
      {
        key: "symbols",
        label: "Symbols",
        type: 'string',
        required: false,
        helpText: "Comma-separated currency codes. Omit to get all available rates.",
      },
    ],
    perform,
    sample: {
      "startDate": "2025-01-01",
      "endDate": "2025-01-07",
      "base": "USD",
      "historicalRatesList": [
        {
          "date": "2025-01-01",
          "rates": {
            "EUR": "0.96605",
            "PKR": "278.4"
          }
        },
        {
          "date": "2025-01-02",
          "rates": {
            "EUR": "0.9739",
            "PKR": "278.4"
          }
        },
        {
          "date": "2025-01-03",
          "rates": {
            "EUR": "0.97005",
            "PKR": "278.4"
          }
        },
        {
          "date": "2025-01-04",
          "rates": {
            "EUR": "0.97005",
            "PKR": "278.4"
          }
        },
        {
          "date": "2025-01-05",
          "rates": {
            "EUR": "0.9704",
            "PKR": "278.4"
          }
        },
        {
          "date": "2025-01-06",
          "rates": {
            "EUR": "0.96305",
            "PKR": "278.4"
          }
        },
        {
          "date": "2025-01-07",
          "rates": {
            "EUR": "0.967",
            "PKR": "278.4"
          }
        }
      ]
    },
  },
};
