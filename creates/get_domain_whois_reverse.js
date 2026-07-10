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
    label: "Get all the domains registered by a particular company or owner",
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
  },
};
