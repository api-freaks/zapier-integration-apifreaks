const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geolocation/lookup",
    method: "POST",
    params: { "lang": bundle.inputData["lang"], "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"], "include": bundle.inputData["include"] },
    body: { "ips": bundle.inputData["ips"] },
  });
  return response.data;
};

export default {
  key: "bulk_ip_lookup",
  noun: "IP Geolocation",
  display: {
    label: "Retrieve geolocation information for multiple IP addresses in a",
    description: "Retrieve detailed geolocation data for multiple IP addresses in a single request.\nSupports up to `50,000` IP-addresses/host-names per request.",
  },
  operation: {
    inputFields: [
      {
        key: "lang",
        label: "Lang",
        type: 'string',
        required: false,
        helpText: "Language of the response.",
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
