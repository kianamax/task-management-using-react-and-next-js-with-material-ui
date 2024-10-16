import {useState} from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const TaskForm = ({addTask}) => {
    const[title, setTitle] = useState('');
    const[tag, setTag] = useState('');
    const[status, setStatus] = useState('not_started');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title) return;

        const newTask ={
            id: Date.now(),
            title,
            tag,
            status,
        };

        addTask(newTask);
        setTitle('');
        setTag('');
        setStatus('not_started');
    };

    return(
        <form onSubmit = {handleSubmit}>
            <TextField
            label = "Task Title"
            variant='outlined'
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            margin='normal'
            />
            <FormControl fullWidth margin='normal'>
                <InputLabel>Tag</InputLabel>
                <Select 
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                    >
                        <MenuItem value="Work">Work</MenuItem>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
            </FormControl>
            <FormControl fullWidth margin='normal'>
                <InputLabel>Status</InputLabel>
                <Select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    
                    >
                        <MenuItem value="not_started">Not Started</MenuItem>
                        <MenuItem value="in_progress">In Progress</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                    </Select>
            </FormControl>
            <Button type='submit' variant='contained' color='primary' fullwidth>
                Add Task
            </Button>
            
        </form>
    );
};

export default TaskForm;