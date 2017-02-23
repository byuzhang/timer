import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Controls extends Component {
  handleStatusChange = (newStatus) => {
    return () => {
      return this.props.handleStatusChange(newStatus);
    }
  }

  render(){
    const { countdownStatus,timerStatus } = this.props;
    const renderStartPauseButton = () => {
      if (countdownStatus === 'started' || timerStatus === 'started'){
        return (
          <div className="custombtn">
            <Button onClick={this.handleStatusChange("paused")}>暂停</Button>
          </div>
        )
      }

      else {
        return (
          <div className="custombtn">
            <Button bsStyle="primary" onClick={this.handleStatusChange("started")}>开始</Button>
          </div>
        )
      }
    }

    return (
      <div className="controls">
        {renderStartPauseButton()}
        <div className="custombtn">
          <Button bsStyle="danger" onClick={this.handleStatusChange("stopped")}>清零</Button>
        </div>
      </div>
    )
  }

}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string,
  timerStatus: React.PropTypes.string,
  handleStatusChange: React.PropTypes.func.isRequired
}

export default Controls;
