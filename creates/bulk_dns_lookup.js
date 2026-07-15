const toArray = (val) => {
  if (val == null || val === "") return [];
  if (Array.isArray(val)) {
    return val
      .flatMap((v) => String(v).split(","))
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return String(val)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
};

const perform = async (z, bundle) => {
  const domainNames = toArray(bundle.inputData.domainNames);
  const ipAddresses = toArray(bundle.inputData.ipAddresses);

  if (domainNames.length === 0 && ipAddresses.length === 0) {
    throw new z.errors.Error(
      "Provide at least one domain name or IP address.",
      "InvalidData",
      400
    );
  }

  const body = {};
  if (domainNames.length) body.domainNames = domainNames;
  if (ipAddresses.length) body.ipAddresses = ipAddresses;

  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/dns/live",
    method: "POST",
    params: { type: bundle.inputData.type },
    body, 
  });
  return response.data;
};

export default {
  key: "bulk_dns_lookup",
  noun: "DNS",
  display: {
    label: "Bulk DNS Lookup",
    description:
      "Perform DNS lookups for multiple hostnames in a single request. Supports up to 100 hostnames per request and returns DNS records including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.",
  },
  operation: {
    inputFields: [
      {
        key: "type",
        label: "Type",
        type: "string",
        required: true,
        default: "all",
        helpText:
          "A comma-separated list of DNS record types for lookup. Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all",
      },
      {
        key: "domainNames",
        label: "Domain Names",
        type: "string",
        list: true,
        required: false,
        helpText: "List of hostnames to lookup DNS records for (up to 100).",
      },
      {
        key: "ipAddresses",
        label: "IP Addresses",
        type: "string",
        list: true,
        required: false,
        helpText:
          "IP addresses to include in the lookup for enrichment / reverse (PTR) lookups (up to 100).",
      },
    ],
    perform,
    sample: {
      "bulk_dns_info": [
        {
          "status": true,
          "queryTime": "2026-06-17 09:43:40",
          "ipAddress": "8.8.8.8",
          "dnsTypes": {
            "PTR": 12
          },
          "dnsRecords": [
            {
              "name": "8.8.8.8.in-addr.arpa",
              "type": 12,
              "dnsType": "PTR",
              "ttl": 3933,
              "rawText": "8.8.8.8.in-addr.arpa.\t3933\tIN\tPTR\tdns.google.",
              "rRsetType": 12,
              "singleName": "dns.google."
            }
          ]
        },
        {
          "status": true,
          "queryTime": "2026-06-17 09:43:40",
          "domainName": "google.com",
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
              "name": "google.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 266,
              "rawText": "google.com.\t\t266\tIN\tA\t142.250.27.113",
              "rRsetType": 1,
              "address": "142.250.27.113"
            },
            {
              "name": "google.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 266,
              "rawText": "google.com.\t\t266\tIN\tA\t142.250.27.100",
              "rRsetType": 1,
              "address": "142.250.27.100"
            },
            {
              "name": "google.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "google.com.\t\t21600\tIN\tNS\tns3.google.com.",
              "rRsetType": 2,
              "singleName": "ns3.google.com."
            },
            {
              "name": "google.com",
              "type": 6,
              "dnsType": "SOA",
              "ttl": 20,
              "rawText": "google.com.\t\t20\tIN\tSOA\tns1.google.com. dns-admin.google.com. 932992649 900 900 1800 60",
              "rRsetType": 6,
              "admin": "dns-admin.google.com.",
              "host": "ns1.google.com.",
              "expire": 1800,
              "minimum": 60,
              "refresh": 900,
              "retry": 900,
              "serial": 932992649
            },
            {
              "name": "google.com",
              "type": 15,
              "dnsType": "MX",
              "ttl": 198,
              "rawText": "google.com.\t\t198\tIN\tMX\t10 smtp.google.com.",
              "rRsetType": 15,
              "target": "smtp.google.com.",
              "priority": 10
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"onetrust-domain-verification=6d685f1d41a94696ad7ef771f68993e0\"",
              "rRsetType": 16,
              "strings": [
                "onetrust-domain-verification=6d685f1d41a94696ad7ef771f68993e0"
              ]
            },
            {
              "name": "google.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 106,
              "rawText": "google.com.\t\t106\tIN\tAAAA\t2a00:1450:4025:401:0:0:0:8b",
              "rRsetType": 28,
              "address": "2a00:1450:4025:401:0:0:0:8b"
            },
            {
              "name": "google.com",
              "type": 99,
              "dnsType": "SPF",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tSPF\t\"v=spf1 include:_spf.google.com ~all\"",
              "rRsetType": 99,
              "strings": [
                "v=spf1 include:_spf.google.com ~all"
              ]
            }
          ]
        },
        {
          "status": true,
          "queryTime": "2026-06-17 09:43:40",
          "ipAddress": "1.1.1.1",
          "dnsTypes": {
            "PTR": 12
          },
          "dnsRecords": [
            {
              "name": "1.1.1.1.in-addr.arpa",
              "type": 12,
              "dnsType": "PTR",
              "ttl": 405,
              "rawText": "1.1.1.1.in-addr.arpa.\t405\tIN\tPTR\tone.one.one.one.",
              "rRsetType": 12,
              "singleName": "one.one.one.one."
            }
          ]
        },
        {
          "status": true,
          "queryTime": "2026-06-17 09:43:40",
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
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tNS\telliott.ns.cloudflare.com.",
              "rRsetType": 2,
              "singleName": "elliott.ns.cloudflare.com."
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
              "ttl": 86,
              "rawText": "example.com.\t\t86\tIN\tMX\t0 .",
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
        }
      ]
    },
  },
};