export const forecastDataSample = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1752310800,
            "main": {
                "temp": 74.16,
                "feels_like": 73.96,
                "temp_min": 69.31,
                "temp_max": 74.16,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 984,
                "humidity": 57,
                "temp_kf": 2.69
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 16
            },
            "wind": {
                "speed": 6.38,
                "deg": 113,
                "gust": 9.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-07-12 09:00:00"
        },
    ]
};

export const weatherDataSample = {
    "coord": {
        "lon": 141.3469,
        "lat": 43.0642
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 76.59,
        "feels_like": 76.33,
        "temp_min": 76.59,
        "temp_max": 76.59,
        "pressure": 1010,
        "humidity": 51,
        "sea_level": 1010,
        "grnd_level": 985
    },
    "visibility": 10000,
    "wind": {
        "speed": 9.26,
        "deg": 104,
        "gust": 7.74
    },
    "clouds": {
        "all": 19
    },
    "dt": 1752300783,
    "sys": {
        "country": "JP",
        "sunrise": 1752260756,
        "sunset": 1752315243
    },
    "timezone": 32400,
    "id": 2128295,
    "name": "Sapporo",
    "cod": 200
}
