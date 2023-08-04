// JiraLikeTool.js (Fictional implementation of the Jira-like tool)

import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, TextField, Box } from '@mui/material';

function JiraLikeTool() {
  const [tasks, setTasks] = useState([{
    name: 'Add validations',
    details: 'add validations for the texfields with a valid error messages and all fields are required',
    deadline: '2023-08-18',
    status: 'To Do',
    id: 2
},{
    name: 'Add task functionality',
    details: 'dont add task if any of the fields are empty',
    deadline: '2023-08-03',
    status: 'Done',
    id: 1
}]);
const [newTask, setNewTask] = useState({
    name: '',
    details: '',
    deadline: ''
  });

  const handleNewTaskChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    console.log("change", name, value, newTask)

  };

  const handleAddTask = () => {
    if (newTask.name.trim() !== '' && newTask.details.trim() !== '' && newTask.deadline.trim() !== '') {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1, status: 'To Do' }]);
      setNewTask({ name: '', details: '', deadline: '' });
    }
    console.log("tasks", tasks, newTask)
  };
  return (
    <div>
        <div style={{ margin: '10px' }} >
            <Box display="flex" justifyContent="center">
            <Box marginRight={2}>
        <TextField
          label="Task Name"
          name="name"
          value={newTask.name}
          onChange={handleNewTaskChange}
        />
        </Box>
        <Box marginRight={2}>

        <TextField
          label="Task Details"
          name="details"
          value={newTask.details}
          onChange={handleNewTaskChange}
        />
        </Box>
        <Box marginRight={2}>
        <TextField
          label="Deadline"
          name="deadline"
          type="date"
          InputLabelProps={{
          shrink: true,
        }}
          value={newTask.deadline}
          onChange={handleNewTaskChange}
        />
        </Box>
        </Box>
        <Button style={{ margin: '10px' }} variant="contained" onClick={handleAddTask}>Add Task</Button>
      </div>
      <Grid container spacing={2} rowSpacing={1} columnSpacing={2}>
        <Grid  item xs={4}>
          <Paper>
            <Typography variant="h6">To Do</Typography>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                {tasks
                    .filter((task) => task.status === 'To Do')
                    .map((task) => (
                        <Box m={2} key={task.id}>
                            <Grid  spacing={2}  item  style={{ border: '1px solid ', textAlign: 'left', padding:'10px' }}>
                                <div><strong>Task :</strong> {task.id}</div>
                                <div><strong>Name: </strong>{task.name}</div>
                                <div><strong>Details :</strong> {task.details}</div>
                                <div><strong>Dead line:</strong> {task.deadline}</div>
                            </Grid>
                        </Box>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper>
            <Typography variant="h6">In Progress</Typography>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
            {tasks
              .filter((task) => task.status === 'In Progress')
              .map((task) => (
                <Box m={2} key={task.id}>
                            <Grid  spacing={2}  item  style={{ border: '1px solid ', textAlign: 'left', padding:'10px' }}>
                                <div><strong>Task :</strong> {task.id}</div>
                                <div><strong>Name: </strong>{task.name}</div>
                                <div><strong>Details :</strong> {task.details}</div>
                                <div><strong>Dead line:</strong> {task.deadline}</div>
                            </Grid>
                        </Box>
              ))}
              </Grid>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper>
            <Typography variant="h6">Done</Typography>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
            {tasks
              .filter((task) => task.status === 'Done')
              .map((task) => (
                 <Box m={2} key={task.id}>
                            <Grid  spacing={2}  item  style={{ border: '1px solid ', textAlign: 'left', padding:'10px' }}>
                                <div><strong>Task :</strong> {task.id}</div>
                                <div><strong>Name: </strong>{task.name}</div>
                                <div><strong>Details :</strong> {task.details}</div>
                                <div><strong>Dead line:</strong> {task.deadline}</div>
                            </Grid>
                        </Box>
              ))}
              </Grid>
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
}

export default JiraLikeTool;
