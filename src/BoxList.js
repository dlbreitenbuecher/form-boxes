import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/**Displays all created boxes and new box form
 * 
 * Props:
 * - None
 * 
 * State:
 * -boxes [{backgroundColor, width, height},...]
 * 
 * App -> BoxList -> {Box, NewBoxForm}
 */

 function BoxList() {
   [boxes, setBoxes] = useState([]);


   function addBox(box) {
     let newBox = { ...box, id: uuid() };
     setBoxes = [...boxes, newBox];
   }
   
   function renderBoxes(boxes){
     return(
      <div>
      {boxes.map( box =>
         <Box backgroundColor={box.backgroundColor}
               width={box.width}
               height={box.height}
               key={box.id} />)
       }
       </div>
     )

   }

   //render new box with Boxform data
   return(
     <div className="Boxlist">
       <NewBoxForm addBox={addBox} />
       {renderBoxes()}
     </div>
   )
 }




export default BoxList