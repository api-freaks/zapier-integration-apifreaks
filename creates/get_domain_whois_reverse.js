const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/domain/whois/reverse",
    params: { "keyword": bundle.inputData["keyword"], "email": bundle.inputData["email"], "owner": bundle.inputData["owner"], "company": bundle.inputData["company"], "exact": bundle.inputData["exact"], "mode": bundle.inputData["mode"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "get_domain_whois_reverse",
  noun: "WHOIS",
  display: {
    label: "Reverse WHOIS Lookup",
    description: "Performs a reverse WHOIS search using one or more search parameters like keyword, email, owner, or company.",
  },
  operation: {
    inputFields: [
      {
        key: "keyword",
        label: "Keyword",
        type: 'string',
        required: false,
        helpText: "Keyword search term for reverse WHOIS by keyword (case-insensitive pattern matching).",
      },
      {
        key: "email",
        label: "Email",
        type: 'string',
        required: false,
        helpText: "Email search term for reverse WHOIS by email address (case-insensitive exact or regex match; * wildcard supported).",
      },
      {
        key: "owner",
        label: "Owner",
        type: 'string',
        required: false,
        helpText: "Registrant or owner name for reverse WHOIS (a full-text search phrase matching technique to retrieve results).",
      },
      {
        key: "company",
        label: "Company",
        type: 'string',
        required: false,
        helpText: "Organization or company name for reverse WHOIS (full-text search phrase matching technique to retrieve results).",
      },
      {
        key: "exact",
        label: "Exact",
        type: 'string',
        required: false,
        helpText: "Accepts 'true' or 'false'. \"true\" returns only records that exactly match the input (keyword, owner/registrant, or company). \"false\" returns all matches and is the default when omitted.",
      },
      {
        key: "mode",
        label: "Mode",
        type: 'string',
        required: false,
        helpText: "\"default\" for Complete WHOIS data and \"mini\" for Only important fields of each matching domain.",
        choices: ["default", "mini"],
      },
      {
        key: "page",
        label: "Page",
        type: 'string',
        required: false,
        helpText: "Page number for paginated results.",
      },
    ],
    perform,
    sample: {
      "total_Result": 8,
      "total_Pages": 1,
      "current_Page": 1,
      "whois_domains_historical": [
        {
          "num": 1,
          "status": true,
          "domain_name": "ipgeolocationdatabase.com",
          "query_time": "2026-05-21 04:00:28",
          "create_date": "2010-04-14",
          "update_date": "2026-05-19",
          "expiry_date": "2027-04-14",
          "domain_registrar": {
            "iana_id": "269",
            "registrar_name": "Key-Systems GmbH",
            "whois_server": "whois.rrpproxy.net",
            "website_url": "http://www.key-systems.net",
            "email_address": "abuse@key-systems.net",
            "phone_number": "+4968949396850"
          },
          "registrant_contact": {
            "id": "Not Available From Registry",
            "name": "On behalf of ipgeolocationdatabase.com OWNER",
            "company": "c/o whoisproxy.com",
            "city": "Alexandria",
            "state": "VA",
            "zip_code": "22314",
            "country_name": "United States",
            "country_code": "US",
            "email_address": "720ed14de67db24c4eb07295ecae369f9f1bfe8a4dd5cd0c51f0e4754ee24895@ipgeolocationdatabase.com.whoisproxy.org",
            "phone": "+6448319528"
          },
          "name_servers": [
            "dale.ns.cloudflare.com",
            "olga.ns.cloudflare.com"
          ],
          "domain_status": [
            "clienttransferprohibited"
          ]
        }
      ]
    },
  },
};
