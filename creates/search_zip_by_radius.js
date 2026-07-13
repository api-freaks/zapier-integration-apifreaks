const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/zipcode/search/radius",
    params: { "code": bundle.inputData["code"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "country": bundle.inputData["country"], "radius": bundle.inputData["radius"], "unit": bundle.inputData["unit"], "page": bundle.inputData["page"] },
  });
  return response.data;
};

export default {
  key: "search_zip_by_radius",
  noun: "ZIP Code",
  display: {
    label: "Find ZIP/Postal Codes Within a Radius",
    description: "Find ZIP/postal codes within a radius",
  },
  operation: {
    inputFields: [
      {
        key: "code",
        label: "Code",
        type: 'string',
        required: false,
        helpText: "Postal/Zip code to be used as the center point for the search.",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude coordinate for the base location.",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude coordinate for the base location.",
      },
      {
        key: "country",
        label: "Country",
        type: 'string',
        required: false,
        helpText: "Country code in ISO 3166-1 alpha-2 format. Required only when using the code parameter.",
      },
      {
        key: "radius",
        label: "Radius",
        type: 'string',
        required: true,
        helpText: "Search radius for the query. The maximum allowed values are: - 100 km - 100 mi - 109361 yd - 100000 m - 328084 ft - 3937007.75 in",
      },
      {
        key: "unit",
        label: "Unit",
        type: 'string',
        required: false,
        helpText: "Supported distance units are m, km, mi, ft, yd, in.",
        choices: ["m", "km", "mi", "ft", "yd", "in"],
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
      "total_results": 2303,
      "total_pages": 5,
      "current_page": 1,
      "current_page_size": 500,
      "results": [
        {
          "code": "49608",
          "region": "Punjab",
          "city": "Tahlian Wala",
          "district": "",
          "distance": 14.835
        },
        {
          "code": "49610",
          "region": "Punjab",
          "city": "Alliance Textile Mills",
          "district": "",
          "distance": 14.835
        }
      ]
    },
  },
};
