const windChartOption = {
    series: [
        {
            type: 'gauge',
            startAngle: 200,
            endAngle: -20,
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0.2, '#06B6D4'],
                        [0.6, '#FBBF24'],
                        [1, '#DC2626']
                    ]
                }
            },
            pointer: {
                itemStyle: {
                    color: 'auto'
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
                formatter: '{value} mph',
                color: 'inherit'
            },
            data: [
                {
                    value: 0
                }
            ]
        }
    ]
};

export default windChartOption;
