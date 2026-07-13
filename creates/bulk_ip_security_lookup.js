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
    label: "Bulk IP Security Lookup",
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
    sample: {
      "ip": "8.8.8.8",
      "security": {
        "threat_score": 5,
        "is_tor": false,
        "is_proxy": false,
        "proxy_provider_names": [],
        "proxy_confidence_score": 0,
        "proxy_last_seen": "",
        "is_residential_proxy": false,
        "is_vpn": false,
        "vpn_provider_names": [],
        "vpn_confidence_score": 0,
        "vpn_last_seen": "",
        "is_relay": false,
        "relay_provider_name": "",
        "is_anonymous": false,
        "is_known_attacker": false,
        "is_bot": false,
        "is_spam": false,
        "is_cloud_provider": true,
        "cloud_provider_name": "Google LLC"
      }
    },
  },
};