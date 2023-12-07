
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

// import '../Plans/plans.css';
import axios from 'axios';
import { Alert, autocompleteClasses, Avatar, CardActionArea, Collapse, createTheme, CssBaseline, FormControlLabel, FormGroup, IconButton, Snackbar, Switch, ThemeProvider, Tooltip } from '@mui/material';
import NewPlan from "../Login/NewPlan"
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useCallback } from 'react';
import EditPlan from '../Login/EditPlan';
import { SnackbarProvider, useSnackbar } from 'notistack';
import '../Plans/card.css'
import { ExpandMoreOutlined, ExpandMoreRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
// media: {
//   height: 70,
//   paddingTop: '56.25%', // 16:9
// },
 const Plans = () => {

  
    const [plans, setPlans] = useState([])
    const [ query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [visible, setVisible] = useState(4);
    const [isdark, setIsdark] = useState(false);
    const [data, setData] = useState({email: ''})


    const navigate = useNavigate()
    
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

const darkTheme = createTheme({
  palette: {
    mode: isdark ? 'dark' : 'light',
  },
});

const handleChange =(event) => {
  setIsdark(event.target.checked)
}


    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    const avatarBgColor = (plan) => {
      if (plan.title.charAt(0) === "R" || plan.title.charAt(0) === "r" )  {
        return 'red';
      }
      if (plan.title.charAt(0) === "M" || plan.title.charAt(0) === "m") {
        return 'black';
      }
     
     if (plan.title.charAt(0) === "S" || plan.title.charAt(0) === "s") {
        return 'green';
      }
       if (plan.title.charAt(0) === "A" || plan.title.charAt(0) === "a") {
        return 'orange';
      }
       else {
        return 'blue';
      }
    };

  useEffect(()=> {
     gett()
  getplans()
  
    
    
  }, [(page),  data.email]);


  const showMorePlans = () => {
    setVisible(preValue => preValue +4)
  }

  const gett = async() => {
    try{ const ress = await axios.get("http://localhost:3001/api/user/get",  {withCredentials: true} )
      setData(ress.data)
      console.log(ress.data)
 } catch {
     navigate("/login")
 }
 }

  const getplans = async() => {
    
      const res = await axios.get(`http://localhost:3001/api/actionPlans/getActionPlans`);
      setPlans(res.data)

   
  }

  const handlechange = useCallback(
    (event, value) => {
      console.log("pagebutton")
      setPage(value)
    }
  ) 
   const edit = useCallback(() => {
    console.log("edit button")
   }, []) 
  //  const deletee = async(id) => {
  //   console.log("delete button")
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#10b541',
  //     cancelButtonColor: '#3085d6',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed)  {
        
  //       const result = await  axios.delete(`http://localhost:3001/api/actionPlans/deleteActionPlan/`+ id)
  //         .then((result) => {
  //           getplans()
  //         })
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  //  }

  

  

  const  deletee = (id) => {
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'question',
  iconColor: "#d33",
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Yes, delete it!'
}).then(async(result) => {
  if (result.isConfirmed) {
 const result = await axios.delete('http://localhost:3001/api/actionPlans/deleteActionPlan/'+ id)
    .then((result) => {
      getplans()
    enqueueSnackbar('Plan Deleted!', { variant:'success' });

    }).catch (() => {
      enqueueSnackbar("Something went wrong", {variant: 'error'})
    })


   
  }
})
   
  }

  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
      <FormGroup className='col-2'>
<FormControlLabel control={<Switch checked={isdark} onChange={handleChange} color='error'/>}
        label={`${isdark? 'Dark Mode':'Light Mode'}`} />

</FormGroup>


    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
     

    <NewPlan getData ={getplans()} />
    <div className='inputss'>
    <input className='inputt' type="text"  placeholder='Search plans' onChange={event => {setQuery(event.target.value)}} />
    </div>
    <div className='container-fluid'>
                <div className="row">
                  <div className=''>
                    
                  </div>
    {plans.slice(0, visible).filter(plan => {
      if(query=== '') {
        return plan;
        
      } else if (plan.title.toLowerCase().includes(query.toLowerCase())) {
        return plan;
      }}).map((plan) => {
            return(
       <Card key={plan.id} className='car   col-10 col-sm-5 col-md-5 col-lg-3 bg-primary my-1 py-1 mx-2 '>
       <Avatar sx={{ bgcolor: avatarBgColor(plan) }} >
            {plan.title.charAt(0).toUpperCase()}
          </Avatar>
        
          
          <Typography gutterBottom variant="h5" component="div" className='title'>
            {plan.title.toUpperCase()}
          </Typography>
          <Typography variant='body2'>Type: {plan.category}</Typography>
          <Typography variant="body2" >
            {plan.description}
          </Typography>
           <Tooltip title="Delete" arrow> 
            
          <button className='delete' onClick={() => deletee(plan._id)}>
          <i class="bi bi-trash"></i>

          </button>
           </Tooltip> 
          <div className='edit'>
          {/* <EditPlan  id={plan._id} title={plan.title} description={plan.description} /> */}
          <button className='editbtn'>
         
            <Link to={`/edit-plan/` + plan._id}>
            <i class="bi bi-pencil-square">
          </i>

            </Link>
         
     </button>
          </div>
          
          <CardActions className='d-flex float-right'>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreRounded />
        </ExpandMore>

        </CardActions>
        
      
      <Collapse in={expanded}>
        
        <CardContent  className='contents' >

          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
              {plan.method}
          </Typography>
        </CardContent>
        </Collapse>
      
       
    </Card>
    
    )})}
    <div className='text-center'>
  <Button color='secondary'  variant='contained' onClick={showMorePlans}>Load More</Button>
  </div>
<Pagination 
      count={10}
      defaultPage={page}
       color="primary" 
      onChange={handlechange}
      />

  </div>
    </div>
    </ThemeProvider>
    </div>
    </div>

  </>
  )
}
export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Plans />
    </SnackbarProvider>
  );
}