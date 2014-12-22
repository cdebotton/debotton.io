/**
 * @providesModule SVGiMac
 * @flow
 */

'use strict';

var React                   = require('react/addons');
var {classSet}              = React.addons;

var SVGiMac = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    stroke: React.PropTypes.string,
    strokeWidth: React.PropTypes.string
  },

  getDefaultProps (): Object {
    return {stroke: '#000', strokeWidth: '1'};
  },

  render (): any {
    var {nextClass, ...rest} = this.props;
    var className: string = 'svg-imac';

    if (nextClass) {
      className = className + ' ' + nextClass;
    }

    return (
      <svg className={className} {...rest} width="600" height="600" viewBox="100 120 400 480">
        <linearGradient id="frontGradient" gradientUnits="userSpaceOnUse" x1="302.2069" y1="490.7006" x2="310.6277" y2="570.8188">
          <stop  offset="0" style={{stopColor: '#B4B4B4'}}/>
          <stop  offset="9.015340e-02" style={{stopColor: '#B9B9B9'}}/>
          <stop  offset="0.2006" style={{stopColor: '#C8C8C8'}}/>
          <stop  offset="0.3213" style={{stopColor: '#E1E1E1'}}/>
          <stop  offset="0.381" style={{stopColor: '#F0F0F0'}}/>
          <stop  offset="0.4212" style={{stopColor: '#EBEBEB'}}/>
          <stop  offset="0.6227" style={{stopColor: '#D7D7D7'}}/>
          <stop  offset="0.7192" style={{stopColor: '#E4E4E4'}}/>
          <stop  offset="0.8643" style={{stopColor: '#F1F1F1'}}/>
          <stop  offset="1" style={{stopColor: '#F5F5F5'}}/>
        </linearGradient>

        <linearGradient id="depthGradient" gradientUnits="userSpaceOnUse" x1="460.2279" y1="523.0605" x2="92.3628" y2="155.1954">
          <stop  offset="0" style={{stopColor: '#B4B4B4'}}/>
          <stop  offset="0.2421" style={{stopColor: '#CFCFCF'}}/>
          <stop  offset="0.505" style={{stopColor: '#E4E4E4'}}/>
          <stop  offset="0.7609" style={{stopColor: '#F1F1F1'}}/>
          <stop  offset="1" style={{stopColor: '#F5F5F5'}}/>
        </linearGradient>

        <linearGradient id="panelGradient" gradientUnits="userSpaceOnUse" x1="424.6739" y1="558.6357" x2="235.9566" y2="369.9184">
          <stop  offset="0" style={{stopColor: '#B4B4B4'}}/>
          <stop  offset="0.2421" style={{stopColor: '#CFCFCF'}}/>
          <stop  offset="0.505" style={{stopColor: '#E4E4E4'}}/>
          <stop  offset="0.7609" style={{stopColor: '#F1F1F1'}}/>
          <stop  offset="1" style={{stopColor: '#F5F5F5'}}/>
        </linearGradient>

        <linearGradient id="bezelGradient" gradientUnits="userSpaceOnUse" x1="395.8127" y1="197.1245" x2="156.4061" y2="436.5311">
          <stop  offset="0.5302" style={{stopColor: '#3F3F3F'}}/>
          <stop  offset="0.5751" style={{stopColor: '#2F2F2F'}}/>
          <stop  offset="0.6522" style={{stopColor: '#1A1A1A'}}/>
          <stop  offset="0.7386" style={{stopColor: '#0B0B0B'}}/>
          <stop  offset="0.841" style={{stopColor: '#030303'}}/>
          <stop  offset="1" style={{stopColor: '#000000'}}/>
        </linearGradient>

        <g className="stand">
          <g className="depth">
            <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} d="M221.2,499.1c0,0-5.4,15.3-5.9,17.7s-1.4,23.1,9.5,27.7c10.9,4.6,71,25.6,71,25.6s12.4,3,25.7,0.9
              s74.8-13.4,74.8-13.4s4.6-1.9-1.6-5c-6.2-3.1-92.2-24.6-92.2-24.6s-11.5-3.5-10.7-14c0.8-10.5,3.4-19.4,3.7-19.7
              C296,494.1,221.2,499.1,221.2,499.1z"/>
          </g>
          <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} className="front" d="M223,499c0,0-2.7,9.7-3.9,15.1c-1.3,5.4-4.3,18.6,4.2,24.4c6.1,4.2,71.8,29.7,71.8,29.7
            s11.8,3.4,22.4,1.8c10.6-1.5,75.6-12.8,79.2-13.4c0,0,4.9-2.8-8.7-6.3c-13.6-3.5-84.2-21.9-84.2-21.9s-13.1-2.6-11.8-16.2
            c1.3-14,3.7-17.7,3.7-17.7L223,499z"/>
        </g>
        <g className="display">
          <g className="depth">
            <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} d="M115.2,132.5c0,0-2.8,2-2.8,5.1c0,3.1,56.6,353.3,56.6,353.3s3.6,10.4,12.8,10.5
              c9.2,0.1,311.2-19.9,316.7-20.4c5.5-0.5,9.4-2.6,5.7-11.8c-0.5-2-49.3-157.4-73.7-235.5c0,0-0.9-5.8-10.7-8.9
              c-9.8-3.1-298.6-94.6-298.6-94.6S117.8,128.8,115.2,132.5z"/>
          </g>
          <g className="panel">
            <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} d="M162.9,443l333.4-0.9l8.5,28.6c0,0,3.5,8.5-2.8,9s-314.5,20.5-314.5,20.5s-15.2,3.5-18.2-15.2
              S162.9,443,162.9,443z"/>
          </g>
          <g className="apple">
            <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} d="M370.4,458.9c0,0,1.6-1.2,2.5-1.3s2.5,1.3,2.7,1.6c0.1,0.3-0.5,1.4-0.5,1.4s-0.6,2.4,0.1,3.9
              c0.7,1.5,1.9,3.4,3,3.9c1.1,0.4,0.2,6.4-0.8,6.4c-0.6,0-2.2-1.4-2.9-1.4c-0.7,0-1.2,1.4-2.2,1.4c-1.8,0-6.1-6.2-6.7-11.1
              c-0.6-4.9,0.9-5.8,1.9-5.9C368.5,457.7,369.3,458.8,370.4,458.9z"/>
            <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} d="M371.4,456.1c-0.2,1.1-0.7,1.9-1.2,1.8c-0.5-0.1-0.7-1-0.5-2.1c0.2-1.1,1.3-2,1.3-2S371.6,455,371.4,456.1
              z"/>
          </g>
          <path stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} className="bezel" d="M430.9,234.4c-2.6-6.9-7.5-8.5-7.5-8.5l-300.8-95.4c-6.7-2.1-8.6,3.1-8.5,6.6
            c0.1,3.3,48.8,305.9,48.8,305.9l333.4-0.9C496.2,442.1,433.5,241.2,430.9,234.4z M131.4,150.2L424.5,238l58.2,189l-304.1-6.6
            L131.4,150.2z"/>
        </g>
      </svg>
    );
  }
});

module.exports = SVGiMac;
