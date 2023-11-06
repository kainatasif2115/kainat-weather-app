import React, { useState } from 'react';

const WeatherTable = ({ data }) => {
  const [expandedCities, setExpandedCities] = useState(data.map(city => city.city));

  const toggleCity = (city) => {
    if (expandedCities.includes(city)) {
      setExpandedCities(expandedCities.filter((c) => c !== city));
    } else {
      setExpandedCities([...expandedCities, city]);
    }
  };

  return (
    <div className="bg-blue-100 p-4">
      {data.map((cityData) => (
        <div key={cityData.city} className="mb-4">
          <h2 className="text-xl font-bold">
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleCity(cityData.city)}
            >
              <span className="mr-2">
                {expandedCities.includes(cityData.city) ? '▲' : '▼'}
              </span>
              {cityData.city}
            </button>
          </h2>
          {expandedCities.includes(cityData.city) && (
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Probability</th>
                </tr>
              </thead>
              <tbody>
                {cityData.weatherData.map((weather) => (
                  <tr key={weather.date}>
                    <td className="border px-4 py-2">
                      {new Date(weather.date).toLocaleDateString()}
                    </td>
                    <td className="border px-4 py-2">
                      {new Date(weather.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                      })}
                    </td>
                    <td className="border px-4 py-2">{weather.probability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeatherTable;
