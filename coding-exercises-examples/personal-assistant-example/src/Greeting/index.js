import React, { useState, useEffect } from 'react'
import { Container, Hello, Text } from './styles'
import Weather from '../Weather'

const Greeting = () => {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const setLocation = position => {
    setCoords({latitude: position.coords.latitude, longitude: position.coords.longitude})
  }

  const errorHandler = err => {
    if(err.code === 1) {
      alert("Error: Access is denied!");
    } else if( err.code === 2) {
      alert("Error: Position is unavailable!");
    }
  }

  useEffect(() => {
    if(navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      const options = {timeout:60000};
      navigator.geolocation.getCurrentPosition(setLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
  }, [])

  useEffect(() => {
    if (coords) {
      const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const data = await response.json()
        setWeather(data)
      }

      getWeather()
    }
  }, [coords])

  console.log('weather: ')
  console.log(weather)

  console.log('coords: ')
  console.log(coords)
  return (
    <Container>
      <Hello>HELLO!</Hello>
      <Text>It is a beautiful day outside...</Text>
      {weather ? <Weather weather={weather} /> : <Text>Your weather data is loading...</Text>}
    </Container>
  )
}

export default Greeting
