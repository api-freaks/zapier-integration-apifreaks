const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/converter/ip-to-currency",
    params: { "from": bundle.inputData["from"], "ip": bundle.inputData["ip"], "amount": bundle.inputData["amount"], "updates": bundle.inputData["updates"] },
  });
  return response.data;
};

export default {
  key: "convert_by_ip",
  noun: "Currency",
  display: {
    label: "Convert currency based on IP geolocation",
    description: "Converts an amount to the local currency of a given IP address.",
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
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IPv4 or IPv6 address. Defaults to the request IP.",
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
      "date": "2026-06-05 14:39:00+00",
      "from": "USD",
      "to": "PKR",
      "rate": "278.425",
      "ipAddress": "182.186.18.91",
      "givenAmount": "100.0",
      "convertedAmount": "27842.500"
    },
  },
};
