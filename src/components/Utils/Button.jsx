import React from 'react';

import '../../assets/styles/components/Utils.scss';


const Button = (props) => {
  return (
    <button className={"btn__primary btn__primary--admin" + " "+ props.position}>
        {props.text ? props.text :'Ingresar'}
    </button>
)}
export default Button;