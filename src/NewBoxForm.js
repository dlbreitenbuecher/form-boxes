import React, { useState } from 'react';


/**Form for creating a new box to a list.
 * 
 * State - height, width, backgroundColor; on submission,
 * sends {height, width, backgroundColor} to addBox function
 * received from parent (BoxList).
 * 
 * BoxList -> NewBoxForm
 * 
 * props: addbox function
 */

function NewBoxForm({addBox}){
  const inititalState = {height: 0, width:0, backgroundColor:""};
  const [formData, setFormData] = useState(inititalState);


  /** Send box form data to the parent and clear form. */
  function handleSubmit(evt){
    evt.preventDefault();
    addbox(formData);
    setFormData(inititalState);
  }

  /**Take in state of current input, and update local React state input. */
  function handleChange(evt){
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData, 
      [name]: value,
    }));
  }


  /**Render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

    <label htmlFor="backgroundColor">backgroundColor:</label>
    <input
      id="backgroundColor"
      name="backgroundColor"
      value={formData.backgroundColor}
      onChange={handleChange}
    />

    <button>Add a new box!</button>
    </form>
  )
}

export default NewBoxForm;