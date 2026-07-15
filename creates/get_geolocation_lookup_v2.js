const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v2.0/geolocation/lookup",
    params: { "ip": bundle.inputData["ip"], "lang": bundle.inputData["lang"], "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"], "include": bundle.inputData["include"] },
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
};

export default {
  key: "get_geolocation_lookup_v2",
  noun: "IP Geolocation",
  display: {
    label: "IP Geolocation Lookup (V2.0)",
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
    sample: {
      "results": [
        {
      "ip": "8.8.8.8",
      "location": {
        "continent_code": "NA",
        "continent_name": "North America",
        "country_code2": "US",
        "country_code3": "USA",
        "country_name": "United States",
        "country_name_official": "United States of America",
        "country_capital": "Washington, D.C.",
        "state_prov": "California",
        "state_code": "US-CA",
        "district": "Santa Clara",
        "city": "Mountain View",
        "locality": "Mountain View",
        "accuracy_radius": "23.387",
        "confidence": "low",
        "zipcode": "94043-1351",
        "latitude": "37.42240",
        "longitude": "-122.08421",
        "is_eu": false,
        "country_flag": "https://ipgeolocation.io/static/flags/us_64.png",
        "geoname_id": "6301403",
        "country_emoji": "🇺🇸"
      },
      "country_metadata": {
        "calling_code": "+1",
        "tld": ".us",
        "languages": [
          "en-US",
          "es-US",
          "haw",
          "fr"
        ]
      },
      "network": {
        "asn": {
          "as_number": "AS15169",
          "organization": "Google LLC",
          "country": "US",
          "asn_name": "GOOGLE",
          "type": "BUSINESS",
          "domain": "about.google",
          "date_allocated": "",
          "allocation_status": "assigned",
          "num_of_ipv4_routes": "996",
          "num_of_ipv6_routes": "104",
          "rir": "ARIN"
        },
        "connection_type": "",
        "company": {
          "name": "Google LLC",
          "type": "",
          "domain": ""
        }
      },
      "currency": {
        "code": "USD",
        "name": "US Dollar",
        "symbol": "$"
      }
    }
      ]
    },
  },
};
