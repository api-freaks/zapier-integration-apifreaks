const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v2.0/geolocation/lookup",
    method: "POST",
    params: { "lang": bundle.inputData["lang"], "fields": bundle.inputData["fields"], "excludes": bundle.inputData["excludes"], "include": bundle.inputData["include"] },
    body: { "ips": bundle.inputData["ips"] },
  });
  // API returns a bare array; wrap it so this create outputs an object
  // (Zapier creates must return an object, not a top-level array).
  return Array.isArray(response.data) ? { results: response.data } : response.data;
};

export default {
  key: "bulk_ip_lookup_v2",
  noun: "IP Geolocation",
  display: {
    label: "Bulk IP Geolocation Lookup (V2.0)",
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
        "accuracy_radius": "39.202",
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
          "domain": "google.com",
          "date_allocated": "2000-03-30",
          "allocation_status": "",
          "num_of_ipv4_routes": "1064",
          "num_of_ipv6_routes": "155",
          "rir": "ARIN"
        },
        "connection_type": "",
        "company": {
          "name": "Google LLC",
          "type": "Hosting",
          "domain": "google.com"
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