const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/dns/live",
    params: { "host-name": bundle.inputData["host-name"], "ipAddress": bundle.inputData["ipAddress"], "type": bundle.inputData["type"] },
  });
  return response.data;
};

export default {
  key: "dns_lookup",
  noun: "DNS",
  display: {
    label: "DNS Lookup",
    description: "Retrieve real-time DNS records for any hostname. Supports multiple record types including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.",
  },
  operation: {
    inputFields: [
      {
        key: "host-name",
        label: "Host Name",
        type: 'string',
        required: false,
        helpText: "Hostname or URL whose DNS records are required.",
      },
      {
        key: "ipAddress",
        label: "Ipaddress",
        type: 'string',
        required: false,
        helpText: "The IP address for requested DNS's PTR record. 'type' parameter must be set to 'all'.",
      },
      {
        key: "type",
        label: "Type",
        type: 'string',
        required: true,
        helpText: "A comma-separated list of DNS record types for lookup. Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all. When ipAddress is provided, type must be \"all\".",
      },
    ],
    perform,
    sample: {
      "status": true,
      "queryTime": "2026-06-06 10:43:05",
      "domainName": "example.com",
      "domainRegistered": true,
      "dnsTypes": {
        "A": 1,
        "NS": 2,
        "SOA": 6,
        "MX": 15,
        "TXT": 16,
        "AAAA": 28,
        "SPF": 99
      },
      "dnsRecords": [
        {
          "name": "example.com",
          "type": 1,
          "dnsType": "A",
          "ttl": 300,
          "rawText": "example.com.\t\t300\tIN\tA\t104.20.23.154",
          "rRsetType": 1,
          "address": "104.20.23.154"
        },
        {
          "name": "example.com",
          "type": 1,
          "dnsType": "A",
          "ttl": 300,
          "rawText": "example.com.\t\t300\tIN\tA\t172.66.147.243",
          "rRsetType": 1,
          "address": "172.66.147.243"
        },
        {
          "name": "example.com",
          "type": 2,
          "dnsType": "NS",
          "ttl": 21600,
          "rawText": "example.com.\t\t21600\tIN\tNS\telliott.ns.cloudflare.com.",
          "rRsetType": 2,
          "singleName": "elliott.ns.cloudflare.com."
        },
        {
          "name": "example.com",
          "type": 2,
          "dnsType": "NS",
          "ttl": 21600,
          "rawText": "example.com.\t\t21600\tIN\tNS\thera.ns.cloudflare.com.",
          "rRsetType": 2,
          "singleName": "hera.ns.cloudflare.com."
        },
        {
          "name": "example.com",
          "type": 6,
          "dnsType": "SOA",
          "ttl": 1800,
          "rawText": "example.com.\t\t1800\tIN\tSOA\telliott.ns.cloudflare.com. dns.cloudflare.com. 2405749864 10000 2400 604800 1800",
          "rRsetType": 6,
          "admin": "dns.cloudflare.com.",
          "host": "elliott.ns.cloudflare.com.",
          "expire": 604800,
          "minimum": 1800,
          "refresh": 10000,
          "retry": 2400,
          "serial": 2405749864
        },
        {
          "name": "example.com",
          "type": 15,
          "dnsType": "MX",
          "ttl": 236,
          "rawText": "example.com.\t\t236\tIN\tMX\t0 .",
          "rRsetType": 15,
          "target": ".",
          "priority": 0
        },
        {
          "name": "example.com",
          "type": 16,
          "dnsType": "TXT",
          "ttl": 300,
          "rawText": "example.com.\t\t300\tIN\tTXT\t\"_k2n1y4vw3qtb4skdx9e7dxt97qrmmq9\"",
          "rRsetType": 16,
          "strings": [
            "_k2n1y4vw3qtb4skdx9e7dxt97qrmmq9"
          ]
        },
        {
          "name": "example.com",
          "type": 28,
          "dnsType": "AAAA",
          "ttl": 300,
          "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:10:0:0:0:ac42:93f3",
          "rRsetType": 28,
          "address": "2606:4700:10:0:0:0:ac42:93f3"
        },
        {
          "name": "example.com",
          "type": 28,
          "dnsType": "AAAA",
          "ttl": 300,
          "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:10:0:0:0:6814:179a",
          "rRsetType": 28,
          "address": "2606:4700:10:0:0:0:6814:179a"
        },
        {
          "name": "example.com",
          "type": 99,
          "dnsType": "SPF",
          "ttl": 300,
          "rawText": "example.com.\t\t300\tIN\tSPF\t\"v=spf1 -all\"",
          "rRsetType": 99,
          "strings": [
            "v=spf1 -all"
          ]
        }
      ]
    },
  },
};
