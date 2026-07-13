const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/dns/live",
    method: "POST",
    params: { "type": bundle.inputData["type"] },
    body: { "domainNames": bundle.inputData["domainNames"], "ipAddresses": bundle.inputData["ipAddresses"] },
  });
  return response.data;
};

export default {
  key: "bulk_dns_lookup",
  noun: "DNS",
  display: {
    label: "Bulk DNS Lookup",
    description: "Perform DNS lookups for multiple hostnames in a single request. Supports up to `100 host-names per request`\nand returns DNS records including A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records.",
  },
  operation: {
    inputFields: [
      {
        key: "type",
        label: "Type",
        type: 'string',
        required: true,
        helpText: "A comma-separated list of DNS record types for lookup. Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all",
      },
      {
        key: "domainNames",
        label: "Domainnames",
        type: 'string',
        required: true,
        helpText: "List of hostnames to lookup DNS records for",
      },
      {
        key: "ipAddresses",
        label: "Ipaddresses",
        type: 'string',
        required: false,
        helpText: "Array of IP addresses to include in the lookup for enrichment",
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
              "type": 1,
              "dnsType": "A",
              "ttl": 266,
              "rawText": "google.com.\t\t266\tIN\tA\t142.250.27.101",
              "rRsetType": 1,
              "address": "142.250.27.101"
            },
            {
              "name": "google.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 266,
              "rawText": "google.com.\t\t266\tIN\tA\t142.250.27.102",
              "rRsetType": 1,
              "address": "142.250.27.102"
            },
            {
              "name": "google.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 266,
              "rawText": "google.com.\t\t266\tIN\tA\t142.250.27.138",
              "rRsetType": 1,
              "address": "142.250.27.138"
            },
            {
              "name": "google.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 266,
              "rawText": "google.com.\t\t266\tIN\tA\t142.250.27.139",
              "rRsetType": 1,
              "address": "142.250.27.139"
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
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "google.com.\t\t21600\tIN\tNS\tns4.google.com.",
              "rRsetType": 2,
              "singleName": "ns4.google.com."
            },
            {
              "name": "google.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "google.com.\t\t21600\tIN\tNS\tns2.google.com.",
              "rRsetType": 2,
              "singleName": "ns2.google.com."
            },
            {
              "name": "google.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "google.com.\t\t21600\tIN\tNS\tns1.google.com.",
              "rRsetType": 2,
              "singleName": "ns1.google.com."
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
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"google-site-verification=TV9-DBe4R80X4v0M4U_bd_J9cpOJM0nikft0jAgjmsQ\"",
              "rRsetType": 16,
              "strings": [
                "google-site-verification=TV9-DBe4R80X4v0M4U_bd_J9cpOJM0nikft0jAgjmsQ"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"onetrust-domain-verification=0d477fe608074e6f9c12bca7826035cc\"",
              "rRsetType": 16,
              "strings": [
                "onetrust-domain-verification=0d477fe608074e6f9c12bca7826035cc"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"MS=E4A68B9AB2BB9670BCE15412F62916164C0B20BB\"",
              "rRsetType": 16,
              "strings": [
                "MS=E4A68B9AB2BB9670BCE15412F62916164C0B20BB"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"docusign=05958488-4752-4ef2-95eb-aa7ba8a3bd0e\"",
              "rRsetType": 16,
              "strings": [
                "docusign=05958488-4752-4ef2-95eb-aa7ba8a3bd0e"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"google-site-verification=4ibFUgB-wXLQ_S7vsXVomSTVamuOXBiVAzpR5IZ87D0\"",
              "rRsetType": 16,
              "strings": [
                "google-site-verification=4ibFUgB-wXLQ_S7vsXVomSTVamuOXBiVAzpR5IZ87D0"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"cisco-ci-domain-verification=47c38bc8c4b74b7233e9053220c1bbe76bcc1cd33c7acf7acd36cd6a5332004b\"",
              "rRsetType": 16,
              "strings": [
                "cisco-ci-domain-verification=47c38bc8c4b74b7233e9053220c1bbe76bcc1cd33c7acf7acd36cd6a5332004b"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"facebook-domain-verification=22rm551cu4k0ab0bxsw536tlds4h95\"",
              "rRsetType": 16,
              "strings": [
                "facebook-domain-verification=22rm551cu4k0ab0bxsw536tlds4h95"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"docusign=1b0a6754-49b1-4db5-8540-d2c12664b289\"",
              "rRsetType": 16,
              "strings": [
                "docusign=1b0a6754-49b1-4db5-8540-d2c12664b289"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"apple-domain-verification=30afIBcvSuDV2PLX\"",
              "rRsetType": 16,
              "strings": [
                "apple-domain-verification=30afIBcvSuDV2PLX"
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"globalsign-smime-dv=CDYX+XFHUw2wml6/Gb8+59BsH31KzUr6c1l2BPvqKX8=\"",
              "rRsetType": 16,
              "strings": [
                "globalsign-smime-dv=CDYX+XFHUw2wml6/Gb8+59BsH31KzUr6c1l2BPvqKX8="
              ]
            },
            {
              "name": "google.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 300,
              "rawText": "google.com.\t\t300\tIN\tTXT\t\"google-site-verification=wD8N7i1JTNTkezJ49swvWW48f8_9xveREV4oB-0Hf5o\"",
              "rRsetType": 16,
              "strings": [
                "google-site-verification=wD8N7i1JTNTkezJ49swvWW48f8_9xveREV4oB-0Hf5o"
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
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 106,
              "rawText": "google.com.\t\t106\tIN\tAAAA\t2a00:1450:4025:401:0:0:0:71",
              "rRsetType": 28,
              "address": "2a00:1450:4025:401:0:0:0:71"
            },
            {
              "name": "google.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 106,
              "rawText": "google.com.\t\t106\tIN\tAAAA\t2a00:1450:4025:401:0:0:0:64",
              "rRsetType": 28,
              "address": "2a00:1450:4025:401:0:0:0:64"
            },
            {
              "name": "google.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 106,
              "rawText": "google.com.\t\t106\tIN\tAAAA\t2a00:1450:4025:401:0:0:0:66",
              "rRsetType": 28,
              "address": "2a00:1450:4025:401:0:0:0:66"
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
        }
      ]
    },
  },
};
