import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
 
const useStyles = makeStyles({
 root: {
   maxWidth: 345
 }
});
 
export const TaskItem = ({ task, deleteTask, index }) => {
 const classes = useStyles();

 

 return (
   <Box mr={3} mb={3}>
     <Card elevation={3} className={classes.root}>
       <CardActionArea>
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             {task.label}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             {task.text}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="secondary"
           onClick = { () => deleteTask(index) }
           size='small'
           color='secondary'
         >
           Delete
         </Button>
         <Button size="small" color="primary">
           Go to task
         </Button>
       </CardActions>
     </Card>
   </Box>
 );
};
