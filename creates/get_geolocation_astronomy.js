const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://api.apifreaks.com/v1.0/geolocation/astronomy",
    params: { "location": bundle.inputData["location"], "lat": bundle.inputData["lat"], "long": bundle.inputData["long"], "ip": bundle.inputData["ip"], "lang": bundle.inputData["lang"], "date": bundle.inputData["date"], "elevation": bundle.inputData["elevation"], "time_zone": bundle.inputData["time_zone"] },
  });
  return response.data;
};

export default {
  key: "get_geolocation_astronomy",
  noun: "Other",
  display: {
    label: "Returns sunrise, sunset, moon phase, and celestial positions fo",
    description: "Retrieve sunrise and sunset times, current position of the moon, and other related information by specifying a location address, location coordinates, IP address, or using the client IP address if no parameter is passed.",
  },
  operation: {
    inputFields: [
      {
        key: "location",
        label: "Location",
        type: 'string',
        required: false,
        helpText: "Extract astronomy information using location (preferably city)",
      },
      {
        key: "lat",
        label: "Lat",
        type: 'string',
        required: false,
        helpText: "Latitude to extract astronomy information using location coordinates",
      },
      {
        key: "long",
        label: "Long",
        type: 'string',
        required: false,
        helpText: "Longitude to extract astronomy information using location coordinates",
      },
      {
        key: "ip",
        label: "Ip",
        type: 'string',
        required: false,
        helpText: "IPv4 or IPv6 address to extract astronomy information using IP address",
      },
      {
        key: "lang",
        label: "Lang",
        type: 'string',
        required: false,
        helpText: "Response language of \"location\" field in case of lookup through IP address only.",
        choices: ["en", "de", "ru", "ja", "fr", "cn", "es", "cs", "it", "ko", "fa", "pt"],
      },
      {
        key: "date",
        label: "Date",
        type: 'string',
        required: false,
        helpText: "Specific date (format YYYY-MM-DD) for which astronomy data is required",
      },
      {
        key: "elevation",
        label: "Elevation",
        type: 'string',
        required: false,
        helpText: "Elevation above sea level at the location, in meters. The value should be between 0 meter and a maximum value of 10,000 meters. Negative value is set to 0.",
      },
      {
        key: "time_zone",
        label: "Time Zone",
        type: 'string',
        required: false,
        helpText: "Time zone to receive all time-based data in your preferred local time.",
      },
    ],
    perform,
  },
};
