   import { Typography, TextField, makeStyles, Grid, Button } from "@material-ui/core";    
   import { TaskItem } from "../Components/TaskItem";    
   import { useState, useEffect } from 'react';


   const useStyles = makeStyles({
    form: {
      maxWidth: 500,
      marginBottom: 20
    },
    formInput: {
      marginBottom: 20
    },
    formHeader: {
      marginBottom: 5
    }
   });

    
   export const Home = () => {
    const classes = useStyles();

    const [label, setLabel] = useState('');
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    const [errorLabel, setErrorLabel] = useState('');
    const [errorText, setErrorText] = useState('');

    const addTask = (e) =>{
            e.preventDefault();
          if(label && text){
              const task = {
                  label,
                  text
              };
              setTasks([...tasks, task]);
              setLabel('');
              setText('');
          };
          
          
          if (!label) {
            setErrorLabel('Enter your task');              
          } else {
            setErrorLabel('')
          }

          if(!text) {
            setErrorText('Enter your task text');
          } else {
            setErrorText('');
          }
    };

    const deleteTask = (i) => {
        setTasks(tasks.filter((item, index)=> index !== i))
      };

    const saveLocal = () => localStorage.setItem('tasks', JSON.stringify(tasks));

    const getLocal = () => {
          if(localStorage.getItem('tasks') === null)  {
            localStorage.setItem('tasks', JSON.stringify([]));
        } else {
            let local = JSON.parse(localStorage.getItem('tasks'));
            setTasks(local);
        }

    };

    useEffect(()=>{
        getLocal();
    }, []);
    
    useEffect(()=>{
        saveLocal();
    }, [tasks]);

    return (
      <Grid container>
        <form onSubmit={addTask} className={classes.form}>
          <Typography className={classes.formHeader} variant="h6">
            Add your tasks
          </Typography>
          <TextField
          onChange = { (e)=> setLabel(e.target.value)}
          value={label}
          className={classes.formInput}
          variant="outlined"
          label="Enter task"
          error = {errorLabel ? true : false}
          helperText = {errorLabel}
          fullWidth          
          />
          <TextField
          onChange = { (e)=> setText(e.target.value)}
          value={text}
          className={classes.formInput}
          variant="outlined"
          label="Enter task"
          error = {errorText ? true : false}
          helperText = {errorText}
          fullWidth          
         
         
         
          />
          <Button type = 'submit' variant="contained" color="primary">
            Add
          </Button>
        </form>
        <Grid container>
         {tasks.map((item, i)=>{ return <TaskItem key={i} deleteTask={deleteTask} task={item} index={i}/>})}
        </Grid>
      </Grid>
    );
   };
    
   