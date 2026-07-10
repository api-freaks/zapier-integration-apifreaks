const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v2.0/geolocation/timezone",
    params: { "ip": bundle.inputData["ip"], "tz": bundle.inputData["tz"], "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "lang": bundle.inputData["lang"], "iata_code": bundle.inputData["iata_code"], "icao_code": bundle.inputData["icao_code"], "lo_code": bundle.inputData["lo_code"] },
  });
  return response.data;
};

export default {
  key: "get_timezone_v2",
  noun: "Timezone",
  display: {
    label: "Timezone lookup (v2.0)",
    description: "Retrieve current time, date, and timezone-related information by specifying a timezone name, location address, location coordinates, IP address, or use the client IP address if no parameter is passed. - v2.0 response format.",
  },
  operation: {
    inputFields: [
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IPv4 or IPv6 address to extract timezone information.",
      },
      {
        key: "tz",
        label: "Tz",
        type: 'string',
        required: false,
        helpText: "Timezone name (e.g., \"Asia/Kolkata\") to retrieve information directly.",
      },
      {
        key: "location",
        label: "Location",
        type: 'string',
        required: false,
        helpText: "Location string (preferably city and country) to extract timezone.",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude for geolocation lookup.",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude for geolocation lookup.",
      },
      {
        key: "lang",
        label: "Lang",
        type: 'string',
        required: false,
        helpText: "Language code for response localization (default is \"en\").",
        choices: ["en", "de", "ru", "ja", "fr", "cn", "es", "cs", "it", "ko", "fa", "pt"],
      },
      {
        key: "iata_code",
        label: "Iata Code",
        type: 'string',
        required: false,
        helpText: "3-letter IATA airport code (e.g., JFK).",
      },
      {
        key: "icao_code",
        label: "Icao Code",
        type: 'string',
        required: false,
        helpText: "4-letter ICAO airport code (e.g., KJFK).",
      },
      {
        key: "lo_code",
        label: "Lo Code",
        type: 'string',
        required: false,
        helpText: "5-letter UN/LO city code.",
      },
    ],
    perform,
  },
};
