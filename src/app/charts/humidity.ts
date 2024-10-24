const humidityChartOption = {
    series: [
        {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '70%',
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.2, '#7DD3FC'],
                        [0.4, '#38BDF8'],
                        [0.6, '#0EA5E9'],
                        [0.8, '#0284C7'],
                        [1, '#0369A1'],
                        // [0.6, '#075985'],
                        // [0.7, '#0C4A6E'],
                    ]
                }
            },
            pointer: {
                itemStyle: {
                    color: 'inherit',
                    borderColor: '#CBD5E1',
                }
            },
            axisTick: {
                distance: 0,
                length: 6,
                lineStyle: {
                    color: '#E2E8F0',
                    width: 2
                }
            },
            splitLine: {
                distance: -20,
                length: 20,
                lineStyle: {
                    color: '#E2E8F0',
                    width: 2
                }
            },
            axisLabel: {
                distance: -25,
                color: '#E2E8F0',
                fontSize: 18,
                fontFamily: 'Montserrat',
            },
            detail: {
                valueAnimation: true,
                width: '40%',
                lineHeight: 30,
                borderRadius: 8,
                offsetCenter: [0, '55%'],
                fontSize: 30,
                fontWeight: 'bolder',
                fontFamily: 'Montserrat',
                formatter: '{value}%',
                color: 'inherit',
                textBorderColor: '#292524',
                textBorderWidth: 3,
            },
            data: [
                {
                    value: 0
                }
            ]
        }
    ]
};

export default humidityChartOption;
