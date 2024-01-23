import React, { useState } from "react";
import "./Task.css";
// import Tasks from "./Task1";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const show = (data) => {
  let num = 0;
  for (let i = 0; i < data.tasks.length; i++) {
    if (data.tasks[i].done === true) {
      num++;
    }
  }
  if (num !== 0) {
    return (
      <>
        {data.tasks.map(function (p) {
          return (
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="name  d-flex">
                  <h4 className="mr-3">Name:</h4>
                  <span className="mt-1">{p.name}</span>
                </div>
                <div className="start  d-flex">
                  <h4 className="mr-3">Start:</h4>
                  <span className="mt-1">{p.start}</span>
                </div>
                <div className="deadline  d-flex">
                  <h4 className="mr-3">deadline:</h4>
                  <span className="mt-1">{p.end}</span>
                </div>
                <div className="descrption  d-flex">
                  <h4 className="mr-3">Descrption:</h4>
                  <span className="mt-1">{p.des}</span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    const a = (
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="name  d-flex">
            <h4 className="mr-3">Name:</h4>
            <span className="mt-1">"Task For Ever"</span>
          </div>
          <div className="start  d-flex">
            <h4 className="mr-3">Start:</h4>
            <span className="mt-1">"To Day Only"</span>
          </div>
          <div className="deadline  d-flex">
            <h4 className="mr-3">deadline:</h4>
            <span className="mt-1">"Will End Soon"</span>
          </div>
          <div className="descrption  d-flex">
            <h4 className="mr-3">Descrption:</h4>
            <span className="mt-1">"Dead Task"</span>
          </div>
        </div>
      </div>
    );
    return a;
  }
};

function Done() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const name = location.state.data.name;
  const email = location.state.data.email;
  const tasks = location.state.data.tasks;
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <div className="tasks">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="mb-3 mt-5">
                  <span className="naam">{name}</span>,Done
                </h1>
                <div className="choose d-flex ">
                  <h2 className="mb-5 mr-4 active">Done</h2>
                  <h2 className="mb-5" onClick={handleSubmit}>
                    Active
                  </h2>
                </div>
              </div>
              {show(data)}
            </div>
          </div>
        </div>
      ) : (
        navigate("/tasks", {
          state: { name: name, email: email, tasks: tasks },
        })
      )}
      {/* <div className="tasks">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mb-3 mt-5"><span className="naam">User</span>,Tasks</h1>
                    <div className="choose d-flex ">
                        <h2 className="mb-5 mr-4 active">Done</h2>
                        <h2 className="mb-5" onClick={handleSubmit}>Active</h2>
                        
                    </div>

                </div>
                <div className="col-md-6">

                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Ui</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">User Interface</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Front End</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1"> learn-Html,...</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Flutter</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">learn-dart...</span>
                        </div>  
                    </div>
                </div>
                <div className="col-md-6"> 
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Ux</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">User experence</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Back End</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1"> learn-Sql,...</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Flutter</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">learn-dart...</span>
                        </div>  
                    </div>
                 </div>
            </div>
        </div>
      </div>
      <div className="tasks">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mb-3 mt-5"><span className="naam">User</span>,Tasks</h1>
                    <div className="choose d-flex ">
                        <h2 className="mb-5 mr-4 active">Done</h2>
                        <h2 className="mb-5" onClick={handleSubmit}>Active</h2>
                        
                    </div>

                </div>
                <div className="col-md-6">

                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Ui</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">User Interface</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Front End</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1"> learn-Html,...</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Flutter</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">learn-dart...</span>
                        </div>  
                    </div>
                </div>
                <div className="col-md-6"> 
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Ux</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">User experence</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Back End</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1"> learn-Sql,...</span>
                        </div>  
                    </div>
                    <div className="card mb-3">
                        <div className="name  d-flex">
                            <h4 className="mr-3">Name:</h4>
                            <span className="mt-1">Flutter</span>
                        </div>
                        <div className="start  d-flex">
                            <h4 className="mr-3">Start:</h4>
                            <span className="mt-1">12/1/2024</span>
                        </div>
                        <div className="deadline  d-flex">
                            <h4 className="mr-3">deadline:</h4> 
                            <span className="mt-1">20/1/2024</span>
                        </div>
                        <div className="descrption  d-flex">
                            <h4 className="mr-3">Descrption:</h4>
                            <span className="mt-1">learn-dart...</span>
                        </div>  
                    </div>
                 </div>
            </div>
        </div>
      </div> */}
    </div>
  );
}
export default Done;
