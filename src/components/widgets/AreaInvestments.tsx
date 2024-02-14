import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import investmentsMock from "../../mocks/investmentsData.json";

const AreaInvestments = () => {
  const result = [];
  investmentsMock.reduce(function (res, value) {
    if (!res[value.investmentType]) {
      res[value.investmentType] = { name: value.investmentType, y: 0 };
      result.push(res[value.investmentType]);
    }
    res[value.investmentType].y += value.value;
    return res;
  }, {});

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Area Investments",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    tooltip: {
      valuePrefix: "$",
    },
    series: [
      {
        allowPointSelect: true,
        cursor: "pointer",
        name: "",
        color: "#006600",
        lineWidth: 1,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3,
          states: {
            hover: {
              enabled: true,
              lineWidth: 1,
            },
          },
        },
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
        data: result,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        containerProps={{ className: "highcharts-dark" }}
        options={options}
      />
    </div>
  );
};

export default AreaInvestments;
