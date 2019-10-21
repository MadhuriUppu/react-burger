import React from 'react';
// import classes from './BuildControl.css';
import '../../../../App.css';

const buildControl = ( props ) => {
  return (
    // <div className={classes.BuildControl}>
    <div className="BuildControl">
      {/* <div className={classes.Label}>{props.label}</div> */}
      <div className="Label">{props.label}</div>
      <button onClick={props.added} className="More">More</button>
      <button onClick={props.removed} className="Less" disabled={props.disabled}>Less</button>

    </div>
  )
}

export default buildControl;
