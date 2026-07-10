const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/whois/live",
    params: { "domainName": bundle.inputData["domainName"] },
  });
  return response.data;
};

export default {
  key: "whois_lookup",
  noun: "WHOIS",
  display: {
    label: "Retrieve the WHOIS Data for any domain",
    description: "Retrieve current WHOIS information for a domain name.\nThis endpoint provides detailed registration information including registrar details,\ndates, nameservers, and registrant information.",
  },
  operation: {
    inputFields: [
      {
        key: "domainName",
        label: "Domainname",
        type: 'string',
        required: true,
        helpText: "Domain name for WHOIS lookup",
      },
    ],
    perform,
    sample: {
      "status": true,
      "domain_name": "google.com",
      "query_time": "2026-06-18 06:42:34",
      "whois_server": "https://rdap.verisign.com/com/v1/",
      "domain_registered": "yes",
      "create_date": "1997-09-15",
      "update_date": "2024-08-02",
      "expiry_date": "2028-09-13",
      "domain_registrar": {
        "iana_id": "292",
        "registrar_name": "MarkMonitor Inc",
        "whois_server": "whois.markmonitor.com",
        "website_url": "https://www.markmonitor.com/",
        "email_address": "abusecomplaints@markmonitor.com",
        "phone_number": "+12086851750"
      },
      "registrant_contact": {
        "name": "REDACTED REGISTRANT",
        "company": "Google LLC",
        "street": "REDACTED FOR PRIVACY",
        "city": "REDACTED FOR PRIVACY",
        "zip_code": "REDACTED FOR PRIVACY",
        "country_name": "United States",
        "country_code": "US",
        "email_address": "REDACTED FOR PRIVACY",
        "phone": "REDACTED FOR PRIVACY"
      },
      "name_servers": [
        "ns1.google.com",
        "ns2.google.com",
        "ns3.google.com",
        "ns4.google.com"
      ],
      "domain_status": [
        "clientupdateprohibited",
        "clientdeleteprohibited",
        "clienttransferprohibited",
        "serverdeleteprohibited",
        "serverupdateprohibited",
        "servertransferprohibited"
      ],
      "registry_data": {
        "domain_name": "google.com",
        "query_time": "2026-06-18 06:42:33",
        "whois_server": "https://rdap.verisign.com/com/v1/",
        "domain_registered": "yes",
        "create_date": "1997-09-15",
        "update_date": "2019-09-09",
        "expiry_date": "2028-09-14",
        "domain_registrar": {
          "iana_id": "292",
          "registrar_name": "MarkMonitor Inc",
          "whois_server": "whois.markmonitor.com"
        },
        "name_servers": [
          "ns1.google.com",
          "ns2.google.com",
          "ns3.google.com",
          "ns4.google.com"
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
    },
  },
};
