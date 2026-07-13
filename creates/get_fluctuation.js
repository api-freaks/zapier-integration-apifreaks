const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/fluctuation",
    params: { "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"], "base": bundle.inputData["base"], "symbols": bundle.inputData["symbols"] },
  });
  return response.data;
};

export default {
  key: "get_fluctuation",
  noun: "Currency",
  display: {
    label: "Get Exchange Rate Fluctuations",
    description: "Returns exchange rate fluctuations between two dates for the requested symbols.",
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
      "endDate": "2025-01-10",
      "base": "USD",
      "rateFluctuations": {
        "EUR": {
          "startRate": "0.96605",
          "endRate": "0.97620",
          "change": "-0.010150",
          "percentChange": "-1.05"
        },
        "PKR": {
          "startRate": "278.400",
          "endRate": "278.650",
          "change": "-0.25",
          "percentChange": "-0.09"
        }
      }
    },
  },
};
