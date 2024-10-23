import {GetServerSideProps} from "next";
import axios from "axios";
import "../../app/styles/globals.scss";
import React from "react";
import {Weather} from "@/app/interfaces/weather";
import ReactECharts, {EChartsOption} from 'echarts-for-react';
import temperatureChartOption from "@/app/charts/temperature";
import windChartOption from "@/app/charts/wind";
import compassOption from "@/app/charts/compass";
import rainChartOption from "@/app/charts/rain";
import MapComponent from '../../app/components/Map';

interface WeatherPageProps {
    weatherData: Weather;
    windImage: string;
    temperatureOption: EChartsOption;
    windOption: EChartsOption;
    windDirectionOption: EChartsOption;
    rainOption: EChartsOption;
}

const WeatherPage: React.FC<WeatherPageProps> = (
    {
        weatherData,
        temperatureOption,
        windOption,
        windDirectionOption,
        rainOption
    }) => {
    const {location, current} = weatherData;

    // Ensure options are defined before rendering charts
    if (!temperatureOption || !windOption || !windDirectionOption || !rainOption) {
        console.error('Chart options are undefined');
        return <div>Error: Chart options are not available.</div>;
    }

    const modifiedWindDirectionOption = {
        ...windDirectionOption,
        series: [
            {
                ...windDirectionOption.series[0],
                axisLabel: {
                    ...windDirectionOption.series[0].axisLabel,
                    formatter: (value: number) => {
                        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
                        return directions[Math.round(value / 45) % 8];
                    },
                },
                detail: {
                    ...windDirectionOption.series[0].detail,
                    formatter: () => {
                        return current.wind_dir;
                    },
                },
            },
        ],
    };

    return (
        <>
            <div className="tw-flex tw-flex-auto tw-justify-center tw-items-center app-header tw-p-5">
                <h2>Weather in {location.name}</h2>
            </div>
            <div className="tw-z-10 tw-absolute tw-w-full map-container">
                <MapComponent lat={location.lat} lng={location.lon} width="100%" height="100%" zoom={13}/>
            </div>
            <div className="tw-flex tw-z-20 tw-flex-col tw-p-5 app-body">
                <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-p-4">
                    {/* TEMPERATURE */}
                    <div className="weather-card tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
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
                    <div className="weather-card tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
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

                    {/* WIND DIRECTION */}
                    <div className="weather-card tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
                tw-w-full tw-h-[400px] animated fadeIn">
                        <h3 className="tw-mb-4">Wind Direction</h3>

                        <ReactECharts
                            option={modifiedWindDirectionOption}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            style={{width: '100%', height: '100%'}}
                        />
                    </div>

                    {/* RAIN */}
                    <div className="weather-card tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
                tw-w-full tw-h-[400px] animated fadeIn">
                        <h3 className="tw-mb-4">Rain</h3>
                        <ReactECharts
                            option={rainOption}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                            style={{width: '100%', height: '100%'}}
                        />
                    </div>

                    {/* CONDITION */}
                    <div className="weather-card tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
                    tw-w-full tw-h-[400px] animated fadeIn">
                        <h3 className="tw-mb-4">{current.condition.text}</h3>
                        <div>
                            <img src={current.condition.icon}
                                 alt="Condition image" width={100} height={100}/>
                        </div>
                        <h3 className="tw-mb-4">Humidity</h3>
                        <h1>{current.humidity}%</h1>
                    </div>

                    {/* MAP */}
                    <div className="weather-card tw-shadow-md tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center
                    tw-w-full tw-h-[400px] animated fadeIn">
                        <h3 className="tw-mb-4">{location.name}</h3>
                            <MapComponent lat={location.lat} lng={location.lon} width="100%" height="100%" zoom={10}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const API_KEY = process.env.WEATHERAPI_KEY;
    const WEATHER_URL = process.env.WEATHER_URL;
    const temperatureOption = {...temperatureChartOption};
    const windOption = {...windChartOption};
    const windDirectionOption = {...compassOption};
    const rainOption = {...rainChartOption};
    const location = context.query.q || "London";

    if (!API_KEY) {
        throw new Error('API Key is missing');
    }

    try {
        const response = await axios.get(
            `${WEATHER_URL}/current.json?q=${location}&key=${API_KEY}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const weatherData = response.data;
        setTemperatureGauge(weatherData.current.temp_c);
        setWindOptions(weatherData.current.wind_mph, weatherData.current.wind_dir, weatherData.current.wind_degree);
        setRainOptions(weatherData.current.precip_mm);

        console.log('WEATHER DATA: ', weatherData);

        if (!weatherData.current || !weatherData.location) {
            throw new Error('Weather data is not available');
        }

        return {
            props: {
                weatherData,
                temperatureOption,
                windOption,
                windDirectionOption,
                rainOption
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

const setWindOptions = (windSpeed: number, windDirection: string, windDegree: number) => {

    windChartOption.series[0].data = [
        {
            value: windSpeed
        }
    ];

    compassOption.series[0].data = [
        {
            value: windDegree
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

const setRainOptions = (rainMM: number) => {

    rainChartOption.series[0].data = [
        {
            value: rainMM
        }
    ];
};


export default WeatherPage;
