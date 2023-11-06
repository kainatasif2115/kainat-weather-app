import Sidebar from '../components/sidebar'
import loginBg from '../components/auth/loginBg.svg'
import  Header  from '../components/Header'

const Home=({userName})=>{

    return(
        <>
            <Header userName={userName} tabName={'Home'}/>
            <Sidebar/>
            <div className="bg-blue-100 p-8 h-screen ml-64">
                <div className="bg-blue-400 text-white p-4 rounded-md">
                    <h1 className="text-4xl font-bold">Welcome, {userName}!</h1>
                    <p className="text-lg mt-4">
                    Welcome to our weather data website. You can search for weather data for cities for the next 7 days and add your favorite cities.
                    </p>
                </div>
                <img 
                    alt=""
                    className="w-full"
                    src={loginBg}
                />    
            </div>
        </>
    ) 
    
}

export default Home;