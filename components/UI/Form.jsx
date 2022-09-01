import React from "react";
import classes from "../../styles/form.module.css";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";

const Form = (props) => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder={props.Lang.Lang == "En"  ? En.Contact.fieldName : Fr.Contact.fieldName} required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder={props.Lang.Lang == "En"  ? En.Contact.fieldEmail : Fr.Contact.fieldEmail} required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder={props.Lang.Lang == "En"  ? En.Contact.fieldMessage : Fr.Contact.fieldMessage} required />
      </div>

      <button className="primary__btn" type="submit">
        {props.Lang.Lang == "En"  ? En.Contact.send : Fr.Contact.send}
      </button>
    </form>
  );
};
const GetState = (state) =>{
  return {
      Lang:state
  }
}

export default connect(GetState)(Form)
