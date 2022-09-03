import React,{useState} from "react";
import classes from "../../styles/form.module.css";
import En from '../../Lang/en.json'
import Fr from '../../Lang/fr.json'
import { connect } from "react-redux";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';



const Form = (props) => {
  const [ContactData,SetContactData] = useState({
    Name:'',
    Email:'',
    ClientMessage:''
  })
  const submitHandler = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'Faical Bahsis',
      from_name: 'Your portfolio',
      ClientName: ContactData.Name,
      ClientEmail:ContactData.Email,
      Message:ContactData.ClientMessage,
    };
    console.log("templateParams => " , templateParams)
      emailjs.send(process.env.NEXT_PUBLIC_SERVICE_EMAIL, process.env.NEXT_PUBLIC_TEMPLATE_2_EMAIL,templateParams,process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAIL)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: props.Lang.Lang == "Fr"  ? "votre message a été envoyé avec succès" : "your message sent successfully",
            showConfirmButton: false,
            timer: 1500
        })
      }, (error) => {
          console.log(error.text);
      });
  };

  const GetData = (key,value)=>{
    const newstate = ContactData
    newstate[key] = value
    SetContactData(newstate)
  }
  return (
    <form className={`${classes.form}`} onSubmit={(e)=>{submitHandler(e)}}>
      <div className={`${classes.form__group}`}>
        <input defaultvalue ={ContactData.Name} onChange={(e)=>{GetData("Name",e.target.value)}} type="text" placeholder={props.Lang.Lang == "Fr"  ?  Fr.Contact.fieldName : En.Contact.fieldName } required />
      </div>
      <div className={`${classes.form__group}`}>
        <input defaultvalue ={ContactData.Email} onChange={(e)=>{GetData("Email",e.target.value)}} type="email" placeholder={props.Lang.Lang == "Fr"  ? Fr.Contact.fieldEmail : En.Contact.fieldEmail } required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea defaultvalue ={ContactData.ClientMessage} onChange={(e)=>{GetData("ClientMessage",e.target.value)}} type="text" rows={5} placeholder={props.Lang.Lang == "Fr"  ?  Fr.Contact.fieldMessage : En.Contact.fieldMessage } required />
      </div>

      <button className="primary__btn" type="submit">
        {props.Lang.Lang == "Fr"  ?   Fr.Contact.send : En.Contact.send}
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
