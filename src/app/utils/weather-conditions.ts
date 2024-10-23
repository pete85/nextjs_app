type WeatherConditionMapping = {
    weatherapiCode: number;
    condition: string;
    weatherapiDayIcon: string;
    weatherapiNightIcon: string;
    openweathermapDayIcon: string;
    openweathermapNightIcon: string;
};

export class WeatherConditionMapper {
    private mappings: WeatherConditionMapping[] = [
        {
            weatherapiCode: 1000,
            condition: "Clear",
            weatherapiDayIcon: "day/113.png",
            weatherapiNightIcon: "night/113.png",
            openweathermapDayIcon: "01d",
            openweathermapNightIcon: "01n"
        },
        {
            weatherapiCode: 1003,
            condition: "Partly cloudy",
            weatherapiDayIcon: "day/116.png",
            weatherapiNightIcon: "night/116.png",
            openweathermapDayIcon: "02d",
            openweathermapNightIcon: "02n"
        },
        {
            weatherapiCode: 1006,
            condition: "Cloudy",
            weatherapiDayIcon: "day/119.png",
            weatherapiNightIcon: "night/119.png",
            openweathermapDayIcon: "03d",
            openweathermapNightIcon: "03n"
        },
        {
            weatherapiCode: 1009,
            condition: "Overcast",
            weatherapiDayIcon: "day/122.png",
            weatherapiNightIcon: "night/122.png",
            openweathermapDayIcon: "04d",
            openweathermapNightIcon: "04n"
        },
        {
            weatherapiCode: 1030,
            condition: "Mist",
            weatherapiDayIcon: "day/143.png",
            weatherapiNightIcon: "night/143.png",
            openweathermapDayIcon: "50d",
            openweathermapNightIcon: "50n"
        },
        {
            weatherapiCode: 1063,
            condition: "Patchy rain possible",
            weatherapiDayIcon: "day/176.png",
            weatherapiNightIcon: "night/176.png",
            openweathermapDayIcon: "09d",
            openweathermapNightIcon: "09n"
        },
        {
            weatherapiCode: 1066,
            condition: "Patchy snow possible",
            weatherapiDayIcon: "day/179.png",
            weatherapiNightIcon: "night/179.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1069,
            condition: "Patchy sleet possible",
            weatherapiDayIcon: "day/182.png",
            weatherapiNightIcon: "night/182.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1072,
            condition: "Patchy freezing drizzle",
            weatherapiDayIcon: "day/185.png",
            weatherapiNightIcon: "night/185.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1087,
            condition: "Thundery outbreaks possible",
            weatherapiDayIcon: "day/200.png",
            weatherapiNightIcon: "night/200.png",
            openweathermapDayIcon: "11d",
            openweathermapNightIcon: "11n"
        },
        {
            weatherapiCode: 1114,
            condition: "Blowing snow",
            weatherapiDayIcon: "day/227.png",
            weatherapiNightIcon: "night/227.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1117,
            condition: "Blizzard",
            weatherapiDayIcon: "day/230.png",
            weatherapiNightIcon: "night/230.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1135,
            condition: "Fog",
            weatherapiDayIcon: "day/248.png",
            weatherapiNightIcon: "night/248.png",
            openweathermapDayIcon: "50d",
            openweathermapNightIcon: "50n"
        },
        {
            weatherapiCode: 1147,
            condition: "Freezing fog",
            weatherapiDayIcon: "day/260.png",
            weatherapiNightIcon: "night/260.png",
            openweathermapDayIcon: "50d",
            openweathermapNightIcon: "50n"
        },
        {
            weatherapiCode: 1150,
            condition: "Patchy light drizzle",
            weatherapiDayIcon: "day/263.png",
            weatherapiNightIcon: "night/263.png",
            openweathermapDayIcon: "09d",
            openweathermapNightIcon: "09n"
        },
        {
            weatherapiCode: 1153,
            condition: "Light drizzle",
            weatherapiDayIcon: "day/266.png",
            weatherapiNightIcon: "night/266.png",
            openweathermapDayIcon: "09d",
            openweathermapNightIcon: "09n"
        },
        {
            weatherapiCode: 1168,
            condition: "Freezing drizzle",
            weatherapiDayIcon: "day/281.png",
            weatherapiNightIcon: "night/281.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1171,
            condition: "Heavy freezing drizzle",
            weatherapiDayIcon: "day/284.png",
            weatherapiNightIcon: "night/284.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1180,
            condition: "Patchy light rain",
            weatherapiDayIcon: "day/293.png",
            weatherapiNightIcon: "night/293.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1183,
            condition: "Light rain",
            weatherapiDayIcon: "day/296.png",
            weatherapiNightIcon: "night/296.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1186,
            condition: "Moderate rain at times",
            weatherapiDayIcon: "day/299.png",
            weatherapiNightIcon: "night/299.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1189,
            condition: "Moderate rain",
            weatherapiDayIcon: "day/302.png",
            weatherapiNightIcon: "night/302.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1192,
            condition: "Heavy rain at times",
            weatherapiDayIcon: "day/305.png",
            weatherapiNightIcon: "night/305.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1195,
            condition: "Heavy rain",
            weatherapiDayIcon: "day/308.png",
            weatherapiNightIcon: "night/308.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1198,
            condition: "Light freezing rain",
            weatherapiDayIcon: "day/311.png",
            weatherapiNightIcon: "night/311.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1201,
            condition: "Moderate or heavy freezing rain",
            weatherapiDayIcon: "day/314.png",
            weatherapiNightIcon: "night/314.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1204,
            condition: "Light sleet",
            weatherapiDayIcon: "day/317.png",
            weatherapiNightIcon: "night/317.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1207,
            condition: "Moderate or heavy sleet",
            weatherapiDayIcon: "day/320.png",
            weatherapiNightIcon: "night/320.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1210,
            condition: "Patchy light snow",
            weatherapiDayIcon: "day/323.png",
            weatherapiNightIcon: "night/323.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1213,
            condition: "Light snow",
            weatherapiDayIcon: "day/326.png",
            weatherapiNightIcon: "night/326.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1216,
            condition: "Patchy moderate snow",
            weatherapiDayIcon: "day/329.png",
            weatherapiNightIcon: "night/329.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1219,
            condition: "Moderate snow",
            weatherapiDayIcon: "day/332.png",
            weatherapiNightIcon: "night/332.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1222,
            condition: "Patchy heavy snow",
            weatherapiDayIcon: "day/335.png",
            weatherapiNightIcon: "night/335.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1225,
            condition: "Heavy snow",
            weatherapiDayIcon: "day/338.png",
            weatherapiNightIcon: "night/338.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1237,
            condition: "Ice pellets",
            weatherapiDayIcon: "day/350.png",
            weatherapiNightIcon: "night/350.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1240,
            condition: "Light rain shower",
            weatherapiDayIcon: "day/353.png",
            weatherapiNightIcon: "night/353.png",
            openweathermapDayIcon: "09d",
            openweathermapNightIcon: "09n"
        },
        {
            weatherapiCode: 1243,
            condition: "Moderate or heavy rain shower",
            weatherapiDayIcon: "day/356.png",
            weatherapiNightIcon: "night/356.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1246,
            condition: "Torrential rain shower",
            weatherapiDayIcon: "day/359.png",
            weatherapiNightIcon: "night/359.png",
            openweathermapDayIcon: "10d",
            openweathermapNightIcon: "10n"
        },
        {
            weatherapiCode: 1249,
            condition: "Light sleet showers",
            weatherapiDayIcon: "day/362.png",
            weatherapiNightIcon: "night/362.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1252,
            condition: "Moderate or heavy sleet showers",
            weatherapiDayIcon: "day/365.png",
            weatherapiNightIcon: "night/365.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1255,
            condition: "Light snow showers",
            weatherapiDayIcon: "day/368.png",
            weatherapiNightIcon: "night/368.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1258,
            condition: "Moderate or heavy snow showers",
            weatherapiDayIcon: "day/371.png",
            weatherapiNightIcon: "night/371.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1261,
            condition: "Light showers of ice pellets",
            weatherapiDayIcon: "day/374.png",
            weatherapiNightIcon: "night/374.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1264,
            condition: "Moderate or heavy showers of ice pellets",
            weatherapiDayIcon: "day/377.png",
            weatherapiNightIcon: "night/377.png",
            openweathermapDayIcon: "13d",
            openweathermapNightIcon: "13n"
        },
        {
            weatherapiCode: 1273,
            condition: "Patchy light rain with thunder",
            weatherapiDayIcon: "day/386.png",
            weatherapiNightIcon: "night/386.png",
            openweathermapDayIcon: "11d",
            openweathermapNightIcon: "11n"
        },
        {
            weatherapiCode: 1276,
            condition: "Moderate or heavy rain with thunder",
            weatherapiDayIcon: "day/389.png",
            weatherapiNightIcon: "night/389.png",
            openweathermapDayIcon: "11d",
            openweathermapNightIcon: "11n"
        },
        {
            weatherapiCode: 1279,
            condition: "Patchy light snow with thunder",
            weatherapiDayIcon: "day/392.png",
            weatherapiNightIcon: "night/392.png",
            openweathermapDayIcon: "11d",
            openweathermapNightIcon: "11n"
        },
        {
            weatherapiCode: 1282,
            condition: "Moderate or heavy snow with thunder",
            weatherapiDayIcon: "day/395.png",
            weatherapiNightIcon: "night/395.png",
            openweathermapDayIcon: "11d",
            openweathermapNightIcon: "11n"
        }
    ];

    public getMappingByCode(weatherapiCode: number): WeatherConditionMapping | undefined {
        return this.mappings.find(mapping => mapping.weatherapiCode === weatherapiCode);
    }

    public getAllMappings(): WeatherConditionMapping[] {
        return this.mappings;
    }
}
