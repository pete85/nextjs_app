const compassOption = {
    series: [
        {
            type: 'gauge',
            startAngle: 90,
            endAngle: -269.9999,
            min: 0,
            max: 360,
            splitNumber: 8,
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
                width: 6,
                length: '60%',
                itemStyle: {
                    color: '#FF6F61',
                },
            },
            axisTick: {
                distance: -20,
                splitNumber: 5,
                lineStyle: {
                    color: '#E2E8F0',
                    width: 1,
                },
            },
            splitLine: {
                distance: -32,
                length: 10,
                lineStyle: {
                    color: '#E2E8F0',
                    width: 3,
                },
            },
            axisLabel: {
                distance: -40,
                color: '#555'
            },
            anchor: {
                show: true,
                showAbove: true,
                size: 15,
                itemStyle: {
                    color: '#FF6F61',
                },
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