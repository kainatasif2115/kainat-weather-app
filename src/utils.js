import { fetchWeatherApi } from 'openmeteo';

const fetchWeather = async (lat, lon) => {
    const params = {
      latitude: lat,
      longitude: lon,
      hourly: 'rain',
      daily: 'precipitation_probability_max',
      timezone: 'GMT',
    };
    const url = 'https://api.open-meteo.com/v1/forecast';
    const responses = await fetchWeatherApi(url, params);

    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const daily = response.daily();

    const weatherData = {
      daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000),
        ),
        precipitationProbabilityMax: daily.variables(0).valuesArray(),
      },
    };

    const data = [];
    for (let i = 0; i < weatherData.daily.time.length; i++) {
      data.push({
        date: weatherData.daily.time[i].toISOString(),
        probability: weatherData.daily.precipitationProbabilityMax[i],
      });
    }
    return data;
};

export default fetchWeather;