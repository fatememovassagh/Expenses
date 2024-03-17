import ChartBar from "./chartBar";
import './chart.css'
const Chart = props =>{
    const chartDataPointsValues = props.dataPoints.map( d => d.value)
    const maxValue = Math.max(...chartDataPointsValues)
    return <div className='chart'>
        { props.dataPoints.map(dataPoint => (<ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
        ></ChartBar>))}
    </div>

}
export default Chart;