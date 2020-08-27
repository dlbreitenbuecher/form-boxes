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
    width: `${props.width}px`,
    height: `${props.height}px`,
  };


  /**Delete box via parent function. */
  function handleRemove(evt){
    console.log('In handleRemove - Box.js')
    props.remove(props.boxId);
  }
 

  return(
    <div>
      <div style={boxStyle}></div>
      
      <button onClick={handleRemove}>
        Remove the box!
      </button>
    </div>
  )
}




export default Box;