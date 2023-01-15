import React, { useState } from "react";

import "../../style/home/sop.style.css";

const SOPComponent = () => {

  const [data, setData] = useState({ country: "", course: "", intake: "", errorMsg: "" })

  const sendEmail = () => {
    if (validation()) {
      var receiverEmail = ""
      var ccReceiverEmail = ""
      var bccReceiverEmail = ""
      var emailSubject = "Enqiury"
      var emailBody = "Hello Zeke, I like to know more about you. \nMy inputs are :\n\ncountry : " + data.country + "\ncourse : " + data.course + "\nintake : " + data.intake + "\n please reach out me asap!!! "
      var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=" + receiverEmail + "&cc=" + ccReceiverEmail + "&su=" + emailSubject + "&body=" + emailBody
      window.open(emailrequest, '_blank');
    }
  }

  const sendToWhatsapp = () => {
    if (validation()) {
      var sendTo = "+919656119814"
      var messageBody = "Hello Zeke, I like to know more about you. \nMy inputs are :\n\ncountry : " + data.country + "\ncourse : " + data.course + "\nintake : " + data.intake + "\n please reach out me asap!!! "
      var sendRequest = "https://wa.me/" + sendTo + "/?text=" + messageBody
      window.open(sendRequest, '_blank')
    }
  }

  const validation = () => {
    if (data.country === "" && data.course === "" && data.intake === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter valid inputs..." })
      return false;
    } else if (data.country === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your country ..." })
      return false;
    } else if (data.course === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your course ..." })
      return false;
    } else if (data.intake === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your intake ..." })
      return false;
    } else if (data.country != "" || data.course != "" || data.intake != "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "" })
      return true;
    }
  }

  const saveInputDataToData = (feild, inputValue) => {
    var temp = {};
    temp = {
      country: feild === "country" ? inputValue : data.country,
      course: feild === "course" ? inputValue : data.course,
      intake: feild === "intake" ? inputValue : data.intake,
      errorMsg: feild === "errorMsg" ? inputValue : data.errorMsg
    }
    setData(temp)
  }


  return (
    <div className="screen">
      <div className="innerscreen">
        <h2>It’s okay! We’ve it all sorted!</h2>
        <small>
          We help you choose the right course, in the right college/university!
          Doing it right is what we do!
        </small>
        <div class="login">
          <input value={data.country} onChange={(e) => saveInputDataToData("country", e.target.value)} type="text" placeholder="Country"></input>
          <input value={data.course} onChange={(e) => saveInputDataToData("course", e.target.value)} type="text" placeholder="Course"></input>
          <input value={data.intake} onChange={(e) => saveInputDataToData("intake", e.target.value)} type="text" placeholder="Intake"></input>
        </div>
        {data.errorMsg === "" ? "" : <div><p className="bounsing_errormsg" style={{ color: 'red', fontSize: 'small' }}>{data.errorMsg}</p></div>}
        <div className="screen_meetus">
          <div className="meetus">
            <button onClick={(e) => sendEmail()}  >Drop a mail</button>
            <button onClick={(e) => sendToWhatsapp()}>Just Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOPComponent;