
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { Fragment } from "react";
import ExpenseItem from "./Expenses/ExpenseItem";
import Expenses from "./Expenses/Expenses";
// import NewExpense from "./New Expenses/NewExpense";
import { useNavigate, BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

// import UseEffect from "./components/useeffect/useEffect";
// import UseState1 from "./components/state/UseState1";
// import UseState2 from "./components/state/UseState2";
import axios from 'axios';
import { autocompleteClasses, CardActionArea, CssBaseline, Switch } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import Register from './Login/Register';
import { Paper } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "@fontsource/roboto";
import "../src/index.css";
import "./App.css";
import Login from './Login/Login';
import UpdateBook from './Login/UpdateBook';
import Home from './Login/Home';

const DUMMY_EXPENSES = [
  { id: "e1", title: "Groceries", amount: "20.40", date: new Date() },
  {
    id: "e2",
    title: "Fashion",
    amount: "40.40",
    date: new Date(2022, 6, 23),
  },
  { id: "e3", title: "Health", amount: "10.40", date: new Date(2020, 6, 24) },
  {
    id: "e4",
    title: "Digital",
    amount: "10.40",
    date: new Date(2022, 6, 25),
  },
];



function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [count, setCount] = useState(0);
const a = axios.defaults.withCredentials = true

  
  // const [plans, setPlans] = useState([])

  // useEffect(()=> {
  //   getplans()
  // }, [])


  // const getplans = () => {
  //   axios.get('http://localhost:3001/api/actionPlans/getActionPlans').then(response => 
  //     response.data).then(
  //       (result) => {
  //         setPlans(result)
  //       },
        
  //     )
    
  // }

  // const getplans = () => {
  //   axios.get('http://restapi.adequateshop.com/api/Metadata/GetEmployees').then(response => 
  //     response.data).then(
  //       (result) => {
  //         setPlans(result)
  //       },
        
  //     )
    
  // }
  

// const counterHandler = () => {
//   setCount(count +1)
// }

//   const addExpenseHandler = (expense) => {
//     console.log(expense);
//     setExpenses((prevexpenses) => {
//       return [...prevexpenses, expense];
//     });
//   };



  return (
    
    <>
    <div className=''>

      {/* <ImageSlider slides={SliderData} /> */}
      
     <BrowserRouter>
    <div>

      
</div>
      <Routes>
       <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" defaults element={<Home />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/edit-plan/:id' element={<UpdateBook />} />
        
        <Route path="/register" element={<Register />} />
        
      </Routes>

    </BrowserRouter>  
    </div>
    {/* {plans.map((plan) => {
            return(
       <Card sx={{  height: 100, margin: 'auto', backgroundColor:'pink', display: 'inline-block' }}>
       
      <CardActionArea >
        
        <CardContent  key={plan.id}>
        
          <Typography gutterBottom variant="h5" component="div">
            {plan.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {plan.description}
          </Typography>
            
        </CardContent>
      </CardActionArea>
       
    </Card>
    )})} */}
          {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => {
            return(
              <tr key={plan.id}>
                <td >{plan.title}</td>
                 <td>{plan.description}</td> 
              </tr>
            
          )})}
        </tbody>
      </table> */}


      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => {
            return(
              <tr key={plan.Id}>
                <td>{plan.Name}</td>
                <td>{plan.Address}</td>
              </tr>
            
          )})}
        </tbody>
      </table> */}
      

     

     
      {/* <UseState1 />

      <UseState2 /> */}
      {/* <div>
        <button onClick={counterHandler}>Count</button>
        {count}
      </div> */}
        {/* <NewExpense onAddEpenses={addExpenseHandler} />
      <Expenses expenses={expenses} />   */}
     <>
       {/* <Navbar /> */}
       <br/>
       {/* <Routes>
       <Route path="/" exact element= {<ExcersiceList />} />
       <Route path="/edit/:id" exact element={ <EditExcersice />} />
       <Route path="/create" exact element={<CreateExcersice />} />
       <Route path="/user" exact element={<CreateUser />} />
       </Routes> */}
     </>
     <Outlet />
    </>
  );
}

export default App;
