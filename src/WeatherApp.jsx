import SearchBox from "./SearchBox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function WeatherApp()
{
    const [weatherInfo, setweatherInfo] = useState({
        city:"Goa",
        feelsLike: 25.12,
        humidity: 51,
        temp: 25.21,
        tempMax: 25.21,
        tempMin: 25.21,
        weather: "few clouds",
    });

    let updateInfo = (newinfo) =>
    {
        setweatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    )
}