import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class CountdownForm extends Component {

  startCounter(e){
    e.preventDefault();
    const strSeconds = this.seconds.value;

    if(strSeconds.match(/^[0-9]+$/)){
      this.seconds.value = '';
      this.props.setCountdown(parseInt(strSeconds, 10));
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={(e) => this.startCounter(e)} className='countdown-form'>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="输入时间(以秒为单位)"
              inputRef={ref => {this.seconds = ref; }}
             />
          </FormGroup>
          <Button type="submit" bsStyle="primary" block>开始</Button>
        </form>
      </div>
    )
  }
}

export default CountdownForm;
