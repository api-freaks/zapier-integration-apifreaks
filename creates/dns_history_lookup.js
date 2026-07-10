const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/dns/history",
    params: { "host-name": bundle.inputData["host-name"], "type": bundle.inputData["type"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "dns_history_lookup",
  noun: "DNS",
  display: {
    label: "Get all historical A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DN",
    description: "Retrieve historical DNS records for any hostname. Access unique historical data for A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME records,\nincluding subdomains. Results are paginated with up to 100 unique records per page.",
  },
  operation: {
    inputFields: [
      {
        key: "host-name",
        label: "Host Name",
        type: 'string',
        required: true,
        helpText: "Hostname or URL whose historical DNS records are required",
      },
      {
        key: "type",
        label: "Type",
        type: 'string',
        required: true,
        helpText: "A comma-separated list of DNS record types for lookup. Possible values: A, AAAA, MX, NS, SOA, SPF, TXT, CNAME, or all",
      },
      {
        key: "page",
        label: "Page",
        type: 'string',
        required: false,
        helpText: "Page number for paginated results",
      },
    ],
    perform,
    sample: {
      "totalRecords": 46,
      "totalPages": 1,
      "currentPage": 1,
      "historicalDnsRecords": [
        {
          "queryTime": "2025-12-16",
          "domainName": "example.com.",
          "dnsTypes": {
            "SOA": 6,
            "AAAA": 28,
            "A": 1,
            "NS": 2
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 4,
              "rawText": "example.com.\t\t4\tIN\tA\t23.192.228.84",
              "rRsetType": 1,
              "address": "23.192.228.84"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 4,
              "rawText": "example.com.\t\t4\tIN\tA\t23.215.0.136",
              "rRsetType": 1,
              "address": "23.215.0.136"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 278,
              "rawText": "example.com.\t\t278\tIN\tA\t23.220.75.245",
              "rRsetType": 1,
              "address": "23.220.75.245"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 278,
              "rawText": "example.com.\t\t278\tIN\tA\t23.220.75.232",
              "rRsetType": 1,
              "address": "23.220.75.232"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 4,
              "rawText": "example.com.\t\t4\tIN\tA\t23.215.0.138",
              "rRsetType": 1,
              "address": "23.215.0.138"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 4,
              "rawText": "example.com.\t\t4\tIN\tA\t23.192.228.80",
              "rRsetType": 1,
              "address": "23.192.228.80"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 89,
              "rawText": "example.com.\t\t89\tIN\tAAAA\t2600:1406:5e00:6:0:0:17ce:bc12",
              "rRsetType": 28,
              "address": "2600:1406:5e00:6:0:0:17ce:bc12"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 202,
              "rawText": "example.com.\t\t202\tIN\tAAAA\t2600:1406:bc00:53:0:0:b81e:94ce",
              "rRsetType": 28,
              "address": "2600:1406:bc00:53:0:0:b81e:94ce"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 89,
              "rawText": "example.com.\t\t89\tIN\tAAAA\t2600:1406:5e00:6:0:0:17ce:bc1b",
              "rRsetType": 28,
              "address": "2600:1406:5e00:6:0:0:17ce:bc1b"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 202,
              "rawText": "example.com.\t\t202\tIN\tAAAA\t2600:1408:ec00:36:0:0:1736:7f31",
              "rRsetType": 28,
              "address": "2600:1408:ec00:36:0:0:1736:7f31"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 202,
              "rawText": "example.com.\t\t202\tIN\tAAAA\t2600:1408:ec00:36:0:0:1736:7f24",
              "rRsetType": 28,
              "address": "2600:1408:ec00:36:0:0:1736:7f24"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 202,
              "rawText": "example.com.\t\t202\tIN\tAAAA\t2600:1406:bc00:53:0:0:b81e:94c8",
              "rRsetType": 28,
              "address": "2600:1406:bc00:53:0:0:b81e:94c8"
            },
            {
              "name": "example.com",
              "type": 6,
              "dnsType": "SOA",
              "ttl": 3600,
              "rawText": "example.com.\t\t3600\tIN\tSOA\tns.icann.org. noc.dns.icann.org. 2022091323 7200 3600 1209600 3600",
              "rRsetType": 6,
              "admin": "noc.dns.icann.org.",
              "host": "ns.icann.org.",
              "expire": 1209600,
              "minimum": 3600,
              "refresh": 7200,
              "retry": 3600,
              "serial": 2022091323
            },
            {
              "name": "example.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tNS\ta.iana-servers.net.",
              "rRsetType": 2,
              "singleName": "a.iana-servers.net."
            },
            {
              "name": "example.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tNS\tb.iana-servers.net.",
              "rRsetType": 2,
              "singleName": "b.iana-servers.net."
            }
          ]
        },
        {
          "queryTime": "2025-12-17",
          "domainName": "example.com.",
          "dnsTypes": {
            "AAAA": 28,
            "A": 1,
            "NS": 2
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tA\t104.20.34.220",
              "rRsetType": 1,
              "address": "104.20.34.220"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tA\t172.66.144.113",
              "rRsetType": 1,
              "address": "172.66.144.113"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:10:0:0:0:ac42:9071",
              "rRsetType": 28,
              "address": "2606:4700:10:0:0:0:ac42:9071"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:10:0:0:0:6814:22dc",
              "rRsetType": 28,
              "address": "2606:4700:10:0:0:0:6814:22dc"
            },
            {
              "name": "example.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 128,
              "rawText": "example.com.\t\t128\tIN\tNS\ta.iana-servers.net.",
              "rRsetType": 2,
              "singleName": "a.iana-servers.net."
            },
            {
              "name": "example.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 128,
              "rawText": "example.com.\t\t128\tIN\tNS\tb.iana-servers.net.",
              "rRsetType": 2,
              "singleName": "b.iana-servers.net."
            }
          ]
        },
        {
          "queryTime": "2023-12-10",
          "domainName": "example.com.",
          "dnsTypes": {
            "SOA": 6
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 6,
              "dnsType": "SOA",
              "ttl": 3600,
              "rawText": "example.com.\t\t3600\tIN\tSOA\tns.icann.org. noc.dns.icann.org. 2022091325 7200 3600 1209600 3600",
              "rRsetType": 6,
              "admin": "noc.dns.icann.org.",
              "host": "ns.icann.org.",
              "expire": 1209600,
              "minimum": 3600,
              "refresh": 7200,
              "retry": 3600,
              "serial": 2022091325
            },
            {
              "name": "example.com",
              "type": 6,
              "dnsType": "SOA",
              "ttl": 3600,
              "rawText": "example.com.\t\t3600\tIN\tSOA\tns.icann.org. noc.dns.icann.org. 2022091216 7200 3600 1209600 3600",
              "rRsetType": 6,
              "admin": "noc.dns.icann.org.",
              "host": "ns.icann.org.",
              "expire": 1209600,
              "minimum": 3600,
              "refresh": 7200,
              "retry": 3600,
              "serial": 2022091216
            }
          ]
        },
        {
          "queryTime": "2025-08-14",
          "domainName": "example.com.",
          "dnsTypes": {
            "AAAA": 28,
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 4,
              "rawText": "example.com.\t\t4\tIN\tA\t96.7.128.175",
              "rRsetType": 1,
              "address": "96.7.128.175"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 4,
              "rawText": "example.com.\t\t4\tIN\tA\t96.7.128.198",
              "rRsetType": 1,
              "address": "96.7.128.198"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 202,
              "rawText": "example.com.\t\t202\tIN\tAAAA\t2600:1406:3a00:21:0:0:173e:2e65",
              "rRsetType": 28,
              "address": "2600:1406:3a00:21:0:0:173e:2e65"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 202,
              "rawText": "example.com.\t\t202\tIN\tAAAA\t2600:1406:3a00:21:0:0:173e:2e66",
              "rRsetType": 28,
              "address": "2600:1406:3a00:21:0:0:173e:2e66"
            }
          ]
        },
        {
          "queryTime": "2026-04-09",
          "domainName": "example.com.",
          "dnsTypes": {
            "AAAA": 28,
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tA\t104.18.27.120",
              "rRsetType": 1,
              "address": "104.18.27.120"
            },
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tA\t104.18.26.120",
              "rRsetType": 1,
              "address": "104.18.26.120"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:0:0:0:0:6812:1b78",
              "rRsetType": 28,
              "address": "2606:4700:0:0:0:0:6812:1b78"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:0:0:0:0:6812:1a78",
              "rRsetType": 28,
              "address": "2606:4700:0:0:0:0:6812:1a78"
            }
          ]
        },
        {
          "queryTime": "2024-12-17",
          "domainName": "example.com.",
          "dnsTypes": {
            "AAAA": 28,
            "TXT": 16,
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 1925,
              "rawText": "example.com.\t\t1925\tIN\tA\t93.184.215.14",
              "rRsetType": 1,
              "address": "93.184.215.14"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 581,
              "rawText": "example.com.\t\t581\tIN\tAAAA\t2606:2800:21f:cb07:6820:80da:af6b:8b2c",
              "rRsetType": 28,
              "address": "2606:2800:21f:cb07:6820:80da:af6b:8b2c"
            },
            {
              "name": "example.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tTXT\t\"wgyf8z8cgvm2qmxpnbnldrcltvk4xqfn\"",
              "rRsetType": 16,
              "strings": [
                "wgyf8z8cgvm2qmxpnbnldrcltvk4xqfn"
              ]
            }
          ]
        },
        {
          "queryTime": "2026-06-08",
          "domainName": "example.com.",
          "dnsTypes": {
            "SOA": 6,
            "AAAA": 28,
            "TXT": 16,
            "A": 1,
            "NS": 2,
            "MX": 15,
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
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 300,
              "rawText": "example.com.\t\t300\tIN\tAAAA\t2606:4700:10:0:0:0:6814:179a",
              "rRsetType": 28,
              "address": "2606:4700:10:0:0:0:6814:179a"
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
              "type": 6,
              "dnsType": "SOA",
              "ttl": 627,
              "rawText": "example.com.\t\t627\tIN\tSOA\telliott.ns.cloudflare.com. dns.cloudflare.com. 2391407559 10000 2400 604800 1800",
              "rRsetType": 6,
              "admin": "dns.cloudflare.com.",
              "host": "elliott.ns.cloudflare.com.",
              "expire": 604800,
              "minimum": 1800,
              "refresh": 10000,
              "retry": 2400,
              "serial": 2391407559
            },
            {
              "name": "example.com",
              "type": 16,
              "dnsType": "TXT",
              "ttl": 10694,
              "rawText": "example.com.\t\t10694\tIN\tTXT\t\"_k2n1y4vw3qtb4skdx9e7dxt97qrmmq9\"",
              "rRsetType": 16,
              "strings": [
                "_k2n1y4vw3qtb4skdx9e7dxt97qrmmq9"
              ]
            },
            {
              "name": "example.com",
              "type": 15,
              "dnsType": "MX",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tMX\t0 .",
              "rRsetType": 15,
              "target": ".",
              "priority": 0
            },
            {
              "name": "example.com",
              "type": 99,
              "dnsType": "SPF",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tSPF\t\"v=spf1 -all\"",
              "rRsetType": 99,
              "strings": [
                "v=spf1 -all"
              ]
            },
            {
              "name": "example.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 20464,
              "rawText": "example.com.\t\t20464\tIN\tNS\thera.ns.cloudflare.com.",
              "rRsetType": 2,
              "singleName": "hera.ns.cloudflare.com."
            },
            {
              "name": "example.com",
              "type": 2,
              "dnsType": "NS",
              "ttl": 20464,
              "rawText": "example.com.\t\t20464\tIN\tNS\telliott.ns.cloudflare.com.",
              "rRsetType": 2,
              "singleName": "elliott.ns.cloudflare.com."
            }
          ]
        },
        {
          "queryTime": "2024-03-11",
          "domainName": "example.com.",
          "dnsTypes": {
            "AAAA": 28,
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "example.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tA\t93.184.216.34",
              "rRsetType": 1,
              "address": "93.184.216.34"
            },
            {
              "name": "example.com",
              "type": 28,
              "dnsType": "AAAA",
              "ttl": 21600,
              "rawText": "example.com.\t\t21600\tIN\tAAAA\t2606:2800:220:1:248:1893:25c8:1946",
              "rRsetType": 28,
              "address": "2606:2800:220:1:248:1893:25c8:1946"
            }
          ]
        }
      ]
    },
  },
};
