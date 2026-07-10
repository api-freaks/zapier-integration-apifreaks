const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v2.0/geolocation/lookup",
    params: { "ip": bundle.inputData["ip"], "lang": bundle.inputData["lang"], "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"], "include": bundle.inputData["include"] },
  });
  return response.data;
};

export default {
  key: "get_geolocation_lookup_v2",
  noun: "IP Geolocation",
  display: {
    label: "IP geolocation lookup (v2.0)",
    description: "Get detailed IP geolocation data for an IP address including country, city, timezone, currency, and optional threat intelligence and user-agent information - v2.0 response format.",
  },
  operation: {
    inputFields: [
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IPv4, IPv6, or hostname for geolocation lookup",
      },
      {
        key: "lang",
        label: "Lang",
        type: 'string',
        required: false,
        helpText: "Response language for location fields",
        choices: ["en", "de", "ru", "ja", "fr", "cn", "es", "cs", "it", "ko", "fa", "pt"],
      },
      {
        key: "fields",
        label: "Fields",
        type: 'string',
        required: false,
        helpText: "Comma separated list of fields to include in response",
      },
      {
        key: "excludes",
        label: "Excludes",
        type: 'string',
        required: false,
        helpText: "Comma separated list of fields to exclude from response",
      },
      {
        key: "include",
        label: "Include",
        type: 'string',
        required: false,
        helpText: "Additional data to include (location, network, security, currency, time_zone, user_agent, country_metadata , hostname, liveHostname, hostnameFallbackLivet)",
      },
    ],
    perform,
  },
};
