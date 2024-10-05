import React from "react";
import { Header } from "../components/Header";
import { AppLeable } from "../components/AppLeable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
         <Header headerType="h1" headerText= "Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppLeable labelText= "Ваше имя"
             hasError={true}
              errorText="Введите имя в правильном формате"
               id="username"
                isRequired
                 inputPlaceholder="Имя"
                 inputType="text"
                 hasErrors={true}
                 />
            <AppLeable 
            labelText= "Ваш номер"
            errorText="Введите номер в правильном формате"
            id="phone"
            hasError={true}
            isRequired={true}
            inputPlaceholder="+998 9- --- -- --"
            inputType= "tel"
            />
           <AppButton buttonText="Далее" isDisabled={true}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
