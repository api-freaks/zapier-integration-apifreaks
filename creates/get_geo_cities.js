const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/cities",
    params: { "country": bundle.inputData["country"], "admin_unit": bundle.inputData["admin_unit"] },
  });
  return response.data;
};

export default {
  key: "get_geo_cities",
  noun: "GeoDB",
  display: {
    label: "Get Cities by Country and Admin Unit",
    description: "Retrieve a list of cities within a country, optionally filtered by an administrative unit code.",
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
        key: "admin_unit",
        label: "Admin Unit",
        type: 'string',
        required: false,
        helpText: "Administrative unit code used to filter cities within a specific region.",
      },
    ],
    perform,
  },
};
