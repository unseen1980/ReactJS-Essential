import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FaBeer from 'react-icons/lib/fa/beer';
import GoFlame from 'react-icons/lib/go/flame';
import TiCss3 from 'react-icons/lib/ti/css3';
import FaCodepen from 'react-icons/lib/fa/codepen'

export class Stats extends Component {
  percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress = (total, goal) => {
    return this.percentToDecimal(total / goal)
  }
  render() {
    return (
      <div className="container" 
        style={{paddingBottom: '100px'}}>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <h4>
                React demo app
              </h4>
            </a>
          </div>
        </nav>
        <div className="columns level">
          <div className="column level-item has-text-centered">
            <GoFlame/> {this.props.total}
          </div>
        </div>
        <div className="columns level">
          <div className="level-left">
            <div className="column level-item">
              <FaCodepen/> {this.props.js}
            </div>
          </div>
          <div className="level-right">
            <div className="column level-item">
              <TiCss3/> {this.props.css}
            </div>
          </div>
        </div>
        <div className="columns level">
          <div className="column level-item has-text-centered">
            <FaBeer/> {this.calcGoalProgress(this.props.total, this.props.goal)}
          </div>
        </div>
      </div>
    )
  }
}

Stats.defaultProps = {
  total: 10,
  js: 10,
  css: 10,
  goal: 10
}

Stats.PropTypes = {
  total: PropTypes.number,
  js: PropTypes.number,
  css: PropTypes.number,
  goal: PropTypes.number
};
