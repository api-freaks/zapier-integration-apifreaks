const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/converter/historical/prices",
    params: { "from": bundle.inputData["from"], "to": bundle.inputData["to"], "amount": bundle.inputData["amount"], "date": bundle.inputData["date"] },
  });
  return response.data;
};

export default {
  key: "convert_historical",
  noun: "Currency",
  display: {
    label: "Convert Currency With Historical Rates",
    description: "Converts an amount using exchange rates from a specific historical date.",
  },
  operation: {
    inputFields: [
      {
        key: "from",
        label: "From",
        type: 'string',
        required: true,
        helpText: "Source currency code.",
      },
      {
        key: "to",
        label: "To",
        type: 'string',
        required: true,
        helpText: "Target currency code.",
      },
      {
        key: "amount",
        label: "Amount",
        type: 'string',
        required: false,
        helpText: "Amount to convert as a positive decimal. Defaults to `1`.",
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
      "from": "USD",
      "to": "EUR",
      "rate": "0.97620",
      "givenAmount": "100.0",
      "convertedAmount": "97.620"
    },
  },
};
