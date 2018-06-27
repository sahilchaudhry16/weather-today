let constants = {
  BASE_URL: process.env.REACT_APP_BASEURL,
  GOOGLE_ADDRESS_SEARCH_URL: 'https://maps.googleapis.com/maps/api/geocode/json',
  GOOGLE_API_KEY : 'AIzaSyDHgwYiOsSK5Ag2F_ID5kuAAj-bfwcEGqI',
  WOE_URL : 'location/search',
  LOCATION_URL : 'location/'
};

constants.days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
constants.weatherStateAbbr = {
    "c": {
        imgValue: 'c.svg',
        name: "Clear"
    },
    "h": {
        imgValue: 'h.svg',
        name: "Hail"
    },
    "hc": {
        imgValue: 'hc.svg',
        name: "Heavy Cloud"
    },
    "hr": {
        imgValue: 'hr.svg',
        name: "Heavy Rain"
    },
    "lr": {
        imgValue: 'lr.svg',
        name: "Light Rain"
    },
    "lc": {
        imgValue: 'lc.svg',
        name: "Light Cloud"
    },
    "s": {
        imgValue: 's.svg',
        name: "Showers"
    },
    "sl": {
        imgValue: 'sl.svg',
        name: "Sleet"
    },
    "sn": {
        imgValue: 'sn.svg',
        name: "Snow"
    },
    "t": {
        imgValue: 't.svg',
        name: "Thunderstorm"
    }
};

export default constants;
