/**
 * Sample for Column series
 */
import * as React from 'react';
import loading from '../../../image/new loading.json';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Highlight,
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import Lottie from 'lottie-react';

export let Angry = [];
export let Natural = [];
export let Happy = [];
export let Sad = [];
export let Disgusted = [];
export let Fear = [];
export let Surprised = [];
export let Calm = [];




const Month1 = () => {
  const [month, setMonth] = useState({ Month: {} });

  useLayoutEffect(() => {
    getHistoryFotMonth();
    // console.log("first");
  }, []); 

  async function getHistoryFotMonth() {
    let { data } = await axios.get(
      `https://speech-emotions-874.onrender.com/emotions/history/month/${localStorage.getItem("UserId")}`,
      {
        headers: {
          token: `${localStorage.getItem("Token")}`,
        },
      }
    );  
    setMonth(data);
    // console.log(data);
  }

  if (!month.Month["Week 1"]) {
    return <><div className=' col-md-12 d-flex align-items-center justify-content-center'>
    <div >
              <Lottie animationData={loading} />
    </div>
</div> </>
      
  }
  Angry = [
    { x: 'Week1', y:  month.Month["Week 1"].Angry, fill: '#FF2414', toolTipMappingName: 'Week1' },
    { x: 'Week2', y:  month.Month["Week 2"].Angry, fill: '#FF2414', toolTipMappingName: 'Week2' },
    { x: 'Week3', y:  month.Month["Week 3"].Angry, fill: '#FF2414', toolTipMappingName: 'Week3' },
    { x: 'Week4', y:  month.Month["Week 4"].Angry, fill: '#FF2414', toolTipMappingName: 'Week4' },
    
  ];
    Sad = [
    { x: 'Week1', y: month.Month["Week 1"].Sad, fill: '#0057AE', toolTipMappingName: 'Week1' },
    { x: 'Week2', y: month.Month["Week 2"].Sad, fill: '#0057AE', toolTipMappingName: 'Week2' },
    { x: 'Week3', y: month.Month["Week 3"].Sad, fill: '#0057AE', toolTipMappingName: 'Week3' },
    { x: 'Week4', y: month.Month["Week 4"].Sad, fill: '#0057AE', toolTipMappingName: 'Week4' },
    
  ];
    Happy = [
    { x: 'Week1', y: month.Month["Week 1"].Happy,fill:'#FFEB00', toolTipMappingName: 'Week1' },
    { x: 'Week2', y: month.Month["Week 2"].Happy,fill:'#FFEB00', toolTipMappingName: 'Week2' },
    { x: 'Week3', y: month.Month["Week 3"].Happy,fill:'#FFEB00', toolTipMappingName: 'Week3' },
    { x: 'Week4', y: month.Month["Week 4"].Happy,fill:'#FFEB00', toolTipMappingName: 'Week4' },
   
  ];
    Natural = [
    { x: 'Week1', y: month.Month["Week 1"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Week1' },
    { x: 'Week2', y: month.Month["Week 2"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Week2' },
    { x: 'Week3', y: month.Month["Week 3"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Week3' },
    { x: 'Week4', y: month.Month["Week 4"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Week4' },
    
  ];
    Calm = [
    { x: 'Week1', y: month.Month["Week 1"].Calm,fill: " #00BEFF", toolTipMappingName: 'Week1' },
    { x: 'Week2', y: month.Month["Week 2"].Calm,fill: " #00BEFF", toolTipMappingName: 'Week2' },
    { x: 'Week3', y: month.Month["Week 3"].Calm,fill: " #00BEFF", toolTipMappingName: 'Week3' },
    { x: 'Week4', y: month.Month["Week 4"].Calm,fill: " #00BEFF", toolTipMappingName: 'Week4' },
    
  ];
    Fear = [
    { x: 'Week1', y: month.Month["Week 1"].Fear,fill: "  #B7043C", toolTipMappingName: 'Week1' },
    { x: 'Week2', y: month.Month["Week 2"].Fear,fill: "  #B7043C", toolTipMappingName: 'Week2' },
    { x: 'Week3', y: month.Month["Week 3"].Fear,fill: "  #B7043C", toolTipMappingName: 'Week3' },
    { x: 'Week4', y: month.Month["Week 4"].Fear,fill: "  #B7043C", toolTipMappingName: 'Week4' },
    
  ];
    Disgusted = [
    { x: 'Week1', y: month.Month["Week 1"].Disgust,fill: "  #A1E533", toolTipMappingName: 'Week1' },
    { x: 'Week2', y: month.Month["Week 2"].Disgust,fill: "  #A1E533", toolTipMappingName: 'Week2' },
    { x: 'Week3', y: month.Month["Week 3"].Disgust,fill: "  #A1E533", toolTipMappingName: 'Week3' },
    { x: 'Week4', y: month.Month["Week 4"].Disgust,fill: "  #A1E533", toolTipMappingName: 'Week4' },
  
  ];
    Surprised = [
    { x: 'Week1', y: month.Month["Week 1"].Surprise ,fill: "  #FF6900",  toolTipMappingName: 'Week1' },
    { x: 'Week2', y:  month.Month["Week 2"].Surprise, fill: "  #FF6900", toolTipMappingName: 'Week2' },
    { x: 'Week3', y:  month.Month["Week 3"].Surprise,fill: "  #FF6900",  toolTipMappingName: 'Week3' },
    { x: 'Week4', y:  month.Month["Week 4"].Surprise,fill: "  #FF6900",  toolTipMappingName: 'Week4' },
    
  ];
  
  
  const SAMPLE_CSS = `
      .control-fluid {
          padding: 0px !important;
      }`;


  const loaded = (args) => {
    let chart = document.getElementById('charts');
    chart.setAttribute('title', '');
  };
  const load = (args) => {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, 'Dark')
      .replace(/contrast/i, 'Contrast');
    if (selectedTheme === 'highcontrast') {
      args.chart.series[0].marker.dataLabel.font.color = '#000000';
      args.chart.series[1].marker.dataLabel.font.color = '#000000';
      args.chart.series[2].marker.dataLabel.font.color = '#000000';
      args.chart.series[3].marker.dataLabel.font.color = '#000000';
      args.chart.series[4].marker.dataLabel.font.color = '#000000';
      args.chart.series[5].marker.dataLabel.font.color = '#000000';
      args.chart.series[6].marker.dataLabel.font.color = '#000000';
      args.chart.series[7].marker.dataLabel.font.color = '#000000';
    }
  };
  return (
    <div className="control-pane">
      <div className='w-100 mt-5'>
      <div className='text-center'>
        <Link to="/homepage/history"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2' >Day</button></Link>
        <Link to="/homepage/history/week"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2'>Week</button></Link>
        <Link to=""><button style={{background:" #F85899",color:"white"}}  className='btn px-3 mx-2'>Month</button></Link>
        <Link to="/homepage/history/year"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2'>Year</button></Link>
      </div>
    </div> 
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: 'center' }}
          legendSettings={{ enableHighlight: true }}
          primaryXAxis={{
            labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
            labelRotation: Browser.isDevice ? -45 : 0,
            valueType: 'Category',
            title: 'Month',
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
          }}
          primaryYAxis={{
            title: 'The number of repetitions of emotion',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            maximum: 50,
            interval: 10,
          }}
          chartArea={{ border: { width: 0 } }}
          load={load.bind(this)}
          tooltip={{
            enable: true,
            header: '<b>${point.tooltip}</b>',
            shared: true,
          }}
          width={Browser.isDevice ? '100%' : '75%'}
          title="Monthly Emotions Analysis"
          loaded={loaded.bind(this)}
        >
          <Inject
            services={[
              ColumnSeries,
              Legend,
              Tooltip,
              Category,
              DataLabel,
              Highlight,
            ]}
          />
          <SeriesCollectionDirective>
            {/* hover values */}
            <SeriesDirective
              dataSource={Angry}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Angry"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={ Sad}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Sad"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Happy}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Happy"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Natural}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Natural"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Calm}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Calm"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Fear}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Fear"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Disgusted}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Disgusted"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Surprised}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Surprised"
              type="Column"
              pointColorMapping='fill'

            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default Month1;


