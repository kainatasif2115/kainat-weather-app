import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { options } from '../api'
import Axios from 'axios';

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);
  
  const loadOptions = async (inputValue) => {
    try {
      const response = await Axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        options,
      );
      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            name: city.name,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
        hasMore: false,
      };
    } catch (error) {
      console.log(error);
      return { options: [], hasMore: false };
    }
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={1000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;