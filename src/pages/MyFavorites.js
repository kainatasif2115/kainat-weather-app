import Sidebar from '../components/sidebar'
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import fetchWeather from '../utils';
import {db} from '../firebase';
import UserFavoritesTable from '../userFavorites';
import  Header  from '../components/Header'
const MyFavorites=({userId, userName})=>{
    const [userFavData, setUserFavData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "favorites"), where("user", "==", userId));
        getDocs(q)
          .then(async (querySnapshot) => {
            const userFavData = [];
      
            const fetchPromises = [];
      
            querySnapshot.docs.forEach((doc) => {
              const data = doc.data();
              const city = data.cityName; // Assuming the city name is stored in the 'city' field
      
              const fetchPromise = fetchWeather(data.lat, data.lon)
                .then((weatherData) => {
                  userFavData.push({ city, weatherData });
                });
      
              fetchPromises.push(fetchPromise);
            });
      
            await Promise.all(fetchPromises);
      
            setUserFavData(userFavData);
          })
          .catch((error) => {
            console.error("Error getting documents: ", error);
          });
    }, [userId]);
      

    return (
      <>
          <Header userName={userName} tabName={'My Favorites'}/>
          <Sidebar/>
          <div className='ml-64'>
                {Object?.keys(userFavData).length ? <UserFavoritesTable data={userFavData} /> : null}
          </div>
      </>
    )
}

export default MyFavorites;