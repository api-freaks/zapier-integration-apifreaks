const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geo/admin-unit/details",
    params: { "country": bundle.inputData["country"], "admin_unit": bundle.inputData["admin_unit"] },
  });
  return response.data;
};

export default {
  key: "get_geo_admin_unit_details",
  noun: "GeoDB",
  display: {
    label: "Get GeoDB Admin Unit Details",
    description: "Retrieve detailed administrative unit information by country and optionally filtered by admin code.",
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
        required: true,
        helpText: "Optional admin code to fetch details for a specific administrative unit.",
      },
    ],
    perform,
    sample: {
      "name": "United States",
      "admin_code": "example",
      "admin_iso3166_2": "example",
      "admin_level": "example",
      "country_iso3166_2": "example",
      "country_name": "example"
    },
  },
};
