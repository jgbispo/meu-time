import Chart from "react-apexcharts";

interface GoalsForMinute {
  '0-15': {
    total: number;
    percentage: string;
  },
  '16-30': {
    total: number;
    percentage: string;
  },
  '31-45': {
    total: number;
    percentage: string;
  },
  '46-60': {
    total: number;
    percentage: string;
  },
  '61-75': {
    total: number;
    percentage: string;
  },
  '76-90': {
    total: number;
    percentage: string;
  },
  '91-105': {
    total: number;
    percentage: string;
  },
  '106-120': {
    total: number;
    percentage: string;
  }
}

const Graphics = (props: GoalsForMinute) => {
  const options = {
    xaxis: {
      categories: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120'],
    },
    yaxis: {
      title: {
        text: 'Goals',
      },
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
  }

  const series = [
    {
      data: [
        props['0-15'].total,
        props['16-30'].total,
        props['31-45'].total,
        props['46-60'].total,
        props['61-75'].total,
        props['76-90'].total,
        props['91-105'].total,
        props['106-120'].total,
      ],
    },
  ]

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="800"
      height="320"
    />
  )
}

export default Graphics