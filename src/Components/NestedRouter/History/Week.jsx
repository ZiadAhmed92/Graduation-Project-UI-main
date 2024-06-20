// eslint-disable-next-line no-unused-vars
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
export let Disgusted = [];
export let Fear = [];
export let Happy = [];
export let Natural = [];
export let Sad = [];
export let Surprised = [];
export let Calm = [];






const Week = () => {

  const [week, setWeek] = useState({ Week: {} });


  useLayoutEffect(() => {
    getHistoryFotWeek();
  }, []);


  async function getHistoryFotWeek() {


    let { data } = await axios.get(
      `https://speech-emotions-874.onrender.com/emotions/history/week/${localStorage.getItem(
        "UserId"
      )}`,
      {
        headers: {
          token: `${localStorage.getItem("Token")}`,
        },
      }
    );
    setWeek(data);
    // console.log(data.Week)
  }

  if (!week.Week.Saturday) {
    return <><div className=' col-md-12 d-flex align-items-center justify-content-center'>
      <div >
        <Lottie animationData={loading} />
      </div>
    </div> </>

  }


  Angry = [
    { x: 'Sat', y: week.Week.Saturday.Angry, fill: ' #FF2414', toolTipMappingName: 'Sat' },
    { x: 'Sun', y: week.Week.Sunday.Angry, fill: ' #FF2414', toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Angry, fill: ' #FF2414', toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Angry, fill: ' #FF2414', toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Angry, fill: ' #FF2414', toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Angry, fill: ' #FF2414', toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Angry, fill: ' #FF2414', toolTipMappingName: 'Fri' },
  ];
  Sad = [
    { x: 'Sat', y: week.Week.Saturday.Sad, fill: ' #0057AE', toolTipMappingName: 'Sat' },
    { x: 'Sun', y: week.Week.Sunday.Sad, fill: '  #0057AE', toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Sad, fill: '  #0057AE', toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Sad, fill: ' #0057AE', toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Sad, fill: '  #0057AE', toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Sad, fill: '  #0057AE', toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Sad, fill: '  #0057AE', toolTipMappingName: 'Fri' },
  ];
  Happy = [
    { x: 'Sat', y: week.Week.Saturday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Sat' },

    { x: 'Sun', y: week.Week.Sunday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Happy, fill: '  #FFEB00', toolTipMappingName: 'Fri' },
  ];
  Natural = [
    { x: 'Sat', y: week.Week.Saturday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Sat' },

    { x: 'Sun', y: week.Week.Sunday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Neutral, fill: " #CFD8DC", toolTipMappingName: 'Fri' },
  ];
  Calm = [
    { x: 'Sat', y: week.Week.Saturday.Calm, fill: " #00BEFF", toolTipMappingName: 'Sat' },

    { x: 'Sun', y: week.Week.Sunday.Calm, fill: " #00BEFF", toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Calm, fill: " #00BEFF", toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Calm, fill: " #00BEFF", toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Calm, fill: " #00BEFF", toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Calm, fill: " #00BEFF", toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Calm, fill: " #00BEFF", toolTipMappingName: 'Fri' },
  ];
  Fear = [
    { x: 'Sat', y: week.Week.Saturday.Fear, fill: "  #B7043C", toolTipMappingName: 'Sat' },

    { x: 'Sun', y: week.Week.Sunday.Fear, fill: "  #B7043C", toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Fear, fill: "  #B7043C", toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Fear, fill: "  #B7043C", toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Fear, fill: "  #B7043C", toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Fear, fill: "  #B7043C", toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Fear, fill: "  #B7043C", toolTipMappingName: 'Fri' },
  ];
  Disgusted = [
    { x: 'Sat', y: week.Week.Saturday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Sat' },

    { x: 'Sun', y: week.Week.Sunday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Disgust, fill: "  #A1E533", toolTipMappingName: 'Fri' },
  ];
  Surprised = [
    { x: 'Sat', y: week.Week.Saturday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Sat' },

    { x: 'Sun', y: week.Week.Sunday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Sun' },
    { x: 'Mon', y: week.Week.Monday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Mon' },
    { x: 'Tue', y: week.Week.Tuesday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Tue' },
    { x: 'Wed', y: week.Week.Wednesday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Wed' },
    { x: 'Thu', y: week.Week.Thursday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Thu' },
    { x: 'Fri', y: week.Week.Friday.Surprise, fill: "  #FF6900", toolTipMappingName: 'Fri' },
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

    <div className="control-pane pt-5">
      <div className='w-100 '>
        <div className='text-center'>
          <Link to="/homepage/history"><button style={{ background: " rgb(243, 223, 227)", color: "black" }} className='btn px-3 mx-2' >Day</button></Link>
          <Link to=""><button style={{ background: " #F85899", color: "white" }} className='btn px-3 mx-2'>Week</button></Link>
          <Link to="/homepage/history/month"><button style={{ background: " rgb(243, 223, 227)", color: "black" }} className='btn px-3 mx-2'>Month</button></Link>
          <Link to="/homepage/history/year"><button style={{ background: " rgb(243, 223, 227)", color: "black" }} className='btn px-3 mx-2'>Year</button></Link>
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
            title: 'week',
            titleStyle: {
              color: 'var(--text)'
            },
            majorGridLines: { width: 2 },
            majorTickLines: { width: 2 },
          }}
          primaryYAxis={{
            title: 'The number of repetitions of emotion',
            titleStyle: {
              color: 'var(--text)'
            },
            majorTickLines: { width: 2 },
            lineStyle: { width: 2 },
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
          title="Weekly Emotions Analysis"
          titleStyle={{ color: 'var(--text)' }}
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

          <SeriesCollectionDirective >
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
              dataSource={Sad}
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
export default Week;


