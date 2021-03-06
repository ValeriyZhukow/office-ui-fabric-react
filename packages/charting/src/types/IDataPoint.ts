export interface IDataPoint {
  /**
   * Independent value of the data point, rendered along the x-axis.
   * If x is a number, then each y-coordinate is plotted at its x-coordinate.
   * If x is a string, then the data is evenly spaced along the x-axis.
   */
  x: number | string;

  /**
   * Dependent value of the data point, rendered along the y-axis.
   */
  y: number;
}

export interface IChartDataPoint {
  /**
   * Legend text for the datapoint in the chart
   */
  legend?: string;

  /**
   * data the datapoint in the chart
   */
  data?: number;

  /**
   * onClick action for each datapoint in the chart
   */
  onClick?: VoidFunction;

  /**
   * color for the legend in the chart
   */
  color?: string;
}

export interface IChartProps {
  /**
   * chart title for the chart
   */
  chartTitle?: string;

  /**
   * data for the points in the chart
   */
  chartData?: IChartDataPoint[];
}
