import {Card, CardContent, Typography, Chip} from '@mui/material'

const TaskCard = ({ task}) => {

    return(
        <Card>
            <CardContent>
                <Typography variant='h6' gutterBottom>
                    {task.title}
                </Typography>
                <Chip label={task.tag} style={{marginRight: '10px'}} />
                <Chip 
                    label={task.status.replace('_', ' ')}
                    color={
                        task.status === 'completed'
                        ? 'success'
                        : task.status ==='in_progress'
                        ?'warning'
                        :'default'
                    }
                    />
            </CardContent>
        </Card>

    
    )
}

export default TaskCard;