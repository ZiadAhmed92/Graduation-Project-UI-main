// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Browser } from "@syncfusion/ej2-base";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import loading from "../../../image/loading.json"
import { Link } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import img1 from "../../../image/empty.json"
import { useLayoutEffect } from "react";

export let data1 = [];






const SAMPLE_CSS = `
  .control-fluid {
    padding: 0px !important;
  }
  .pie-chart {
    align: center;
  }
  .button-row {
    display: flex;
    gap: 2px;
    margin-bottom: 20px; /* Add some space between the buttons and the chart */
  }
  .color-button {
    width: 15px;
    height: 15px;
    border: none;
    outline: none;
  }
  .button-container {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .button-label {
    font-size: 12px;
  }
`;

const Day = () => {
  const [day, setDay] = useState({ Day: {} });

  async function getHistoryFotDay() {
    let { data } = await axios.get(
      `https://speech-emotions-874.onrender.com/emotions/history/day/${localStorage.getItem(
        "UserId"
      )}`,
      {
        headers: {
          token: `${localStorage.getItem("Token")}`,
        },
      }

    );

    setDay(data)


  }
  data1 = [
    { x: "Angry", y: day.Day.Angry, text: "Angry", fill: "#FF2414" },
    { x: "Sad", y: day.Day.Sad, text: "Sad", fill: "#0057AE" },
    { x: "Happy", y: day.Day.Happy, text: "Happy", fill: "#FFEB00" },
    { x: "Natural", y: day.Day.Neutral, text: "Natural", fill: "#CFD8DC" },
    { x: "Calm", y: day.Day.Calm, text: "Calm", fill: "#00BEFF" },
    { x: "Fear", y: day.Day.Fear, text: "Fear", fill: "#B7043C" },
    { x: "Disgusted", y: day.Day.Disgust, text: "Disgusted", fill: "#A1E533" },
    { x: "Surprised", y: day.Day.Surprise, text: "Surprised", fill: "#FF6900" }
  ];
  useLayoutEffect(() => {
    getHistoryFotDay();
  }, []);

  // console.log(localStorage.getItem("UserId"))
  // console.log(localStorage.getItem("Token"))

  const onChartLoad = () => {
    document.getElementById("pie-chart").setAttribute("title", "");
  };

  const load = (args) => {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.accumulation.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/light/i, "Light")
      .replace(/contrast/i, "Contrast");
  };


  if (data1.every(item => item.y === 0)) {
    return <>
      <div className="w-100 mt-5 mx-auto">
        <div className="text-center">
          <Link to="">
            <button
              style={{ background: " #F85899", color: "white" }}
              className="btn px-3 mx-2"
            >
              Day
            </button>
          </Link>
          <Link to="week">
            <button
              style={{ background: " rgb(243, 223, 227)", color: "black" }}
              className="btn px-3 mx-2"
            >
              Week
            </button>
          </Link>
          <Link to="month">
            <button
              style={{ background: " rgb(243, 223, 227)", color: "black" }}
              className="btn px-3 mx-2"
            >
              Month
            </button>
          </Link>
          <Link to="year">
            <button
              style={{ background: " rgb(243, 223, 227)", color: "black" }}
              className="btn px-3 mx-2"
            >
              Year
            </button>
          </Link>
        </div>
      </div>
      <div className=' col-md-12 d-flex align-items-center justify-content-center'>
        <div >
          <Lottie animationData={img1} />
        </div>
        <h3 className="text-center" style={{ color: "var(--text" }}>Daily Statistics Are Empty</h3>

      </div>
    </>;
  }
  else {
    return (
      <>
        <div className="w-100 mt-5">
          <div className="text-center">
            <Link to="">
              <button
                style={{ background: " #F85899", color: "white" }}
                className="btn px-3 mx-2"
              >
                Day
              </button>
            </Link>
            <Link to="week">
              <button
                style={{ background: " rgb(243, 223, 227)", color: "black" }}
                className="btn px-3 mx-2"
              >
                Week
              </button>
            </Link>
            <Link to="month">
              <button
                style={{ background: " rgb(243, 223, 227)", color: "black" }}
                className="btn px-3 mx-2"
              >
                Month
              </button>
            </Link>
            <Link to="year">
              <button
                style={{ background: " rgb(243, 223, 227)", color: "black" }}
                className="btn px-3 mx-2"
              >
                Year
              </button>
            </Link>
          </div>
        </div>
        <div className="control-pane ">
          <style>{SAMPLE_CSS}</style>
          <div className="control-section row">
            <AccumulationChartComponent
              id="pie-chart"
              title="Daily Emotions Analysis"
              titleStyle={{ color: 'var(--text)' }}
              load={load}
              legendSettings={{ visible: false }}
              enableSmartLabels={true}
              enableAnimation={false}
              center={{ x: "50%", y: "50%" }}
              enableBorderOnMouseMove={true}
              tooltip={{
                enable: true,
                format: "<b>${point.x}</b><b> : ${point.y}Times</b>",
                header: "",
              }}
              loaded={onChartLoad}
            >
              <Inject
                services={[
                  AccumulationLegend,
                  PieSeries,
                  AccumulationTooltip,
                  AccumulationDataLabel,
                ]}
              />
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                  dataSource={data1}
                  name="Browser"
                  xName="x"
                  yName="y"
                  pointColorMapping="fill"
                  explode={true}
                  explodeOffset="10%"
                  explodeIndex={0}
                  startAngle={Browser.isDevice ? 55 : 35}
                  dataLabel={{
                    visible: false,
                    position: "Outside",
                    name: "text",
                    font: { fontWeight: "600" },
                    connectorStyle: { length: "20px", type: "Curve" },
                  }}
                  radius={Browser.isDevice ? "40%" : "70%"}
                />
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <ButtonRow data={data1.slice(0, 8)} />
        </div>
      </>
    );
  }
};
const ButtonRow = ({ data }) => {
  return (
    <div className="button-row">
      {data.map((item, index) => (
        <div key={index}>
          <button
            key={index}
            className="color-button mx-2"
            style={{ backgroundColor: item.fill }}
          />
          <span style={{ color: 'var(--text)' }}>{item.x}</span>
        </div>
      ))}
    </div>
  );
};


export default Day;
