import {GetServerSideProps} from "next";
import axios from "axios";
import "../../app/styles/globals.scss";
import React from "react";
import {Weather} from "@/app/interfaces/weather";
import Image from "next/image";
import ReactECharts, {EChartsOption} from 'echarts-for-react';
import temperatureChartOption from "@/app/charts/temperature";
import windChartOption from "@/app/charts/wind";

interface WeatherPageProps {
    weatherData: Weather;
    windImage: string;
    temperatureOption: EChartsOption;
    windOption: EChartsOption;
}

const WeatherPage: React.FC<WeatherPageProps> = ({weatherData, windImage, temperatureOption, windOption}) => {
    const {location, current} = weatherData;

    return (
        <div className="tw-flex tw-flex-col tw-p-5">
            <div className="tw-flex tw-flex-auto tw-justify-center">
                <h1>Weather in {location.name}</h1>
            </div>
            <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-p-4">
                {/* Card 1 */}
                <div className="tw-bg-slate-600 tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
                tw-w-full tw-h-[400px] animated fadeIn">
                    <h3 className="tw-mb-4">Temperature</h3>
                    <ReactECharts
                        option={temperatureOption}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                        style={{width: '100%', height: '100%'}}
                    />
                </div>


                {/* WIND */}
                <div className="tw-bg-slate-600 tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
                tw-w-full tw-h-[400px] animated fadeIn">
                    <h3 className="tw-mb-4">Wind</h3>
                    <ReactECharts
                        option={windOption}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                        style={{width: '100%', height: '100%'}}
                    />
                </div>

                {/* Card 3 */}
                <div className="tw-bg-slate-600 tw-shadow-md tw-rounded-lg tw-p-6">
                    <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3">
                        <div className="tw-flex-1">
                            <h3>Wind Speed</h3>
                            <h4>{current.wind_mph} mph</h4>
                            <h4>{current.wind_kph} km/h</h4>
                        </div>
                        <div className="tw-flex-1">
                            <Image src={windImage ? `/images/weather/${windImage}.png` : '/images/default.png'}
                                   alt="Wind speed indication" width={150} height={150}/>
                        </div>
                    </div>
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
            {/*<img src={windImage} alt="Wind speed indication" style={{width: "150px", height: "150px"}}/>*/}
        </div>
    );
};

// Helper function to get the image URL based on wind speed
const getWindImage = (windSpeed: number) => {
    if (windSpeed <= 20) {
        return "wind_1";
    } else if (windSpeed <= 40) {
        return "wind_2";
    } else if (windSpeed <= 60) {
        return "wind_3";
    } else if (windSpeed <= 80) {
        return "wind_4";
    } else {
        return "wind_5";
    }
};

const setTemperatureGauge = (temperature: number) => {
    temperatureChartOption.series[0].data = [
        {
            value: temperature
        }
    ];

    if (temperature <= -5) {
        temperatureChartOption.series[0].itemStyle.color = '#1E40AF';
    } else if (temperature > -5 && temperature <= 5) {
        temperatureChartOption.series[0].itemStyle.color = '#1D4ED8';
    } else if (temperature > 5 && temperature <= 10) {
        temperatureChartOption.series[0].itemStyle.color = '#2563EB';
    } else if (temperature > 10 && temperature <= 15) {
        temperatureChartOption.series[0].itemStyle.color = '#06B6D4';
    } else if (temperature > 15 && temperature <= 25) {
        temperatureChartOption.series[0].itemStyle.color = '#10B981';
    } else if (temperature > 25 && temperature <= 30) {
        temperatureChartOption.series[0].itemStyle.color = '#EAB308';
    } else {
        temperatureChartOption.series[0].itemStyle.color = '#DC2626';
    }
}

const setWindOptions = (windSpeed: number) => {

    windChartOption.series[0].data = [
        {
            value: windSpeed
        }
    ];

    if (windSpeed <= 20) {
        return "wind_1";
    } else if (windSpeed <= 40) {
        return "wind_2";
    } else if (windSpeed <= 60) {
        return "wind_3";
    } else if (windSpeed <= 80) {
        return "wind_4";
    } else {
        return "wind_5";
    }
};

export const getServerSideProps: GetServerSideProps = async () => {
    const city = 'rg248ww'; // Change this if you are using a dynamic query
    const API_KEY = process.env.WEATHERAPI_KEY;
    const WEATHER_URL = process.env.WEATHER_URL;
    const temperatureOption = {...temperatureChartOption};
    const windOption = {...windChartOption};

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
        setTemperatureGauge(weatherData.current.temp_c);
        setWindOptions(weatherData.current.wind_mph);

        console.log('weatherData: ', weatherData);

        if (!weatherData.current || !weatherData.location) {
            throw new Error('Weather data is not available');
        }

        return {
            props: {
                weatherData,
                windImage: windImage,
                temperatureOption,
                windOption
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
