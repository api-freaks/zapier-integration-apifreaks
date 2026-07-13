const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/ip/whois/live",
    params: { "ip": bundle.inputData["ip"] },
  });
  return response.data;
};

export default {
  key: "get_ip_whois_live",
  noun: "WHOIS",
  display: {
    label: "IP WHOIS Lookup",
    description: "Returns WHOIS registration details for a specified IP address (IPv4 or IPv6).",
  },
  operation: {
    inputFields: [
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: true,
        helpText: "The IP address (IPv4 or IPv6) for which WHOIS data is requested.",
      },
    ],
    perform,
    sample: {
      "status": true,
      "ip_address": "8.8.8.8",
      "query_time": "2026-06-05 15:33:44",
      "whois_server": "whois.arin.net",
      "inet_nums": [
        {
          "start_ip": "8.8.8.0",
          "end_ip": "8.8.8.255",
          "cidr": [
            "8.8.8.0/24"
          ],
          "net_name": "GOGL",
          "net_handle": "NET-8-8-8-0-2",
          "status": "Direct Allocation",
          "organization": "Google LLC (GOGL)",
          "date_created": "2023-12-28",
          "date_updated": "2023-12-28",
          "source": "https://rdap.arin.net/registry/ip/8.8.8.0",
          "parents": [
            "NET8 (NET-8-0-0-0-0)"
          ]
        }
      ],
      "organization": {
        "handle": "GOGL",
        "name": "Google LLC",
        "address": [
          "1600 Amphitheatre Parkway",
          "Mountain View",
          "CA",
          "94043",
          "US"
        ],
        "street": "Amphitheatre Parkway",
        "city": "Mountain View",
        "state": "CA",
        "zip_code": "94043",
        "country": [
          "US"
        ],
        "date_created": "2000-03-30",
        "date_updated": "2019-10-31",
        "source": "https://rdap.arin.net/registry/entity/GOGL"
      },
      "technical_contacts": [
        {
          "handle": "ZG39-ARIN",
          "name": "Google LLC",
          "email": [
            "arin-contact@google.com"
          ],
          "phone": [
            "+1-650-253-0000"
          ],
          "source": "https://rdap.arin.net/registry/entity/ZG39-ARIN"
        }
      ],
      "abuse_contacts": [
        {
          "handle": "ABUSE5250-ARIN",
          "name": "Abuse",
          "email": [
            "network-abuse@google.com"
          ],
          "phone": [
            "+1-650-253-0000"
          ],
          "source": "https://rdap.arin.net/registry/entity/ABUSE5250-ARIN"
        }
      ],
      "routes": [
        {
          "source": "https://rdap.arin.net/registry/ip/8.8.8.0"
        }
      ],
      "whois_raw_response": "..."
    },
  },
};
