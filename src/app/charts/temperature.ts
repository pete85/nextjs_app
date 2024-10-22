const temperatureChartOption = {
    series: [
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: -30,
            max: 60,
            splitNumber: 10,
            itemStyle: {
                color: '#FFAB91'
            },
            progress: {
                show: true,
                width: 20
            },

            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 20
                }
            },
            axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                    color: '#E2E8F0'
                }
            },
            splitLine: {
                distance: -55,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#E2E8F0'
                }
            },
            axisLabel: {
                distance: -25,
                color: '#E2E8F0',
                fontSize: 18,
                fontFamily: 'Montserrat',
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 40,
                fontWeight: 'bolder',
                fontFamily: 'Montserrat',
                formatter: '{value} °C',
                color: 'inherit'
            },
            data: [
                {
                    value: 0
                }
            ]
        },
    ]
};

export default temperatureChartOption;
