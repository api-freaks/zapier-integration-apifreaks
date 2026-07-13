const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/search/region",
    params: { "country": bundle.inputData["country"], "region": bundle.inputData["region"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "search_zip_by_region",
  noun: "ZIP Code",
  display: {
    label: "Search ZIP Codes by Region",
    description: "Search ZIP codes by region",
  },
  operation: {
    inputFields: [
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "region",
        label: "Region",
        type: 'string',
        required: true,
        helpText: "Name of the region, state or province associated with the country.",
      },
      {
        key: "page",
        label: "Page",
        type: 'string',
        required: false,
        helpText: "Page no. to retrieve paginated results.",
      },
    ],
    perform,
    sample: {
      "total_results": 130,
      "total_pages": 1,
      "current_page": 1,
      "current_page_size": 130,
      "codes": [
        "36280",
        "53000",
        "53100"
      ]
    },
  },
};
