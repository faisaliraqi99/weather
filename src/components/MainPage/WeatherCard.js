import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function WeatherCard ({ data, onDelete }) {
  return (
    <Card>
      <CardContent>
        <Typography>City: {data.name}</Typography>
        <Typography>Temp: {data.main.temp} °C</Typography>
        <Typography>Pressure: {data.main.pressure} mm</Typography>
        <Typography>Wind: {data.wind.speed} m/s</Typography>
        <Button
          onClick={() => onDelete(data.id)}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
