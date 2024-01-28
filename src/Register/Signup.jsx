import React ,{ useState } from "react";
import "./Register.css";
import { Link ,useNavigate } from "react-router-dom";
import Form from "./Register";
import Spinner from "./Spinner";
function Signup() {
  // validation
  const [yourfname, setyourfName] = useState("");
  const [yourlname, setyourlName] = useState("");
  const [youremail, setyouremail] = useState("");
  const [yourpassword, setyourpassword] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("SignUP");

  const hadleLoading = () =>{
    setLoading(true);
    setButtonText(false);
    let button=document.querySelector(".sign")
    button.style.backgroundColor="#ececed"
    button.style.color="#0a1533"
    setTimeout(() => {
      setLoading(false)
      setButtonText("Fetched")
    }, 2000);
  }

  async function formsubmithandler(e){
    e.preventDefault();
    let erfname=document.querySelector(".erfname")
    let erlname=document.querySelector(".erlname")
    let eremail=document.querySelector(".eremail")
    let erpass=document.querySelector(".erpass")
    let error = document.querySelector(".error");
    let input = document.querySelectorAll("input");
    let fname = document.querySelector("#frname");
    let lname = document.querySelector("#laname");
    let email = document.querySelector("#email");
    let password = document.querySelector("#pass");
    // validate email
    let emailval = youremail;
    let emailReg = /\w+@\w+.(com|net|yahoo)/gi;
    let valiemail = emailReg.test(emailval);

    if (
      yourfname.trim().length === 0 &&
      yourlname.trim().length === 0 &&
      youremail.trim().length === 0 &&
      yourpassword.trim().length === 0
    ) {
      error.innerHTML = "Please Enter Data";
      error.style.backgroundColor = "red";
      error.style.display = "block";
      input.forEach((i) => {
        i.style.borderColor = "red";
      });
      return false;
    } else if (yourfname.trim().length < 2 || yourfname.trim.length > 15) {
      erfname.innerHTML = "Please valid Fname";
      erfname.style.display = "block";
      erfname.style.color="red"
      fname.style.borderColor = "red";
    } else if (yourlname.trim().length < 2 || yourlname.trim.length > 15) {
      erlname.innerHTML = "Please valid lname";
      erlname.style.display = "block";
      lname.style.borderColor = "red";
      erlname.style.color="red"
    } else if (valiemail == false) {
      eremail.innerHTML = "Please valid email";
      eremail.style.color="red"
       eremail.style.display = "block";
       eremail.style.borderColor="red"
    } else if (yourpassword.trim().length < 8) {
      erpass.innerHTML = "Please valid password";
      erpass.style.display = "block";
      password.style.borderColor = "red";
      erpass.style.color="red"
    }else{
      navigate("/form");
    }
  };
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
  // end validation
  return (
    <>
    {!submitted ?(
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
              <p className=" erfname mt-4 "></p>
              <input
                type="text"
                name="lname"
                id="laname"
                placeholder="Lastname"
                className="mt-4 "
                onChange={namelhandler}
              />
                <p className=" erlname mt-4 "></p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mt-4 "
                onChange={emailhandler}
              />
                <p className=" eremail mt-4 "></p>
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Password"
                className="mt-4 "
                onChange={passwordhandler}
              />
                <p className="erpass mt-4 "></p>
              <div className="buto">
                {/* <button type="submit" id="submit" className="sign">
                  SignUp
                </button> */}
                <button type="submit" id="submit" className="sign" onClick={hadleLoading}>
                    {buttonText}
                    {loading ? <Spinner/>:""}
                </button>

                <Link to="/form" style={{ textDecoration: "none" }}>
                  <button className="log">LogIn</button>
                </Link>
              </div>

              {/* {loading ? <Spinner/>:""} */}
              {/* <button type="submit" id="submit" className="non">
                      <div className="loader"></div>
                    </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
    ):(formsubmithandler)}
      
    </>
  );
}
export default Signup;
