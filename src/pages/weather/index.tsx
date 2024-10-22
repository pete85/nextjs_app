import { GetServerSideProps } from "next";
import axios from "axios";
import "../../app/globals.scss";
import React from "react";
import {Weather} from "@/app/interfaces/weather";

interface WeatherPageProps {
    weatherData: Weather;
    windImage: string;
}

const WeatherPage: React.FC<WeatherPageProps> = ({ weatherData, windImage }) => {
    const { location, current } = weatherData;

    return (
        <div className="tw-flex tw-flex-col tw-p-5">
            <div className="tw-flex tw-flex-auto tw-justify-center">
                <h1>Weather in {location.name}</h1>
            </div>
            <div className="tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-p-4">
                {/* Card 1 */}
                <div className="tw-bg-slate-600 tw-shadow-md tw-rounded-lg tw-p-6">
                    <h3>Temperature</h3>
                    <p>20°C</p>
                </div>

                {/* Card 2 */}
                <div className="tw-bg-slate-600 tw-shadow-md tw-rounded-lg tw-p-6">
                    <h2>Wind Speed</h2>
                    <p>15 mph</p>
                </div>

                {/* Card 3 */}
                <div className="tw-bg-slate-600 tw-shadow-md tw-rounded-lg tw-p-6">
                    <h2>Humidity</h2>
                    <p>60%</p>
                </div>

                {/* Additional cards can go here */}
            </div>

            <p>
                <strong>Description:</strong> {current.condition.text}
            </p>
            <p>
                <strong>Temperature:</strong> {current.temp_c}°C
            </p>
            <p>
                <strong>Feels Like:</strong> {current.feelslike_c}°C
            </p>
            <p>
                <strong>Wind:</strong> {current.wind_kph} km/h
            </p>
            <img src={windImage} alt="Wind speed indication" style={{width: "150px", height: "150px"}}/>
        </div>
    );
};

// Helper function to get the image URL based on wind speed
const getWindImage = (windSpeed: number) => {
    if (windSpeed <= 5) {
        return "wind_1";  // Image for 0-5 mph
    } else if (windSpeed <= 10) {
        return "wind_2";  // Image for 6-10 mph
    } else if (windSpeed <= 15) {
        return "wind_3";  // Image for 11-15 mph
    } else if (windSpeed <= 20) {
        return "wind_4";  // Image for 16-20 mph
    } else {
        return "wind_5";  // Image for 21+ mph
    }
};

export const getServerSideProps: GetServerSideProps = async () => {
    const city = 'rg248ww'; // Change this if you are using a dynamic query
    const API_KEY = process.env.WEATHERAPI_KEY;
    const WEATHER_URL = process.env.WEATHER_URL;

    if (!API_KEY) {
        throw new Error('API Key is missing');
    }

    try {
        const response = await axios.get(
            `${WEATHER_URL}/current.json?q=${city}&key=${API_KEY}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const weatherData = response.data;
        const windImage = getWindImage(weatherData.current.wind_mph);

        console.log('weatherData: ', weatherData);

        // Ensure that weatherData.current and weatherData.location exist
        if (!weatherData.current || !weatherData.location) {
            throw new Error('Weather data is not available');
        }

        return {
            props: {
                weatherData,
                windImage: `images/weather/${windImage}.png`,
            },
        };
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error("Error fetching weather data:", error.message);

        return {
            props: {
                weatherData: {
                    location: {
                        name: 'Unknown',
                        region: '',
                        country: '',
                        lat: 0,
                        lon: 0,
                        tz_id: '',
                        localtime_epoch: 0,
                        localtime: '',
                    },
                    current: {
                        last_updated_epoch: 0,
                        last_updated: '',
                        temp_c: 0,
                        temp_f: 0,
                        is_day: 0,
                        condition: {
                            text: 'Unable to fetch weather data',
                            icon: '',
                            code: 0,
                        },
                        wind_mph: 0,
                        wind_kph: 0,
                        wind_degree: 0,
                        wind_dir: '',
                        pressure_mb: 0,
                        pressure_in: 0,
                        precip_mm: 0,
                        precip_in: 0,
                        humidity: 0,
                        cloud: 0,
                        feelslike_c: 0,
                        feelslike_f: 0,
                        windchill_c: 0,
                        windchill_f: 0,
                        heatindex_c: 0,
                        heatindex_f: 0,
                        dewpoint_c: 0,
                        dewpoint_f: 0,
                        vis_km: 0,
                        vis_miles: 0,
                        uv: 0,
                        gust_mph: 0,
                        gust_kph: 0,
                    },
                },
            },
        };
    }
};



export default WeatherPage;
