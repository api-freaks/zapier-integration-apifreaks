const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/current",
    method: "POST",
    params: { "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "post_current",
  noun: "Weather",
  display: {
    label: "Get Current Weather for Multiple Locations",
    description: "Retrieve current weather conditions for up to `50 locations` in a single request. A maximum of 50 locations (city names, IP addresses, or geographic coordinates) can be included in the request body.",
  },
  operation: {
    inputFields: [
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
      "bulk": [
        {
          "location": {
            "location_string": "lahore",
            "country_name": "Pakistan",
            "state_prov": "Punjab",
            "city": "Lahore",
            "locality": "",
            "latitude": "31.56568",
            "longitude": "74.31418",
            "elevation": "",
            "timezone": "Asia/Karachi",
            "timezone_abbreviation": "GMT+5"
          },
          "current": {
            "timestamp": "2025-09-29T17:45",
            "temperature_2m": 32.3,
            "relative_humidity_2m": 61,
            "apparent_temperature": 37.6,
            "snowfall": 0,
            "rain": 0,
            "showers": 0,
            "precipitation": 0,
            "weather_code": 1,
            "cloud_cover": 41,
            "pressure_msl": 1001.9,
            "surface_pressure": 978.3,
            "wind_speed_10m": 4.4,
            "wind_direction_10m": 279,
            "wind_gusts_10m": 10.1,
            "astronomy": {
              "date": "2025-09-29",
              "mid_night": "23:53",
              "night_end": "04:34",
              "sunrise": "05:53",
              "sunset": "17:51",
              "night_begin": "19:11",
              "sun_status": "-",
              "solar_noon": "11:52",
              "day_length": "11:58",
              "moon_phase": "FIRST_QUARTER",
              "moonrise": "12:41",
              "moonset": "22:28",
              "moon_status": "-"
            }
          }
        }
      ]
    },
  },
};
