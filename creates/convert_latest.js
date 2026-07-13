const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/converter/latest/prices",
    params: { "from": bundle.inputData["from"], "to": bundle.inputData["to"], "amount": bundle.inputData["amount"], "updates": bundle.inputData["updates"] },
  });
  return response.data;
};

export default {
  key: "convert_latest",
  noun: "Currency",
  display: {
    label: "Convert Currency With Latest Rates",
    description: "Converts an amount from one currency to another using the latest exchange rates.",
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
      "from": "USD",
      "to": "EUR",
      "rate": "0.85948",
      "givenAmount": "100.0",
      "convertedAmount": "85.948"
    },
  },
};
