const pressureChartOption = {
    series: [
        {
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '70%',
            startAngle: 200,
            endAngle: -20,
            min: 850,
            max: 1100,
            // splitNumber: 7,
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.6, '#F0ABFC'],
                        [0.8, '#67E8F9'],
                        [1, '#F87171']
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
                distance: -25,
                splitNumber: 3,
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
                distance: -40,
                color: '#E2E8F0',
                fontSize: 15,
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
                formatter: '{value} hPa',
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

export default pressureChartOption;
