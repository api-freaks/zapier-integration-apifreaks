const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/dns/reverse",
    params: { "type": bundle.inputData["type"], "value": bundle.inputData["value"], "exact": bundle.inputData["exact"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "reverse_dns_lookup",
  noun: "DNS",
  display: {
    label: "Reverse DNS Lookup",
    description: "Retrieve all the hostnames associated with any particular A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records. For instance, you can access all the hostnames hosted on any IP/CIDR notation, all the domain names using Cloudflare name servers, and all the domain names using Google Mailbox",
  },
  operation: {
    inputFields: [
      {
        key: "type",
        label: "Type",
        type: 'string',
        required: true,
        helpText: "The type of reverse DNS lookup to perform. Determines how the value parameter is interpreted: - A: IPv4 CIDR block - AAAA: IPv6 CIDR block - MX: Mail provider domain - NS: Name server provider hostname - SOA: SOA record admin domain - SPF/TXT: Target",
        choices: ["A", "AAAA", "MX", "NS", "SOA", "SPF", "TXT", "CNAME"],
      },
      {
        key: "value",
        label: "Value",
        type: 'string',
        required: true,
        helpText: "Provide an IP or CIDR for A/AAAA lookups, or a hostname/selector for MX, NS, SOA, SPF, TXT, and CNAME queries. Wildcard regex patterns are also supported (e.g., mail.google.com, m*.google.com, _spf.g*.com, s*.g*.com).",
      },
      {
        key: "exact",
        label: "Exact",
        type: 'string',
        required: false,
        helpText: "Accepts 'true' or 'false'. \"true\" returns only records that exactly match the input (NS, MX, CNAME, SOA, SPF, TXT). \"false\" returns all matches (default when omitted).",
      },
      {
        key: "page",
        label: "Page",
        type: 'string',
        required: false,
        helpText: "Page number to paginate through results (defaults to 1).",
      },
    ],
    perform,
    sample: {
      "totalRecords": 89950,
      "totalPages": 900,
      "currentPage": 1,
      "reverseDnsRecords": [
        {
          "queryTime": "2024-05-30",
          "domainName": "www.maguire.romamenu.cotest.avalon-invest.pro",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.maguire.romamenu.cotest.avalon-invest.pro",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "www.maguire.romamenu.cotest.avalon-invest.pro.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-13",
          "domainName": "qa-allure.salt-dev.ws",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "qa-allure.salt-dev.ws",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "qa-allure.salt-dev.ws.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-21",
          "domainName": "www.hailibu.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.hailibu.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 1,
              "rawText": "www.hailibu.cn.\t\t1\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-08",
          "domainName": "j-legacyconsultants.co.za",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "j-legacyconsultants.co.za",
              "type": 1,
              "dnsType": "A",
              "ttl": 3600,
              "rawText": "j-legacyconsultants.co.za.\t3600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-24",
          "domainName": "www.ebdisk.hacklink.site",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.ebdisk.hacklink.site",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "www.ebdisk.hacklink.site.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-12",
          "domainName": "alfredp2p.store",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "alfredp2p.store",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "alfredp2p.store.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-14",
          "domainName": "henglinongye.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "henglinongye.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "henglinongye.cn.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-12",
          "domainName": "11tebingbagus.tech",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "11tebingbagus.tech",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "11tebingbagus.tech.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-15",
          "domainName": "cangzhou045849.11467.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "cangzhou045849.11467.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "cangzhou045849.11467.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-15",
          "domainName": "huzhou048893.11467.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "huzhou048893.11467.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "huzhou048893.11467.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-14",
          "domainName": "www.uwugdgit.paypall.de",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.uwugdgit.paypall.de",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "www.uwugdgit.paypall.de.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-04-21",
          "domainName": "dtempurl.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "dtempurl.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 3600,
              "rawText": "dtempurl.com.\t\t3600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-14",
          "domainName": "barry-2.usevchala.cfd",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "barry-2.usevchala.cfd",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "barry-2.usevchala.cfd.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-02",
          "domainName": "www.paguebit.site",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.paguebit.site",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "www.paguebit.site.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-22",
          "domainName": "zain760-001-site1.site4future.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "zain760-001-site1.site4future.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "zain760-001-site1.site4future.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-12",
          "domainName": "susie4128.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "susie4128.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "susie4128.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-08",
          "domainName": "jsbr2.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "jsbr2.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "jsbr2.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-17",
          "domainName": "www.status.dev.forum.njpprnffwwmic.site",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.status.dev.forum.njpprnffwwmic.site",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "www.status.dev.forum.njpprnffwwmic.site.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-16",
          "domainName": "bagusdisin19.tech",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "bagusdisin19.tech",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "bagusdisin19.tech.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-06-24",
          "domainName": "mostafanaeem55-001-site1.otempurl.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "mostafanaeem55-001-site1.otempurl.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "mostafanaeem55-001-site1.otempurl.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-20",
          "domainName": "root.fivaraapp.store",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "root.fivaraapp.store",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "root.fivaraapp.store.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-13",
          "domainName": "vodka-casino5.top",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "vodka-casino5.top",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "vodka-casino5.top.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-10",
          "domainName": "mail.fourarrowsinn.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "mail.fourarrowsinn.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "mail.fourarrowsinn.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-13",
          "domainName": "uos.vn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "uos.vn",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "uos.vn.\t\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-10",
          "domainName": "kompongdewapay.net",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "kompongdewapay.net",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "kompongdewapay.net.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-14",
          "domainName": "gulshanyadav-001-site1.ltempurl.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "gulshanyadav-001-site1.ltempurl.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "gulshanyadav-001-site1.ltempurl.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-22",
          "domainName": "daisy86517.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "daisy86517.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "daisy86517.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-11",
          "domainName": "prod.core.techklemo.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "prod.core.techklemo.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "prod.core.techklemo.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-21",
          "domainName": "xn--bvs063a.cc",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "xn--bvs063a.cc",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "xn--bvs063a.cc.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-04-01",
          "domainName": "play.jewelflora.store",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "play.jewelflora.store",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "play.jewelflora.store.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-19",
          "domainName": "blog.nayagara.store",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "blog.nayagara.store",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "blog.nayagara.store.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-04",
          "domainName": "stansen.com.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "stansen.com.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "stansen.com.cn.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-27",
          "domainName": "loja.lagosgp.com.br",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "loja.lagosgp.com.br",
              "type": 1,
              "dnsType": "A",
              "ttl": 14400,
              "rawText": "loja.lagosgp.com.br.\t14400\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-09",
          "domainName": "aigcchk.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "aigcchk.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "aigcchk.com.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-07",
          "domainName": "kuaixiu800.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "kuaixiu800.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "kuaixiu800.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-16",
          "domainName": "petsparadise.com.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "petsparadise.com.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "petsparadise.com.cn.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-08-10",
          "domainName": "unifi.lillebry.duckdns.org",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "unifi.lillebry.duckdns.org",
              "type": 1,
              "dnsType": "A",
              "ttl": 60,
              "rawText": "unifi.lillebry.duckdns.org.\t60\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-09",
          "domainName": "billsgoodread.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "billsgoodread.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 3600,
              "rawText": "billsgoodread.com.\t3600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-08",
          "domainName": "deepl-pro.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "deepl-pro.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 60,
              "rawText": "deepl-pro.com.\t\t60\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-15",
          "domainName": "www.login.mc33.fun",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.login.mc33.fun",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "www.login.mc33.fun.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-04",
          "domainName": "redo-design.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "redo-design.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "redo-design.cn.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-01",
          "domainName": "deluge.tristan.moe",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "deluge.tristan.moe",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "deluge.tristan.moe.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-10",
          "domainName": "hapalowsky.duckdns.org",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "hapalowsky.duckdns.org",
              "type": 1,
              "dnsType": "A",
              "ttl": 60,
              "rawText": "hapalowsky.duckdns.org.\t60\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-10",
          "domainName": "njbxkj.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "njbxkj.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "njbxkj.com.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-17",
          "domainName": "dave.dev.taskassembly.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "dave.dev.taskassembly.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "dave.dev.taskassembly.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-31",
          "domainName": "www.facinomx.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.facinomx.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "www.facinomx.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-12",
          "domainName": "uranustarltd.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "uranustarltd.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "uranustarltd.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-04-01",
          "domainName": "hnconstructionlk.mrdhanu.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "hnconstructionlk.mrdhanu.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 900,
              "rawText": "hnconstructionlk.mrdhanu.com.\t900\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-15",
          "domainName": "wbom.epfresh.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "wbom.epfresh.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "wbom.epfresh.cn.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-05",
          "domainName": "huobing88.xyz",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "huobing88.xyz",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "huobing88.xyz.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-23",
          "domainName": "test.cpne.it",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "test.cpne.it",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "test.cpne.it.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-19",
          "domainName": "cpanel.beta1.magas.services",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "cpanel.beta1.magas.services",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "cpanel.beta1.magas.services.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-08",
          "domainName": "hackerblog.nl",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "hackerblog.nl",
              "type": 1,
              "dnsType": "A",
              "ttl": 60,
              "rawText": "hackerblog.nl.\t\t60\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-22",
          "domainName": "testeasy08.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "testeasy08.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "testeasy08.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-05",
          "domainName": "sierraleone-uat.healthcare.sandtech.app",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "sierraleone-uat.healthcare.sandtech.app",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "sierraleone-uat.healthcare.sandtech.app.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-21",
          "domainName": "pro.market.120uu3.top",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "pro.market.120uu3.top",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "pro.market.120uu3.top.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-22",
          "domainName": "feiyuanglq.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "feiyuanglq.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "feiyuanglq.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-20",
          "domainName": "hyjc88.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "hyjc88.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "hyjc88.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-04-23",
          "domainName": "szjcmc.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "szjcmc.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "szjcmc.cn.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-02",
          "domainName": "m.hbxinchen.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "m.hbxinchen.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "m.hbxinchen.cn.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-22",
          "domainName": "alliancesupplier.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "alliancesupplier.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "alliancesupplier.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-04",
          "domainName": "ggl7.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "ggl7.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "ggl7.com.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-09",
          "domainName": "kiori-collection.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "kiori-collection.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 696,
              "rawText": "kiori-collection.com.\t696\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-04-25",
          "domainName": "fegosofa.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "fegosofa.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 3600,
              "rawText": "fegosofa.com.\t\t3600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-12",
          "domainName": "mayflower2015.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "mayflower2015.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "mayflower2015.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-17",
          "domainName": "log.105uu8.top",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "log.105uu8.top",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "log.105uu8.top.\t\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-24",
          "domainName": "demo.testing.mc33.fun",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "demo.testing.mc33.fun",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "demo.testing.mc33.fun.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-12",
          "domainName": "83367.top",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "83367.top",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "83367.top.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-12-04",
          "domainName": "rt.us.ci",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "rt.us.ci",
              "type": 1,
              "dnsType": "A",
              "ttl": 14400,
              "rawText": "rt.us.ci.\t\t14400\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-27",
          "domainName": "dev.tdpf.metro.tokyo.lg.jp",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "dev.tdpf.metro.tokyo.lg.jp",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "dev.tdpf.metro.tokyo.lg.jp.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-11",
          "domainName": "clevelandballet.org",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "clevelandballet.org",
              "type": 1,
              "dnsType": "A",
              "ttl": 3600,
              "rawText": "clevelandballet.org.\t3600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-27",
          "domainName": "www.ze.okplay-deuces.online",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.ze.okplay-deuces.online",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "www.ze.okplay-deuces.online.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-18",
          "domainName": "www.bujuyige.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.bujuyige.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "www.bujuyige.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-04-30",
          "domainName": "34034.xyz",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "34034.xyz",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "34034.xyz.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-12",
          "domainName": "bushouston.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "bushouston.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "bushouston.com.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-05",
          "domainName": "comfybelt.de",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "comfybelt.de",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "comfybelt.de.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-08",
          "domainName": "alphainfuse.co",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "alphainfuse.co",
              "type": 1,
              "dnsType": "A",
              "ttl": 21600,
              "rawText": "alphainfuse.co.\t\t21600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-15",
          "domainName": "experiencereality.us",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "experiencereality.us",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "experiencereality.us.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2024-09-02",
          "domainName": "mail.server.linuxtest.xyz",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "mail.server.linuxtest.xyz",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "mail.server.linuxtest.xyz.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-07",
          "domainName": "moblys67.win",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "moblys67.win",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "moblys67.win.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-11",
          "domainName": "gangzhicheng.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "gangzhicheng.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "gangzhicheng.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-09-09",
          "domainName": "vip07.ctbymh.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "vip07.ctbymh.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "vip07.ctbymh.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-23",
          "domainName": "www.ws.fivaraapp.store",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.ws.fivaraapp.store",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "www.ws.fivaraapp.store.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-16",
          "domainName": "terminleme.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "terminleme.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "terminleme.com.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-05",
          "domainName": "ad08.hhisdk1.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "ad08.hhisdk1.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "ad08.hhisdk1.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-18",
          "domainName": "btbyywj.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "btbyywj.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "btbyywj.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-06-08",
          "domainName": "superstalin.top",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "superstalin.top",
              "type": 1,
              "dnsType": "A",
              "ttl": 7200,
              "rawText": "superstalin.top.\t7200\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-19",
          "domainName": "dev.staging.ipv6.deroqq.sbs",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "dev.staging.ipv6.deroqq.sbs",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "dev.staging.ipv6.deroqq.sbs.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-12",
          "domainName": "tb777777.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "tb777777.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "tb777777.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-16",
          "domainName": "0u12d.v6t7x3y1k9r2b4w5m0p8jzn.top",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "0u12d.v6t7x3y1k9r2b4w5m0p8jzn.top",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "0u12d.v6t7x3y1k9r2b4w5m0p8jzn.top.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-05-30",
          "domainName": "shahrad.synology.me",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "shahrad.synology.me",
              "type": 1,
              "dnsType": "A",
              "ttl": 240,
              "rawText": "shahrad.synology.me.\t240\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2024-11-22",
          "domainName": "www.tcsydj.cn",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "www.tcsydj.cn",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "www.tcsydj.cn.\t\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-12",
          "domainName": "lyra.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "lyra.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "lyra.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-02-15",
          "domainName": "exploratorio.art",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "exploratorio.art",
              "type": 1,
              "dnsType": "A",
              "ttl": 120,
              "rawText": "exploratorio.art.\t120\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-22",
          "domainName": "lingerie01.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "lingerie01.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "lingerie01.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-15",
          "domainName": "guangzhou0753912.11467.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "guangzhou0753912.11467.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "guangzhou0753912.11467.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-06",
          "domainName": "takeit.ma",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "takeit.ma",
              "type": 1,
              "dnsType": "A",
              "ttl": 14400,
              "rawText": "takeit.ma.\t\t14400\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-07-14",
          "domainName": "carbonsystem-001-site1.jtempurl.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "carbonsystem-001-site1.jtempurl.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "carbonsystem-001-site1.jtempurl.com.\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2026-03-31",
          "domainName": "12.bestclub.rs",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "12.bestclub.rs",
              "type": 1,
              "dnsType": "A",
              "ttl": 300,
              "rawText": "12.bestclub.rs.\t\t300\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        },
        {
          "queryTime": "2025-10-23",
          "domainName": "baihengbag.cn.trustexporter.com",
          "dnsTypes": {
            "A": 1
          },
          "dnsRecords": [
            {
              "name": "baihengbag.cn.trustexporter.com",
              "type": 1,
              "dnsType": "A",
              "ttl": 600,
              "rawText": "baihengbag.cn.trustexporter.com.\t600\tIN\tA\t8.8.8.8",
              "rRsetType": 1,
              "address": "8.8.8.8"
            }
          ]
        }
      ]
    },
  },
};
