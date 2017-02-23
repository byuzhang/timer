import React from 'react';
import { formatSeconds } from '../helpers';

const Clock = (props) => {
  return(
    <div className='clock'>
      <span className='clock-text'>
        {formatSeconds(props.totalSeconds)}
      </span>
    </div>
  )
}


Clock.defaultProps = {
  totalSeconds: 0
}
Clock.propTypes = {
  totalSeconds: React.PropTypes.number
}

export default Clock;
