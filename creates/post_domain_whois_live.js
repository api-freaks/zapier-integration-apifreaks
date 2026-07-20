const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/whois/live",
    method: "POST",
    body: { "domainNames": bundle.inputData["domainNames"] },
  });
  return response.data;
};

export default {
  key: "post_domain_whois_live",
  noun: "WHOIS",
  display: {
    label: "Bulk Domain WHOIS Lookup",
    description: "Retrieve WHOIS information for `100 Domains per Request`.",
  },
  operation: {
    inputFields: [
      {
        key: "domainNames",
        label: "Domain Names",
        type: 'string',
        list: true,
        required: true,
        helpText: "A list of domain names for which WHOIS data is requested (max. 100). Add one domain per line.",
      },
    ],
    perform,
    sample: {
      "bulk_whois_response": [
        {
          "status": true,
          "domain_name": "microsoft.com",
          "query_time": "2026-06-18 07:33:14",
          "whois_server": "https://rdap.verisign.com/com/v1/",
          "domain_registered": "yes",
          "create_date": "1991-05-02",
          "update_date": "2026-01-29",
          "expiry_date": "2027-05-03",
          "domain_registrar": {
            "iana_id": "292",
            "registrar_name": "MarkMonitor Inc",
            "whois_server": "whois.markmonitor.com",
            "website_url": "https://www.markmonitor.com/",
            "email_address": "abusecomplaints@markmonitor.com",
            "phone_number": "+12086851750"
          },
          "registrant_contact": {
            "name": "Domain Administrator",
            "company": "Microsoft Corporation",
            "street": "One Microsoft Way",
            "city": "Redmond",
            "state": "WA",
            "zip_code": "98052",
            "country_name": "United States",
            "country_code": "US",
            "email_address": "admin@domains.microsoft",
            "phone": "+14258828080",
            "fax": "+14259367329"
          },
          "technical_contact": {
            "name": "MSN Hostmaster",
            "country_name": "United States",
            "country_code": "US",
            "email_address": "msnhst@microsoft.com",
            "phone": "+14258828080"
          },
          "name_servers": [
            "ns4-39.azure-dns.info",
            "ns3-39.azure-dns.org",
            "ns1-39.azure-dns.com",
            "ns2-39.azure-dns.net"
          ],
          "domain_status": [
            "clientupdateprohibited",
            "clientdeleteprohibited",
            "clienttransferprohibited",
            "serverdeleteprohibited",
            "serverupdateprohibited",
            "servertransferprohibited"
          ]
        }
      ]
    },
  },
};