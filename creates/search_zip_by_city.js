const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/search/city",
    params: { "city": bundle.inputData["city"], "country": bundle.inputData["country"], "state_name": bundle.inputData["state_name"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "search_zip_by_city",
  noun: "ZIP Code",
  display: {
    label: "Search Zip/Postal Codes by City",
    description: "Search ZIP/postal codes by city",
  },
  operation: {
    inputFields: [
      {
        key: "city",
        label: "City",
        type: 'string',
        required: true,
        helpText: "Name of the city in which we want to find zipcodes in.",
      },
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: true,
        helpText: "Country code in ISO 3166-1 alpha-2 format.",
      },
      {
        key: "state_name",
        label: "State Name",
        type: 'string',
        required: false,
        helpText: "Name of the state or province associated with the country.",
      },
      {
        key: "page",
        label: "Page",
        type: 'string',
        required: false,
        helpText: "Page number to retrieve paginated results.",
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
