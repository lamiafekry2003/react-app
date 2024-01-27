import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
function Form() {
  const [yourfname, setyourfName] = useState("");
  const [yourlname, setyourlName] = useState("");
  const [youremail, setyouremail] = useState("");
  const [yourpassword, setyourpassword] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("Login");
  const history = useNavigate();
  let userName;
  let userTasks = [];
  let [loading, setLoading] = useState(false);

  const hadleLoading = () =>{
    setLoading(true);
    setButtonText(false)
    setTimeout(() => {
      setLoading(false)
      setButtonText("Fetched")
    }, 2000);
  }

  // for validation
  //  const formsubmithandler=(e)=>{}
  async function formsubmithandler(e) {
    e.preventDefault();
    let go = false;
    // for validation
    // let error = document.querySelector(".error");
    // let input = document.querySelectorAll("input");
    // let fname = document.querySelector("#frname");
    // let lname = document.querySelector("#laname");
    // let email = document.querySelector("#email");
    // let password = document.querySelector("#pass");
    // // validate email
    // let emailval = youremail;
    // let emailReg = /\w+@\w+.(com|net|yahoo)/gi;
    // let valiemail = emailReg.test(emailval);

    // if (
    //   yourfname.trim().length === 0 &&
    //   yourlname.trim().length === 0 &&
    //   youremail.trim().length === 0 &&
    //   yourpassword.trim().length === 0
    // ) {
    //   error.innerHTML = "Please Enter Data";
    //   error.style.backgroundColor = "red";
    //   error.style.display = "block";
    //   input.forEach((i) => {
    //     i.style.borderColor = "red";
    //   });
    //   return false;
    // } else if (yourfname.trim().length < 2 || yourfname.trim.length > 15) {
    //   error.innerHTML = "Please valid Fname";
    //   error.style.backgroundColor = "red";
    //   error.style.display = "block";
    //   fname.style.borderColor = "red";
    // } else if (yourlname.trim().length < 2 || yourlname.trim.length > 15) {
    //   error.innerHTML = "Please valid lname";
    //   error.style.backgroundColor = "red";
    //   error.style.display = "block";
    //   lname.style.borderColor = "red";
    // } else if (valiemail === false) {
    //   error.innerHTML = "Please valid email";
    //   error.style.backgroundColor = "red";
    //   error.style.display = "block";
    //   email.style.borderColor = "red";
    // } else if (yourpassword.trim().length < 8) {
    //   error.innerHTML = "Please valid password";
    //   error.style.backgroundColor = "red";
    //   error.style.display = "block";
    //   password.style.borderColor = "red";
    // }
    // setyourfName("");
    // setyourlName("");
    // setyouremail("");
    // setyourpassword("");
    const name = yourfname + "-" + yourlname;
    const data = {
      name,
      email: youremail,
      password: yourpassword,
    };
    let stringdata = JSON.stringify(data);
    // -----------------access to login

    try {
      await axios
        .post("https://taskmanager-5ro2.onrender.com/api/v1/auth/signIn", data)
        .then((res) => {
          if (res.data.success === true) {
            go = true;
          } else {
            alert(res.data.message);
            setsubmitted(false);
            go = false;
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }

    if (go === true) {
      try {
        await axios
          .post("https://taskmanager-5ro2.onrender.com/api/v1/tasks/getUser", {
            email: youremail,
          })
          .then((res) => {
            if (res.data.success === true) {
              userName = res.data.name;
              userTasks = res.data.tasks;
            } else {
              alert("500: Internal Server Error");
            }
          })
          .catch((e) => {
            alert("wrong details");
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
      history("/tasks", {
        state: { name: userName, email: youremail, tasks: userTasks },
      });
    }
  }

  
  
  const namefhandler = (e) => {
    setyourfName(e.target.value);
  };
  const namelhandler = (e) => {
    setyourlName(e.target.value);
  };
  const emailhandler = (e) => {
    setyouremail(e.target.value);
  };
  const passwordhandler = (e) => {
    setyourpassword(e.target.value);
  };

  // ----------------------------------------------

  return (
    <div>
      {!submitted ? (
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form
                  action="POST"
                  className="mx-auto"
                  method="post"
                  onSubmit={formsubmithandler}
                >
                  <p className="error mt-4 "></p>
                  <input
                    type="text"
                    name="fname"
                    id="frname"
                    placeholder="Firstname"
                    className=" mt-5 "
                    onChange={namefhandler}
                  />
                  <input
                    type="text"
                    name="lname"
                    id="laname"
                    placeholder="Lastname"
                    className="mt-4 "
                    onChange={namelhandler}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="mt-4 "
                    onChange={emailhandler}
                  />
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    className="mt-4 "
                    onChange={passwordhandler}
                  />
                  <button type="submit" id="submit" className="logRes" onClick={hadleLoading}>
                    {buttonText}
                    {loading ? <Spinner/>:""}
                  </button>
                  {/* {loading ? <Spinner/>:""} */}
                  {/* <button type="submit" id="submit" className="non">
                    <div className="loader"></div>
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        formsubmithandler
      )}

      {/* <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form action="POST" className="mx-auto" method='post' onSubmit={formsubmithandler}>
                        <p className="error mt-4 "></p>
                        <input type="text" name="fname" id="frname" placeholder="Firstname"className=" mt-5 " onChange={namefhandler} />
                        <input type="text" name="lname" id="laname" placeholder="Lastname"className="mt-4 " onChange={namelhandler}/>
                        <input type="email" name="email" id="email" placeholder="Email" className="mt-4 " onChange={emailhandler}/>
                        <input type="password" name="password" id="pass" placeholder="Password" className="mt-4 " onChange={passwordhandler}/>
                        <button type="submit" id="submit">login</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div> */}
    </div>
  );
}
export default Form;