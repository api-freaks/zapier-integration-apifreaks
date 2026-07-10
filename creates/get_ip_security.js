const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/ip/security",
    params: { "ip": bundle.inputData["ip"], "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"] },
  });
  return response.data;
};

export default {
  key: "get_ip_security",
  noun: "IP Geolocation",
  display: {
    label: "Retrieve security information for an IP address",
    description: "Get comprehensive security information for a given IP address. Detects VPNs, proxies, Tor nodes, and other security threats.",
  },
  operation: {
    inputFields: [
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "A valid IPv4 or IPv6 address to look up. If omitted, the API uses the public IP of the requesting client.",
      },
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
    ],
    perform,
  },
};
