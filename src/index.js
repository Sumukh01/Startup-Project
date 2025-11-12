import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//                                  Learning React code

// const element=<h1 className='testClass'>Welcome to React</h1>;

// //Single line code for rendering

// // ReactDOM.render(element,document.getElementById("root"));          // Old way of rendering in React v17 and earlier
// const root=ReactDOM.createRoot(document.getElementById("root"));      // New way of rendering in React v18 and later
// root.render(element);

// const newElement=<h1> Understanding the Creation of Elements</h1>

// const newRoot=ReactDOM.createRoot(document.getElementById("newRoot"));
// newRoot.render(newElement);

//                                  Multiple line code for rendering

// const multiLineElement=(
//   <div className='testClass'>
//     <h1>Welcome to React</h1>
//     <h1>Understanding the Creation of Elements</h1>
//   </div>
// )

// const multiRoot=ReactDOM.createRoot(document.getElementById("root"));
// multiRoot.render(multiLineElement)

//                                 Element creation without JSX

// const noJsxElement=React.createElement("div", {className:"testClass"},
//   React.createElement("h1", null, "Welcome to React"),
//   React.createElement("h1", null, "Understanding the Creation of Elements")
// )

// const noJsxRoot=ReactDOM.createRoot(document.getElementById("root"));
// noJsxRoot.render(noJsxElement);

//                                 Functional Component
// Arrow Function Syntax
// const DisplayEmployeeInfo= (employee) => {
//   return <div>
// function DisplayEmployeeInfo(employee){
//   return <div>
//     <h1>Employee Details</h1>
//     <p>
//       <label>Employee ID: <b> {employee.Id} </b></label>
//     </p>
//     <p>
//       <label>Employee Name: <b> {employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee location: <b> {employee.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee Salary: <b> {employee.Salary}</b></label>
//     </p>
//     <Department DeptName={employee.DeptName} DepHead={employee.DepHead}></Department>
//   </div>
// }

// const Department=(depInfo)=>{
//   return <div>
//     <p>Department Name : <b> {depInfo.DeptName} </b></p>
//     <p>Department Head : <b> {depInfo.DepHead}</b></p>
//   </div>
// }

// const element=
// <DisplayEmployeeInfo Id="E1" Name="Sumit" 
// Location="Bengaluru" Salary="10000" DeptName="Dev" DepHead="Sumil"></DisplayEmployeeInfo>


// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(element);

// const newRoot=ReactDOM.createRoot(document.getElementById("root"));
// newRoot.render(element);

//                                 Class Component

// class Employee extends React.Component{
//   // constructor(props){
//   //   super(props);
//   //   console.log(this.props);
//   // }
//     render(){
//       return <div>
//         <h2>Employee Details</h2>
//         <p>
//           <label>Employee ID: <b> {this.props.Id}</b></label>
//         </p>
//         <p>
//           <label>Name: <b> {this.props.Name}</b></label>
//         </p>
//         <p>
//           <label>Location: <b>{this.props.Locaion}</b></label>
//         </p>
//         <p>
//           <label>Salary: <b>{this.props.Salary}</b></label>
//         </p>
//         <Department DepName={this.props.DepName} DepHead={this.props.DepHead}></Department>
//       </div>
//     }
// }

// class Department extends React.Component{
//   render(){
//     return<div>
//       <h2>Department Details</h2>
//       <pv>
//         <label>Dept Name: <b> {this.props.DepName} </b></label>
//       </pv>
//       <p>
//         <label> Dep Head Name <b>{this.props.DepHead}</b></label>
//       </p>
//     </div>
//   }
// }

// const element = <Employee Id="E2" Name="Sumita" Locaion="Mumbai" Salary="20000"
// DepName="Reserch" DepHead="Suman" 
// ></Employee>;

// const root=ReactDOM.createRoot(document.getElementById("root")
// )
// root.render(element);


//                            State in React Class Component

// class Employee extends React.Component{
//   // counter=0;
//   state={counter:0};
//   addEmployee=()=>{
//     this.setState({counter:this.state.counter+1});
//     // this.counter++;
//     // alert("Adding New Employee");
//     // alert("Total Employees: "+this.counter);
//   }
//   render(){
//     return <div>
//       <h2>Welcome to Employee Component</h2>
//       <p>
//         <button onClick={this.addEmployee}> Add Employee </button>
//       </p>
//       <p>
//         <label>Add Employee Button Clicked : <b>{this.state.counter}</b> times.</label>
//       </p>
//     </div>
//   }
// }

// const element=<Employee></Employee>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);



//                          Count Characters in Input Box - State and Event Handling

// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={message:''};  
//   }

//   onMessageChange(text){
//     this.setState({
//       message:'Message has '+text.length+' number of characters'
//     })
//   }
//   render(){
//     return <div>
//       <h2>Welcome to Count Characters Component</h2>
//       <p>
//         <label>Enter Message : <input type="text" 
//         onChange={e=>this.onMessageChange(e.target.value)}></input></label>
//       </p>
//       <p>
//         <label>{this.state.message}</label>
//       </p>
//     </div>
//   }
// }

// const element = <CountCharacters></CountCharacters>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);




//                          Interaction Between Components - Parent to Child Communication using Props



class Employee extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <div>
    <h2> Employee Details</h2>
    <p>
      <label> Employee Id : <b> {this.props.EmployeeId}</b></label>
    </p>
    <p>
      <label> Name : <b> {this.props.Name}</b></label>
    </p>
    <p>
      <label> Location : <b> {this.props.Location}</b></label>
    </p>
    <p>
      <label> Salary : <b> {this.props.Salary}</b></label>
    </p>
    </div>

    const element = <Employee EmployeeId="1234" Name="Ganesh" Location="Bengaluru" Salary="100000"></Employee>

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
  }
}