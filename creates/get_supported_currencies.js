const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/currency/supported",
  });
  return response.data;
};

export default {
  key: "get_supported_currencies",
  noun: "Currency",
  display: {
    label: "Get All Supported Currencies",
    description: "Returns a map of all supported currencies with metadata.",
  },
  operation: {
    inputFields: [

    ],
    perform,
    sample: {
      "supportedCurrenciesMap": {
        "USD": {
          "currencyCode": "USD",
          "currencyName": "US Dollar",
          "countryCode": "AS",
          "countryName": "American Samoa",
          "status": "AVAILABLE",
          "availableFrom": "2020-01-01",
          "availableUntil": "2026-06-18",
          "icon": "https://currencyfreaks.com/photos/flags/usd.png"
        },
        "BTC": {
          "currencyCode": "BTC",
          "currencyName": "Bitcoin",
          "countryCode": "Crypto",
          "countryName": "Global",
          "status": "AVAILABLE",
          "availableFrom": "2014-01-01",
          "availableUntil": "2026-06-18",
          "icon": "https://currencyfreaks.com/photos/flags/btc.png"
        },
        "XAU": {
          "currencyCode": "XAU",
          "currencyName": "Gold Ounce",
          "countryCode": "Metal",
          "countryName": "Precious Metal",
          "status": "AVAILABLE",
          "availableFrom": "2020-01-01",
          "availableUntil": "2026-06-18",
          "icon": "https://currencyfreaks.com/photos/flags/xau.png"
        }
      }
    },
  },
};
