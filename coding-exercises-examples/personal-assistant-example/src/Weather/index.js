/* eslint-disable camelcase */
import React from 'react'
import { Container, Header, Text } from './styles'

const Weather = ({
  weather: {
    weather: [{ description }],
    main: {
      temp_min, temp_max, temp, feels_like,
    },
    name,
  },
}) => (
  <Container>
    <Header>{`It's ${temp}˚`}</Header>
    <Text>
      {`Today's forecast is ${description}. 
    The high is ${temp_max}˚ and the low is ${temp_min}˚, 
    but it feels more like ${feels_like}˚. I hope your day 
    in ${name} is a great one!`}
    </Text>
  </Container>
)

export default Weather
