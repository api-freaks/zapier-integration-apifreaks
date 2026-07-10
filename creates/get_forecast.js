const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/forecast",
    params: { "startDate": bundle.inputData["startDate"], "endDate": bundle.inputData["endDate"], "forecastDays": bundle.inputData["forecastDays"], "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "precision": bundle.inputData["precision"], "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "get_forecast",
  noun: "Weather",
  display: {
    label: "Weather predictions from 1 to 16 days with flexible detail leve",
    description: "Access comprehensive weather forecasts with customizable precision - choose from daily overviews, hourly breakdowns, or even minute-by-minute data. Configure your date ranges or use the default 7-day forecast for standard weather planning.",
  },
  operation: {
    inputFields: [
      {
        key: "startDate",
        label: "Startdate",
        type: 'string',
        required: false,
        helpText: "Start date for the forecast in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between startDate and endDate must not exceed 16 days.",
      },
      {
        key: "endDate",
        label: "Enddate",
        type: 'string',
        required: false,
        helpText: "End date for the forecast in YYYY-MM-DD format. Forecast dates must be current or future dates only. Past dates are not allowed for forecast data. The difference between startDate and endDate must not exceed 16 days.",
      },
      {
        key: "forecastDays",
        label: "Forecastdays",
        type: 'string',
        required: false,
        helpText: "Number of days for the forecast, from 1 to 16. Default is 7. Maximum value is 16.",
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
        key: "precision",
        label: "Precision",
        type: 'string',
        required: false,
        helpText: "Precision of the forecast data.",
        choices: ["daily", "hourly", "minutely"],
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
        "2025-09-29": {
          "daily": {
            "timestamp": "2025-09-29",
            "weather_code": 2,
            "temperature_2m_max": 34.9,
            "temperature_2m_min": 27.3,
            "apparent_temperature_max": 41.6,
            "apparent_temperature_min": 33.4,
            "temperature_2m_mean": 30.7,
            "apparent_temperature_mean": 36.5,
            "uv_index_max": 6.65,
            "uv_index_clear_sky_max": 6.65,
            "rain_sum": 0,
            "showers_sum": 0,
            "snowfall_sum": 0,
            "precipitation_sum": 0,
            "wind_speed_10m_max": 5.5,
            "wind_gusts_10m_max": 14.4,
            "wind_direction_10m_dominant": 225,
            "shortwave_radiation_sum": 18.16,
            "surface_pressure_mean": 979.9,
            "visibility_mean": 24140,
            "cloud_cover_mean": 36,
            "dew_point_2m_mean": 24.1,
            "dew_point_2m_max": 25.2,
            "dew_point_2m_min": 22.8,
            "et0_fao_evapotranspiration_sum": 4.04,
            "precipitation_probability_mean": 4,
            "relative_humidity_2m_mean": 69,
            "relative_humidity_2m_max": 86,
            "relative_humidity_2m_min": 51,
            "pressure_msl_mean": 1004.4,
            "wind_gusts_10m_mean": 8.7,
            "wind_speed_10m_mean": 3.4,
            "wind_gusts_10m_min": 4.3,
            "wind_speed_10m_min": 2
          },
          "astronomy": {
            "date": "2025-09-29",
            "mid_night": "23:52",
            "night_end": "04:34",
            "sunrise": "05:53",
            "sunset": "17:51",
            "night_begin": "19:10",
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
    },
  },
};
