import React from 'react';


/**Renders a box with a remove button
 * 
 * Props: 
 * - backgroundColor
 * - width
 * - height
 * 
 * State:
 * - No State
 * 
 * BoxList -> Box
 */
function Box(props) {
  const boxStyle = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height,
  };
  return(
    <div style={boxStyle}>
    </div>
  )
}

export default Box;