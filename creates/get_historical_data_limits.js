const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/historical/data/limits",
  });
  return response.data;
};

export default {
  key: "get_historical_data_limits",
  noun: "Currency",
  display: {
    label: "Get Historical Data Availability Limits",
    description: "Returns the date range when historical data is available for each currency.",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "availabilityPeriod": {
        "USD": "1984-11-28 to 2026-06-18",
        "EUR": "1998-12-31 to 2026-06-18",
        "PKR": "1985-10-02 to 2026-06-18",
        "BTC": "2013-01-07 to 2026-06-18",
        "XAU": "1984-11-29 to 2026-06-18"
      }
    },
  },
};
