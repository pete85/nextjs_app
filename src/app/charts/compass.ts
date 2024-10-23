const compassOption = {
    series: [
        {
            type: 'gauge',
            radius: '55%',
            startAngle: 90,
            endAngle: -269.9999,
            min: 0,
            max: 360,
            splitNumber: 4,
            itemStyle: {
                color: '#FFAB91',
            },
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [[1, '#E2E8F0']],
                },
            },
            pointer: {
                width: 5,
                length: '60%',
                itemStyle: {
                    color: '#DC2626',
                    borderColor: '#CBD5E1',
                },
            },
            anchor: {
                show: true,
                showAbove: true,
                size: 5,
                itemStyle: {
                    color: '#DC2626',
                },
            },
            axisTick: {
                show: false,
                distance: -10,
                splitNumber: 5,
                lineStyle: {
                    color: '#E2E8F0',
                    width: 1,
                },
            },
            splitLine: {
                distance: -25,
                length: 10,
                lineStyle: {
                    color: '#DC2626',
                    width: 3,
                },
            },
            axisLabel: {
                distance: -25,
                color: '#E2E8F0',
                fontSize: 18,
                fontFamily: 'Montserrat',
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}°',
                fontSize: 20,
                color: 'auto',
                offsetCenter: [0, '60%'],
            },
            data: [
                {
                    value: 90, // Wind direction in degrees (e.g., 90 = East)
                },
            ],
        },
    ],
};

export default compassOption;