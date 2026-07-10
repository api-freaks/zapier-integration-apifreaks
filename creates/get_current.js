const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/weather/current",
    params: { "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "timezone": bundle.inputData["timezone"] },
  });
  return response.data;
};

export default {
  key: "get_current",
  noun: "Weather",
  display: {
    label: "Real-time weather conditions for any location on demand",
    description: "Get current weather data including temperature, humidity, precipitation, wind conditions, atmospheric pressure, and air quality for any location. Accepts city names, coordinates, or IP addresses. Also includes astronomy data and timezone-aware timestamps.",
  },
  operation: {
    inputFields: [
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
      "current": {
        "timestamp": "2025-09-29T17:45",
        "temperature_2m": 32.5,
        "relative_humidity_2m": 61,
        "apparent_temperature": 37.9,
        "snowfall": 0,
        "rain": 0,
        "showers": 0,
        "precipitation": 0,
        "weather_code": 2,
        "cloud_cover": 49,
        "pressure_msl": 1001.9,
        "surface_pressure": 977.6,
        "wind_speed_10m": 4,
        "wind_direction_10m": 280,
        "wind_gusts_10m": 8.6,
        "air_quality": {
          "timestamp": "2025-09-29T17:45",
          "european_aqi": 84,
          "us_aqi": 148,
          "pm10": 66.2,
          "pm2_5": 52.7,
          "carbon_monoxide": 977,
          "nitrogen_dioxide": 44.5,
          "sulphur_dioxide": 20.4,
          "ozone": 159,
          "dust": 27,
          "uv_index": 0,
          "aerosol_optical_depth": 0.48,
          "uv_index_clear_sky": 0
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
    },
  },
};
