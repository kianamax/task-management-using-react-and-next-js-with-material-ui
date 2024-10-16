'use client';
import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskCard from './TaskCard'
import { Container, Typography, Grid } from "@mui/material"
import { Task } from "@mui/icons-material";

export default function Home(){
    const[tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return(
        <Container maxWidth='md'>
            <Typography variant="h4" gutterBottom>
                Task Manager
            </Typography>

            <TaskForm addTask={addTask} />

            <Grid container spacing={3} style={{marginTop: '20px'}}>
                {tasks.map((task) => (
                    <Grid item xs={12} sm='6' key={task.id}>
                    <TaskCard task={task} />
                    </Grid>
                ))}
                
            </Grid>
        </Container>
    );
    
}