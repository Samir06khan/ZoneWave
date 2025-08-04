import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [selectedCity, setSelectedCity] = useState('')
    const [timeZone] = useState(Intl.supportedValuesOf('timeZone'))
    const [selectedTimeZones, setSelectedTimeZones] = useState(() => {
        const savedTimeZones = localStorage.getItem('selectedTimeZones')
        if (savedTimeZones) {
            return JSON.parse(savedTimeZones)
        } else {
            return []
        }
    })
    const [totalHours] = useState(() => {
        return Array.from({length: 24})
    })
    const [selectedSlidingHour, setSelectedSlidingHour] = useState(new Date().getHours())

    useEffect(() => {
        // if selectedCity is not in the timeZone list, reset the selectedCity
        if (timeZone.includes(selectedCity)) {
            // make sure that the timezones are not already in the selectedTimeZones
            if (!selectedTimeZones.includes(selectedCity)) {
                setSelectedTimeZones([...selectedTimeZones, selectedCity])
                setSelectedCity('')
            }
        }
    }, [selectedCity]);

    useEffect(() => {
        // add the selected time zone to local storage
        localStorage.setItem('selectedTimeZones', JSON.stringify(selectedTimeZones))
    }, [selectedTimeZones]);


    const getCurrentDate = () => {
        const now = new Date();
        return now.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    };

    const calculateDateTime = (timeZone, hourOffset = 0) => {
        const now = new Date();
        now.setHours(now.getHours() + hourOffset);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone
        }).format(now);
    };

    const getLocalTime = () => {
        const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return calculateDateTime(localTimeZone, selectedSlidingHour);
    };

    const getTimeForCity = (city) => {
        return calculateDateTime(city, selectedSlidingHour);
    };

    return (
        <>
            <div className='' id="time zone">
                <fieldset className="w-full space-y-1 text-gray-800">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <input type="search" name="Search" placeholder="Search timezone City..."
                               id={"Search"}
                               list="cities"
                               value={selectedCity}
                               onChange={(e) => {
                                   setSelectedCity(e.target.value);
                               }}
                               className="w-1/2 py-2 pl-10 text-sm rounded-md focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-sky-600"/>

                        <datalist id="cities">
                            {timeZone.map((city, index) => (
                                <option key={index} value={city}/>
                            ))}
                        </datalist>
                    </div>
                </fieldset>
            </div>

            <div className={'mt-12'}>
                <fieldset className="w-full space-y-1 text-gray-800">
                    <input type="range"
                           value={selectedSlidingHour}
                           onChange={(e) => {
                               setSelectedSlidingHour(parseInt(e.target.value));
                           }}
                           className="w-full accent-sky-600" min="1" max="24"/>
                    <div aria-hidden="true" className="flex justify-between px-1">
                        {totalHours.map((item, index) => (
                            <span key={index} className="text-xs text-gray-600">{index }</span>
                        ))}
                    </div>
                </fieldset>
            </div>

            <div className={'m-12'}>
                <div className={'grid grid-cols-3 gap-4'}>
                    <div className="max-w-sm p-4 shadow-md bg-gray-50 text-gray-800">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-sky-600">Local Time</h3>
                                <p className="leading-snug text-gray-600">{getLocalTime()}</p>
                            </div>
                        </div>
                    </div>
                    {selectedTimeZones.map((city, index) => (
                        <div key={index}
                             onDoubleClick={() => {
                                 setSelectedTimeZones(selectedTimeZones.filter((item) => item !== city));
                             }}
                             className="max-w-sm p-4 shadow-md bg-gray-50 text-gray-800">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-sky-600">{city}</h3>
                                    <p className="leading-snug text-gray-600">{getTimeForCity(city)}</p>
                                </div>
                            </div>
                            <small className="text-xs text-gray-600">double click to remove</small>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;           