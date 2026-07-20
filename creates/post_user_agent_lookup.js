const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/user-agent/lookup",
    method: "POST",
    body: { "uaStrings": bundle.inputData["uaStrings"] },
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
};

export default {
  key: "post_user_agent_lookup",
  noun: "User Agent",
  display: {
    label: "Bulk User Agent Lookup",
    description: "Parse up to `50,000 User-Agent strings` at once in a single request.",
  },
  operation: {
    inputFields: [
      {
        key: "uaStrings",
        label: "User Agent Strings",
        type: 'string',
        list: true,
        required: true,
        helpText: "List of user agent strings to parse. Add one User-Agent string per line.",
      },
    ],
    perform,
    sample: {
      "results": [
        {
          "user_agent_string": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
          "name": "Chrome",
          "type": "Browser",
          "version": "62.0.3202.84",
          "version_major": "62",
          "device": {
            "name": "Samsung SM-G960F",
            "type": "Phone",
            "brand": "Samsung",
            "cpu": "Unknown"
          },
          "engine": {
            "name": "Blink",
            "type": "Browser",
            "version": "62.0",
            "version_major": "62"
          },
          "operating_system": {
            "name": "Android",
            "type": "Mobile",
            "version": "8.0.0",
            "version_major": "8",
            "build": "R16NW"
          }
        }
      ]
    },
  },
};