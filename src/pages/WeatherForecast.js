import Sidebar from '../components/sidebar'
import Search from '../components/search';
import fetchWeather from '../utils';
import { useState } from 'react';
import CityData from '../components/cityData';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import  Header  from '../components/Header'
const WeatherForecast=({userId, userName})=>{
    const [currentWeather, setCurrentWeather] = useState({data:[], name: '', location:{lat:0, lon:0}});
    const handleOnSearchChange = async (searchData) => {
        const [lat, lon] = searchData.value.split(' ');
        const weatherData = await fetchWeather(lat, lon);
        setCurrentWeather({ data: weatherData, cityName: searchData.name, location:{lat:lat, lon:lon} });
      };
    const handleAddToFav=async()=>{
    try {
        const docRef = await addDoc(collection(db, "favorites"), {

        lat:currentWeather.location.lat,
        lon:currentWeather.location.lon,
        user:userId,
        cityName:currentWeather.cityName
        });
        
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    }
    return (
        <>

            <Header userName={userName} tabName={'Weather Forecast'}/>
            <Sidebar/>
            <div className='ml-64 p-12'>
                <Search onSearchChange={handleOnSearchChange} />
                <div className='mt-64'>
                    <CityData rowData={currentWeather.data}/>
                    <button className="mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" onClick={handleAddToFav}>Add to favorites!</button>
                </div>
            </div>
            
        </>
    )
}

export default WeatherForecast;