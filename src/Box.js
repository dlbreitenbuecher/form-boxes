import React from 'react';


/**Renders a props with a remove button
 * 
 * Props: 
 * - backgroundColor
 * - width
 * - height
 * - boxId
 * - remove() from parent component
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


  /**Delete box via parent function. */
  function handleRemove(evt){
    props.remove(props.boxId);
  }
 

  return(
    <div style={boxStyle}>
      <button onClick={handleRemove}>Remove the props!</button>
    </div>
  )
}




export default Box;