import React from 'react';
import './search-output.css';
import get from 'lodash.get';
import constants from '../../util/js/url-constants';


function SearchOutput({searchResults}) {

    let succesiveDaysWeather = [];
    if(searchResults) {
        searchResults.consolidated_weather.forEach((dayResult) => {
            const obj = {
                minTemperature: get(dayResult, 'min_temp', 0),
                maxTemperature: get(dayResult, 'max_temp', 0),
                currentTemperature: get(dayResult, 'the_temp', 0),
                weatherState: constants.weatherStateAbbr[get(dayResult, 'weather_state_abbr', 'c')],
                day: constants.days[new Date(dayResult['applicable_date']).getDay()],
                windSpeed: get(dayResult, 'wind_speed', 0),
                windDirection: get(dayResult, 'wind_direction_compass', 'NE'),
                humidity: get(dayResult, 'humidity', '0')
            };
            succesiveDaysWeather.push(obj);
        });
    }

    let searchBody;

    if(searchResults) {
        searchBody = <div className="search-output">
        <div >
            <div className="card-1">
    <h1> {searchResults.title} </h1>
    <ul className="temp-state">
        <li>
            <img className="primary-img" src={`img/${succesiveDaysWeather[0].weatherState.imgValue}`} alt={succesiveDaysWeather[0].weatherState.imgName}/>
        </li>
        <li className="today">Today</li>  
        <li id="clear"> {Math.round(succesiveDaysWeather[0].currentTemperature)}&deg;C</li>  
      <li id="mph"> {succesiveDaysWeather[0].weatherState.name}</li>
    </ul>
    <div className="line1"> </div>
    <div className="line2"> </div>
    <div className="line3"> </div>

    <div className="tuesday">
      <div className="day-tues"> {succesiveDaysWeather[1].day} </div>

    </div>
    <div className="wednesday">
      <div className="day-wed"> {succesiveDaysWeather[2].day} </div>
    </div>
    <div className="thursday">
      <div className="day-thurs"> {succesiveDaysWeather[3].day} </div>
    </div>
    <div className="friday">
      <div className="day-fri"> {succesiveDaysWeather[4].day} </div>
    </div>

    <ul className= "lows">
      <li id="high2"> <img className="img-small" src={`img/${succesiveDaysWeather[1].weatherState.imgValue}`} alt={succesiveDaysWeather[1].weatherState.imgName}/> </li>
      <li id="high" className="img-class"> <img className="img-small" src={`img/${succesiveDaysWeather[2].weatherState.imgValue}`} alt={succesiveDaysWeather[2].weatherState.imgName}/> </li>
      <li id="high" className="img-class"> <img className="img-small" src={`img/${succesiveDaysWeather[3].weatherState.imgValue}`} alt={succesiveDaysWeather[3].weatherState.imgName}/> </li>
      <li id="high3"> <img className="img-small" src={`img/${succesiveDaysWeather[3].weatherState.imgValue}`} alt={succesiveDaysWeather[3].weatherState.imgName}/> </li>
    </ul>
    
    <ul className= "highs">
      <li id="high2"> {Math.round(succesiveDaysWeather[1].maxTemperature)}°</li>
      <li id="high"> {Math.round(succesiveDaysWeather[2].maxTemperature)}° </li>
      <li id="high"> {Math.round(succesiveDaysWeather[3].maxTemperature)}° </li>
      <li id="high3"> {Math.round(succesiveDaysWeather[4].maxTemperature)}° </li>
    </ul>
    <ul className= "lows">
      <li id="high2"> {Math.round(succesiveDaysWeather[1].minTemperature)}° </li>
      <li id="high"> {Math.round(succesiveDaysWeather[2].minTemperature)}° </li>
      <li id="high"> {Math.round(succesiveDaysWeather[3].minTemperature)}° </li>
      <li id="high3"> {Math.round(succesiveDaysWeather[4].minTemperature)}° </li>
    </ul>

    
  </div>
</div>
</div>
    }
        return (
            <div>
            {searchBody}
            </div>
        );   
}

export default SearchOutput;