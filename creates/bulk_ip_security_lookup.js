const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/ip/security",
    method: "POST",
    params: { "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"] },
    body: { "ips": bundle.inputData["ips"] },
  });
  return response.data;
};

export default {
  key: "bulk_ip_security_lookup",
  noun: "IP Geolocation",
  display: {
    label: "Retrieve security details for multiple IP addresses in a single",
    description: "The Bulk IP Security Lookup API allows you to retrieve security details for up to `50,000` IP-addresses in a single request.",
  },
  operation: {
    inputFields: [
      {
        key: "fields",
        label: "Fields",
        type: 'string',
        required: false,
        helpText: "Comma-separated list of fields to return. Supports dot notation (e.g. security.threat_score).",
      },
      {
        key: "excludes",
        label: "Excludes",
        type: 'string',
        required: false,
        helpText: "Comma-separated list of fields to remove from the response. Supports dot notation (e.g. security.is_tor).",
      },
      {
        key: "ips",
        label: "Ips",
        type: 'string',
        required: true,
        helpText: "List of IP addresses to lookup",
      },
    ],
    perform,
  },
};
