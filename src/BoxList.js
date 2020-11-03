import React, { useState } from 'react';
import './BoxList.css'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from "uuid/v4"

/**Displays all created boxes and new box form
 * 
 * Props:
 * - None
 * 
 * State:
 * -boxes [{backgroundColor, width, height, boxId},...]
 * 
 * App -> BoxList -> {Box, NewBoxForm}
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log('this is Boxes', boxes)

  //Remove box with boxId, invoked by the child. /
  function remove(boxId) {
    console.log('In remove - BoxList.js')
    console.log('boxId', boxId);
    setBoxes(boxes.filter(b => b.id !== boxId))
  }

  //Render boxes. /
  function renderBoxes() {
    // console.log('does this run')
    // console.log('box', boxes)

    //key uniquely id the Box component 
    const boxesToRender = boxes.map(box => (
      <div key={box.id}>
        <Box 
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          boxId={box.id}
          remove={remove}
        />
      </div>))

    return(
      <div>
        {boxesToRender}
      </div>
    )
  }

  function addBox(box) {
    console.log('this is box', box)
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);

  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  )
}




export default BoxList