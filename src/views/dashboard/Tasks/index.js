import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
import TasksList from './TasksList';
import TasksOverviewCard from './TasksOverviewCard';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { createTask, editTask, getTasks } from 'dataHandlers/taskDataHandler';
import { getProjects } from 'dataHandlers/projectDataHandler';
import dayjs from 'dayjs';

export default function Tasks() {
  const [addModal, setAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState();
  const [taskEstimation, setTaskEstimation] = useState(0);
  const [taskProgress, setTaskProgress] = useState(null);
  const [taskProject, setTaskProject] = useState(null);
  const [notif, setNotif] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    handleGetTasks();
    handleGetProjects();
    setEditId(null);
  }, []);

  useEffect(() => {
    if (!addModal) {
      setEditId(null);
    }
  }, [addModal]);

  const handleGetTasks = () => {
    getTasks().then((res) => {
      console.log(res);
      setTasks([...res]);
    });
  };

  const handleGetProjects = () => {
    getProjects().then((res) => {
      console.log(res);
      setProjects([...res]);
    });
  };

  const handleAddTask = () => {
    createTask({
      taskDescription: taskDescription,
      deadline: new Date(taskDeadline).toISOString().split('T')[0],
      estimation: taskEstimation,
      progress: taskProgress,
      projectId: taskProject
    })
      .then(() => {
        setNotif('Task added successfully');
        handleGetTasks();
      })
      .catch(() => {
        setNotif('Something wrong');
      });
  };

  const handleClickToEdit = (id, data) => {
    setEditId(id);
    console.log(data.estimation);
    setTaskDescription(data.description);
    setTaskDeadline(dayjs(data.deadline));
    setTaskEstimation(+data.estimation);
    setTaskProgress(data.progress);
    setTaskProject(data.projectId);
    setAddModal(true);
  };

  const handleEditTask = () => {
    editTask(editId, {
      taskDescription: taskDescription,
      deadline: new Date(taskDeadline).toISOString().split('T')[0],
      estimation: +taskEstimation,
      progress: +taskProgress,
      projectId: taskProject
    })
      .then(() => {
        setNotif('Task updated successfully');
        setEditId(null);
        handleGetTasks();
      })
      .catch(() => {
        setNotif('Something wrong');
      });
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Tasks</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setAddModal(true);
                  }}
                >
                  Add New Task
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container justifyContent="space-between" sx={{ gap: '1.5rem' }}>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TasksOverviewCard />
            </Grid>
          </Grid>
          <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid item sx={{ width: '100%' }}>
              <TasksList tasks={tasks} projects={projects} handleClickToEdit={handleClickToEdit} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Dialog
        open={addModal}
        onClose={() => {
          setAddModal(false);
        }}
      >
        <DialogTitle id="alert-dialog-title">{editId ? 'Update the Task' : 'Add New Task'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Please enter the Product features</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="desc"
            name="desc"
            label="Task Description"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            value={taskDescription}
          ></TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer variant="standard" components={['DatePicker']} sx={{ height: 'fit-content', py: 2 }}>
              <DatePicker
                label="Task Deadline"
                value={taskDeadline}
                onChange={(newValue) => setTaskDeadline(newValue)}
                slotProps={{ textField: { variant: 'standard' } }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            autoFocus
            required
            margin="dense"
            id="estimation"
            name="estimation"
            label="Task Estimation"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setTaskEstimation(+e.target.value);
            }}
            value={taskEstimation}
          ></TextField>
          <TextField
            autoFocus
            required
            margin="dense"
            id="progress"
            name="progress"
            label="Task Progress"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setTaskProgress(+e.target.value);
            }}
            value={taskProgress}
          ></TextField>
          <FormControl variant="standard" sx={{ width: '100%', mt: 2 }}>
            <InputLabel required id="task-project">
              Task Project
            </InputLabel>
            <Select
              required
              labelId="task-project"
              id="task-project"
              value={taskProject}
              onChange={(e) => {
                setTaskProject(e.target.value);
              }}
              label="Task Project"
            >
              {projects.map((item) => (
                <MenuItem key={item.project_name} value={item.project_id}>
                  {item.project_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (editId) {
                handleEditTask();
              } else {
                handleAddTask();
              }
              setAddModal(false);
            }}
          >
            Add
          </Button>
          <Button
            onClick={() => {
              setAddModal(false);
            }}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={notif ? true : false}
        autoHideDuration={6000}
        onClose={() => {
          setNotif(null);
        }}
        message={notif}
      />
    </Grid>
  );
}
