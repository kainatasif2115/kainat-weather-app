const Sidebar=()=>{
    const SVG_CLASSES="text-gray-500 w-5 h-5"
    const TEXT_CLASSES="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700 group"

    const HomeSvg=()=><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" class={SVG_CLASSES} fill="currentColor" viewBox="0 0 50 50">
                        <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                    </svg>

    const MyFavsSvg=()=><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            class={SVG_CLASSES}
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            ></path>
                        </svg>

    const WeatherSvg=()=><svg class={SVG_CLASSES} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
    return(
        <aside class="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="/" className={TEXT_CLASSES}>
                        <HomeSvg/>
                        <span class="ml-3">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/my-favorites" className={TEXT_CLASSES}>
                        <MyFavsSvg/>
                        <span class="flex-1 ml-3 whitespace-nowrap">My Favorites</span>
                        </a>
                    </li>
                    <li>
                        <a href="/weather-forecast" className={TEXT_CLASSES}>
                        <WeatherSvg/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Weather Forecast</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}



export default Sidebar;