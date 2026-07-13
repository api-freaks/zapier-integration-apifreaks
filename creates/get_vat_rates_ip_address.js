const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/vat/rates/ip-address",
    params: { "ipAddress": bundle.inputData["ipAddress"] },
  });
  return response.data;
};

export default {
  key: "get_vat_rates_ip_address",
  noun: "Financial",
  display: {
    label: "Get VAT Rate by IP Address",
    description: "Fetches VAT rate based on the specified or originating IP address.",
  },
  operation: {
    inputFields: [
      {
        key: "ipAddress",
        label: "Ipaddress",
        type: 'string',
        required: false,
        helpText: "IPv4 or IPv6 address to look up VAT rate for. If omitted, the originating IP address will be used.",
      },
    ],
    perform,
    sample: {
      "country": "DE",
      "type": "vat",
      "currency": "EUR",
      "standard_rate": 0.19,
      "reduced_rate": [
        0.07,
        0
      ],
      "super_reduced_rate": [
        0.021
      ],
      "parking_rate": 0.19,
      "categories": {
        "broadcasting": 0.19,
        "books": 0.07,
        "newspapers": 0.07,
        "periodicals": 0.07
      }
    },
  },
};
