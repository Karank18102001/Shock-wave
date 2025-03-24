import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import "/infobox.css";

export default function Infobox({info})
{
    const INIT_URL = "https://images.unsplash.com/photo-1708789430593-fdcce1e2a6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZldyUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1666323594456-cd1b09b2cbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1641732423736-2c9ebb3e8338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1671148804428-479b78611ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbmZhbGx8ZW58MHx8MHx8fDA%3D";


    return(
        <div className="infobox">
            <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} 
                </Typography>
                <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary'}}>
                    <div>Temperature = {info.temp}&deg;C</div>
                    <div>Humidity =  {info.humidity}&deg;C</div>
                    <div>Max. Temperature = {info.tempMax}&deg;C</div>
                    <div>Min. Temperature = {info.tempMin}&deg;C</div>
                    <div>Weather = {info.weather}</div>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
        </div>
    )
}