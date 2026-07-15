const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/user-agent/lookup",
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
};

export default {
  key: "get_user_agent_lookup",
  noun: "User Agent",
  display: {
    label: "User Agent Lookup",
    description: "Parse User Agent string to get detailed browser, device, and operating system information",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "results": [
        {
      "user_agent_string": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:142.0) Gecko/20100101 Firefox/142.0",
      "name": "Firefox",
      "type": "Browser",
      "version": "142.0",
      "version_major": "142",
      "device": {
        "name": "Linux Desktop",
        "type": "Desktop",
        "brand": "Unknown",
        "cpu": "Intel x86_64"
      },
      "engine": {
        "name": "Gecko",
        "type": "Browser",
        "version": "142.0",
        "version_major": "142"
      },
      "operating_system": {
        "name": "Ubuntu",
        "type": "Desktop",
        "version": "??",
        "version_major": "??",
        "build": "??"
      }
    }
      ]
    },
  },
};
