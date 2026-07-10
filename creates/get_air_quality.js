const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/air-quality",
    params: { "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"], "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "get_air_quality",
  noun: "Weather",
  display: {
    label: "Air pollution monitoring and quality forecasts",
    description: "Monitor and predict air quality conditions using European and US AQI standards. Track pollutant concentrations including PM10, PM2.5, carbon monoxide, nitrogen dioxide, sulfur dioxide, ozone, and dust particles. Get current readings plus hourly forecasts up to 5 days ahead, complete with UV index and aerosol measurements for comprehensive air quality assessment.",
  },
  operation: {
    inputFields: [
      {
        key: "startDate",
        label: "Startdate",
        type: 'string',
        required: false,
        helpText: "Starting date for AQI forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 5 days.",
      },
      {
        key: "endDate",
        label: "Enddate",
        type: 'string',
        required: false,
        helpText: "End date for AQI forecast data in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between endDate and startDate must not exceed 5 days.",
      },
      {
        key: "location",
        label: "Location",
        type: 'string',
        required: false,
        helpText: "City name, place name, or full address.",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude of the location.",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude of the location.",
      },
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IP(v4 or v6) address for location inference.",
      },
      {
        key: "timezone",
        label: "Timezone",
        type: 'string',
        required: false,
        helpText: "Timezone for the results.",
      },
    ],
    perform,
    sample: {
      "location": {
        "continent_code": "AS",
        "continent_name": "Asia",
        "country_code2": "PK",
        "country_code3": "PAK",
        "country_name": "Pakistan",
        "country_name_official": "Islamic Republic of Pakistan",
        "is_eu": false,
        "state_prov": "Punjab",
        "state_code": "PK-PB",
        "district": "Lahore",
        "city": "Lahore",
        "zipcode": "54000",
        "latitude": "31.52037",
        "longitude": "74.35875",
        "locality": "Gulberg",
        "elevation": "",
        "timezone": "Asia/Karachi",
        "timezone_abbreviation": "GMT+5"
      },
      "forecast": {
        "2025-10-01": {
          "hourly": [
            {
              "timestamp": "2025-10-01T00:00",
              "pm10": 59,
              "carbon_monoxide": 1190,
              "pm2_5": 54.8,
              "carbon_dioxide": 465,
              "nitrogen_dioxide": 31.9,
              "sulphur_dioxide": 15.8,
              "ozone": 84,
              "dust": 9,
              "uv_index": 0,
              "aerosol_optical_depth": 0.56,
              "uv_index_clear_sky": 0
            }
          ]
        }
      }
    },
  },
};
