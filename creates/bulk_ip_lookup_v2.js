const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v2.0/geolocation/lookup",
    method: "POST",
    params: { "lang": bundle.inputData["lang"], "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"], "include": bundle.inputData["include"] },
    body: { "ips": bundle.inputData["ips"] },
  });
  return response.data;
};

export default {
  key: "bulk_ip_lookup_v2",
  noun: "IP Geolocation",
  display: {
    label: "Bulk IP geolocation lookup (v2.0)",
    description: "Retrieve detailed geolocation data for multiple IP addresses in a single request.\nSupports up to `50,000` IP-addresses/host-names per request. - v2.0 response format.",
  },
  operation: {
    inputFields: [
      {
        key: "lang",
        label: "Lang",
        type: 'string',
        required: false,
        helpText: "Language of the response.",
        choices: ["en", "de", "ru", "ja", "fr", "cn", "es", "cs", "it", "ko", "fa", "pt"],
      },
      {
        key: "fields",
        label: "Fields",
        type: 'string',
        required: false,
        helpText: "Comma-separated list of fields to include in the response. Can include \"geo\".",
      },
      {
        key: "excludes",
        label: "Excludes",
        type: 'string',
        required: false,
        helpText: "Comma-separated list of fields to exclude from the response (except \"ip\").",
      },
      {
        key: "include",
        label: "Include",
        type: 'string',
        required: false,
        helpText: "Comma-separated list of additional information to include in the response.",
      },
      {
        key: "ips",
        label: "Ips",
        type: 'string',
        required: true,
        helpText: "List of IP addresses or hostnames to lookup",
      },
    ],
    perform,
  },
};
