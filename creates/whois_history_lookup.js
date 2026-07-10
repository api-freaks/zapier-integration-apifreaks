const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/whois/history",
    params: { "domainName": bundle.inputData["domainName"] },
  });
  return response.data;
};

export default {
  key: "whois_history_lookup",
  noun: "WHOIS",
  display: {
    label: "Get all the historical WHOIS records of a domain",
    description: "Retrieve historical WHOIS records for a domain name.\nThis endpoint provides a timeline of all recorded changes in domain registration information.",
  },
  operation: {
    inputFields: [
      {
        key: "domainName",
        label: "Domainname",
        type: 'string',
        required: true,
        helpText: "Domain name for historical WHOIS lookup",
      },
    ],
    perform,
    sample: {
      "status": true,
      "whois": "historical",
      "total_records": "18",
      "whois_domains_historical": [
        {
          "num": 1,
          "status": true,
          "domain_name": "example.com",
          "query_time": "2022-04-28 12:56:13",
          "create_date": "1992-01-01",
          "update_date": "2021-08-14",
          "expiry_date": "2022-08-13"
        },
        {
          "num": 18,
          "status": true,
          "domain_name": "example.com",
          "query_time": "2026-06-18 07:17:18",
          "whois_server": "https://rdap.verisign.com/com/v1/",
          "domain_registered": "yes",
          "create_date": "1992-01-01",
          "update_date": "2026-01-16",
          "expiry_date": "2026-08-13",
          "name_servers": [
            "elliott.ns.cloudflare.com",
            "hera.ns.cloudflare.com"
          ],
          "registry_data": {
            "domain_name": "EXAMPLE.COM",
            "query_time": "2026-06-18 07:17:16",
            "whois_server": "whois.verisign-grs.com",
            "domain_registered": "yes",
            "create_date": "1995-08-14",
            "update_date": "2026-01-16",
            "expiry_date": "2026-08-13",
            "domain_registrar": {
              "iana_id": "376",
              "registrar_name": "RESERVED-Internet Assigned Numbers Authority",
              "whois_server": "whois.iana.org",
              "website_url": "http://res-dom.iana.org"
            },
            "name_servers": [
              "elliott.ns.cloudflare.com",
              "hera.ns.cloudflare.com"
            ],
            "domain_status": [
              "clientupdateprohibited",
              "clientdeleteprohibited",
              "clienttransferprohibited"
            ]
          }
        }
      ]
    },
  },
};
