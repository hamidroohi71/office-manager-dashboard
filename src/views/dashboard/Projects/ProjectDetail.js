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
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTasks } from 'dataHandlers/taskDataHandler';
import TasksList from '../Tasks/TasksList';
import { getProjectById, getProjects } from 'dataHandlers/projectDataHandler';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

export default function ProjectDetail() {
  const { id } = useParams();
  console.log(id);
  const [tasks, setTasks] = useState([]);
  const [projectTasks, setProjectTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editId, setEditId] = useState(null);
  const [addModal, setAddModal] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDeadline, setTaskDeadline] = useState();
  const [taskEstimation, setTaskEstimation] = useState(0);
  const [taskProgress, setTaskProgress] = useState(null);
  const [taskProject, setTaskProject] = useState(null);
  const [notif, setNotif] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(+id).then((res) => {
      console.log(res);
      setProject(res);
    });
    handleGetProjects();
    setEditId(null);
    getTasks().then((res) => {
      setTasks([...res]);
    });
  }, [id]);

  useEffect(() => {
    console.log(tasks);
    handleSortTasks();
  }, [tasks]);

  const handleSortTasks = () => {
    let list = [];
    for (const item of tasks) {
      if (item.project_id === +id) {
        list.push(item);
      }
    }
    setProjectTasks([...list]);
  };

  const handleClickToEdit = (id, data) => {
    setEditId(id);
    console.log(data);
    setTaskDescription(data.description);
    setTaskDeadline(data.deadline);
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

  const handleGetProjects = () => {
    getProjects().then((res) => {
      console.log(res);
      setProjects([...res]);
    });
  };

  const progressCalc = () => {
    let done = 0;
    let all = 0;

    for (const item of projectTasks) {
      done += (item.progress * item.estimation) / 100;
      all += item.estimation;
    }

    const percentage = done > 0 ? Math.floor((done / all) * 100) : 0;
    return percentage;
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{project?.project_name}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Progress: {progressCalc()}%</Typography>
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
      </Grid>
      <Box sx={{ width: '100%' }}>
        <Grid container sx={{ width: '100%', mt: 2 }}>
          <Grid item sx={{ width: '100%' }}>
            <TasksList tasks={projectTasks} projects={projects} handleClickToEdit={handleClickToEdit} />
          </Grid>
        </Grid>
      </Box>
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
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DemoContainer variant="standard" components={['DatePicker']} sx={{ height: 'fit-content', py: 2 }}>
              <DatePicker
                label="Task Deadline"
                value={new Date(taskDeadline)}
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
