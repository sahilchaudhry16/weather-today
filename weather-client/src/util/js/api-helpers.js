import urlConstants from './url-constants';
import axios from 'axios';
import get from 'lodash.get';
import queryString from './query-string';

export function getLatLongFromGoogleGeocoder(address) {
    const baseGoogleUrl = urlConstants.GOOGLE_ADDRESS_SEARCH_URL;
      const queryParameters = {
        key: urlConstants.GOOGLE_API_KEY,
        address: address
      };
      const stringifiedParams = queryString.stringify(queryParameters);
      const googleMapsGeocodeUrl = `${baseGoogleUrl}?${stringifiedParams}`
   
      return axios.get(googleMapsGeocodeUrl)
        .then(geocodeResults => {
          const latLongObj = get(geocodeResults.data,'results[0].geometry.location', {});
          return {
            lat: latLongObj.lat,
            long: latLongObj.lng
          };
        })
        .catch(ex => {
          console.log('Geoceder URL from google seems to be down.', ex);
      });
   }   

export function getWoeId(latLong) {

    const metaWeatherUrl = urlConstants.BASE_URL+urlConstants.WOE_URL;
        const queryParameters = {
            lattlong : `${latLong.lat},${latLong.long}`
        };
        const stringifiedParams = queryString.stringify(queryParameters);
        const metaEndpoint = `${metaWeatherUrl}?${stringifiedParams}`
            return axios.get(metaEndpoint)
            .then(
                woeIdResult => {
                    const woeObj = get(woeIdResult,'data[0].woeid',-1);
                    return woeObj;
                })
            .catch(ex => {
                console.log('Meta weather API down. ', ex);
            });
}

export function getWeatherInfo(whereOnEarthId) {
    const locationUrl = `${urlConstants.BASE_URL}${urlConstants.LOCATION_URL}${whereOnEarthId}`
    return axios.get(locationUrl)
      .then(results => {
        return results.data;
      })
      .catch(ex => {
        console.log('Error fetching weather data', ex);
    });
   }
   