import React, { useEffect, useState } from "react";
import Form from "./Register/Register";
import Tasks from "./Register/Task";
import Done from "./Register/Done";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Register/Signup";

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={apiResponse:""}
//   }
//   callApI(){
//     fetch("https://taskmanager-5ro2.onrender.com/api/v1/auth/signIn/api")
//     .then(res =>res.text())
//     .then(res =>this.setState({apiResponse:res}))
//   }
//   componentDidMount(){
//     this.callApI()
//   }
//   render(){
//     return(
//       <div className="App">
//        <Form/>
//        <h1>{this.state.apiResponse}</h1>
//       </div>
//     )
//   }
// }
// ------------------ for access second way
//  function App() {
  // const[data,setData]=useState(null)
  // useEffect(()=>{
  //   fetch('https://taskmanager-5ro2.onrender.com/api/v1/auth/signIn/api')
  //   .then(res => res.json())
  //   .then(data => setData(data.message))
  //   .catch(err => console.log(err))
  // })
//   return (
//     <div className="App">
//       <Form/>
//       <h1>{data ? data : "Looding..."}</h1>
//     </div>
//   )

//  }

// export default App;

//--------------------- wittout any thing normal

// function App() {
//   return (
//     <div className="App">
//       <Form/>
//     </div>
//   )

//  }
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/form" element={<Form />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// export default App;

