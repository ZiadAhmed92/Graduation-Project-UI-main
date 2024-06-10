import React from 'react';
import PropTypes from 'prop-types';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loading from '../../../image/loading.json';
import { useYear } from '../../Context/YearContext';




export let Angry = [];
export let Natural = [];
export let Happy = [];
export let Sad = [];
export let Disgusted = [];
export let Fear = [];
export let Surprised = [];
export let Calm = [];






    export default function  Month3() {

      const { year } = useYear();

  if (!year || !year.Year || !year.Year["January 2024"]) {
    return (
      <div className='col-md-12 d-flex align-items-center justify-content-center'>
        <div>
          <Lottie animationData={loading} />
        </div>
      </div>
    );
  }


  Angry = [
    { x: 'Sep', y:year.Year["September 2024"].Angry, fill: '#FF2414', toolTipMappingName: 'Sep' },
    { x: 'Oct', y:year.Year["October 2024"].Angry, fill: '#FF2414', toolTipMappingName: 'Oct' },
    { x: 'Nov', y:year.Year["November 2024"].Angry, fill: '#FF2414', toolTipMappingName: 'Nov' },
    { x: 'Dec', y:year.Year["December 2024"].Angry, fill: '#FF2414', toolTipMappingName: 'Dec' },
    
  ];
    Sad = [
    { x: 'Sep', y:year.Year["September 2024"].Sad, fill: '#0057AE', toolTipMappingName: 'Sep' },
    { x: 'Oct', y:year.Year["October 2024"].Sad, fill: '#0057AE', toolTipMappingName: 'Oct' },
    { x: 'Nov', y:year.Year["November 2024"].Sad, fill: '#0057AE', toolTipMappingName: 'Nov' },
    { x: 'Dec', y:year.Year["December 2024"].Sad, fill: '#0057AE', toolTipMappingName: 'Dec' },
    
  ];
    Happy = [
    { x: 'Sep', y:year.Year["September 2024"].Happy,fill:'#FFEB00', toolTipMappingName: 'Sep' },
    { x: 'Oct', y:year.Year["October 2024"].Happy,fill:'#FFEB00', toolTipMappingName: 'Oct' },
    { x: 'Nov', y:year.Year["November 2024"].Happy,fill:'#FFEB00', toolTipMappingName: 'Nov' },
    { x: 'Dec', y:year.Year["December 2024"].Happy,fill:'#FFEB00', toolTipMappingName: 'Dec' },
   
  ];
    Natural = [
    { x: 'Sep', y:year.Year["September 2024"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Sep' },
    { x: 'Oct', y:year.Year["October 2024"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Oct' },
    { x: 'Nov', y:year.Year["November 2024"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Nov' },
    { x: 'Dec', y:year.Year["December 2024"].Neutral,fill: " #CFD8DC", toolTipMappingName: 'Dec' },
    
  ];
    Calm = [
    { x: 'Sep', y: year.Year["September 2024"].Calm,fill: " #00BEFF", toolTipMappingName: 'Sep' },
    { x: 'Oct', y: year.Year["October 2024"].Calm,fill: " #00BEFF", toolTipMappingName: 'Oct' },
    { x: 'Nov', y: year.Year["November 2024"].Calm,fill: " #00BEFF", toolTipMappingName: 'Nov' },
    { x: 'Dec', y: year.Year["December 2024"].Calm,fill: " #00BEFF", toolTipMappingName: 'Dec' },
    
  ];
    Fear = [
    { x: 'Sep', y: year.Year["September 2024"].Fear,fill: "  #B7043C", toolTipMappingName: 'Sep' },
    { x: 'Oct', y: year.Year["October 2024"].Fear,fill: "  #B7043C", toolTipMappingName: 'Oct' },
    { x: 'Nov', y: year.Year["November 2024"].Fear,fill: "  #B7043C", toolTipMappingName: 'Nov' },
    { x: 'Dec', y: year.Year["December 2024"].Fear,fill: "  #B7043C", toolTipMappingName: 'Dec' },
    
  ];
    Disgusted = [
    { x: 'Sep', y: year.Year["September 2024"].Disguste,fill: "  #A1E533", toolTipMappingName: 'Sep' },
    { x: 'Oct', y: year.Year["October 2024"].Disguste,fill: "  #A1E533", toolTipMappingName: 'Oct' },
    { x: 'Nov', y: year.Year["November 2024"].Disguste,fill: "  #A1E533", toolTipMappingName: 'Nov' },
    { x: 'Dec', y: year.Year["December 2024"].Disguste,fill: "  #A1E533", toolTipMappingName: 'Dec' },
  
  ];
    Surprised = [
    { x: 'Sep', y:year.Year["September 2024"].Surprise,fill: "  #FF6900",  toolTipMappingName: 'Sep' },
    { x: 'Oct', y:year.Year["October 2024"].Surprise, fill: "  #FF6900", toolTipMappingName: 'Oct' },
    { x: 'Nov', y:year.Year["November 2024"].Surprise,fill: "  #FF6900",  toolTipMappingName: 'Nov' },
    { x: 'Dec', y:year.Year["December 2024"].Surprise,fill: "  #FF6900",  toolTipMappingName: 'Dec' },
    
  ];


  const SAMPLE_CSS = `
  .control-fluid {
      padding: 0px !important;
  }`;

  const loaded = () => {
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
      args.chart.series.forEach(series => {
        series.marker.dataLabel.font.color = '#000000';
      });}
  };
  return (
    <div className="control-pane">
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
            title: 'Year',
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
          title="Yearly Emotions Analysis"
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
      <div className='text-center mt-5'>
    <Link to="/homepage/history/year"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn  px-3 mx-2' > 1</button></Link>
    <Link to="/homepage/history/year/month2"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2'> 2</button></Link>
    <Link to=""><button style={{background:" #F85899",color:"white"}} className='btn px-3 mx-2'> 3</button></Link>
  </div> 
    </div>
  );
}

Month3.propTypes = {
  year: PropTypes.object.isRequired,
};

