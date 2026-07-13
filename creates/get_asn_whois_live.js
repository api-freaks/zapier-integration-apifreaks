const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/asn/whois/live",
    params: { "asn": bundle.inputData["asn"] },
  });
  return response.data;
};

export default {
  key: "get_asn_whois_live",
  noun: "WHOIS",
  display: {
    label: "ASN WHOIS Lookup",
    description: "Returns WHOIS registration details for a specified ASN, with or without the 'as' prefix.",
  },
  operation: {
    inputFields: [
      {
        key: "asn",
        label: "Asn",
        type: 'string',
        required: true,
        helpText: "The Autonomous System Number (ASN) to retrieve WHOIS data for. Can be prefixed with 'as' or not.",
      },
    ],
    perform,
    sample: {
      "asNumber": "15",
      "asName": "NET-DYNAMICS-EXP",
      "orgName": "DYNAMICS",
      "description": "",
      "orgHandle": "dynami-109",
      "country": "US",
      "domain": "nisc.sri.com",
      "website": "",
      "allocationStatus": "",
      "numOfIPv4Routes": "0",
      "numOfIPv6Routes": "0",
      "whoisHost": "ARIN",
      "dateAllocated": "",
      "type": "ISP",
      "routeObjects": [],
      "whoisResponse": "ASNumber: 15\nASName: NET-DYNAMICS-EXP\nASHandle: AS15\nUpdated: 1991-06-27\nOrgName: DYNAMICS\nOrgId: DYNAMI-109",
      "downstreams": [],
      "parsedWhoisResponse": {
        "status": true,
        "whois_server": "whois.arin.net",
        "aut_nums": [
          {
            "aut_num": "15",
            "as_handle": "AS15",
            "as_name": "NET-DYNAMICS-EXP",
            "tech_contacts": [
              "ZSU-ARIN",
              "ZSU-ARIN"
            ],
            "abuse_contacts": [
              "ZSU-ARIN"
            ],
            "date_updated": "1991-06-27",
            "source": "https://rdap.arin.net/registry/autnum/15"
          }
        ],
        "organization": {
          "handle": "DYNAMI-109",
          "name": "DYNAMICS",
          "address": [
            "US"
          ],
          "country": [
            "US"
          ],
          "date_updated": "2012-10-10",
          "source": "https://rdap.arin.net/registry/entity/DYNAMI-109",
          "addressCountry": "US"
        },
        "technical_contacts": [
          {
            "handle": "ZSU-ARIN",
            "name": "Su, Zaw-Sing",
            "email": [
              "zsu@nisc.sri.com"
            ],
            "phone": [
              "+1-415-859-4576"
            ],
            "source": "https://rdap.arin.net/registry/entity/ZSU-ARIN"
          }
        ],
        "abuse_contacts": [
          {
            "handle": "ZSU-ARIN",
            "name": "Su, Zaw-Sing",
            "email": [
              "zsu@nisc.sri.com"
            ],
            "phone": [
              "+1-415-859-4576"
            ],
            "source": "https://rdap.arin.net/registry/entity/ZSU-ARIN"
          }
        ]
      },
      "upstreams": [],
      "peers": [],
      "contacts": {
        "emailContacts": [
          "zsu@nisc.sri.com"
        ],
        "abuseContacts": []
      },
      "legacyRoutes": []
    },
  },
};
