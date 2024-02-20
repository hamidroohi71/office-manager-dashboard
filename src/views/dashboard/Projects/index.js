import ProjectsList from './ProjectsList';
import AddIcon from '@mui/icons-material/Add';
import { Box, height, width } from '@mui/system';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { createProject, editProject, getProjects } from 'dataHandlers/projectDataHandler';
import { useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { getTasks } from 'dataHandlers/taskDataHandler';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

export default function Projects() {
  const [addModal, setAddModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectComments, setProjectsComments] = useState('');
  const [projectPrice, setProjectPrice] = useState(0);
  const [projectDeadLine, setProjectDeadLine] = useState();
  const [productId, setProductId] = useState(null);
  const [notif, setNotif] = useState(null);
  const [editId, setEditId] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    handleGetProjects();
    handleGetTasks();
    setEditId(null);
  }, []);

  const handleGetProjects = () => {
    getProjects().then((res) => {
      console.log(res);
      setProjects([...res]);
    });
  };

  const handleGetTasks = () => {
    getTasks().then((res) => {
      console.log(res);
      setTasks([...res]);
    });
  };

  const progressCalc = (projectId) => {
    let taskList = [];
    for (const item of tasks) {
      if (item.project_id === projectId) {
        taskList.push(item);
      }
    }

    let done = 0;
    let all = 0;

    for (const item of taskList) {
      done += (item.progress * item.estimation) / 100;
      all += item.estimation;
    }

    console.log(projectId, done, all);

    const percentage = done > 0 ? Math.floor((done / all) * 100) : 0;
    return percentage;
  };

  const handleAddProject = () => {
    createProject({
      projectName: projectName,
      projectComment: projectComments,
      projectDeadline: new Date(projectDeadLine).toISOString().split('T')[0],
      projectPrice: projectPrice,
      productId: productId
    })
      .then(() => {
        setNotif('Project added successfully');
        handleGetProjects();
      })
      .catch(() => {
        setNotif('Something wrong');
      });
  };

  const handleClickToEdit = (id, data) => {
    setEditId(id);
    console.log(data);
    setProjectName(data.projectName);
    setProjectDeadLine(dayjs(data.deadline));
    setProjectsComments(data.comments);
    setProjectPrice(data.price);
    setProductId(data.productId ? data.productId : null);
    setAddModal(true);
  };

  const handleEditProject = () => {
    editProject(editId, {
      projectName: projectName,
      projectComment: projectComments,
      projectDeadline: new Date(projectDeadLine).toISOString().split('T')[0],
      projectPrice: projectPrice,
      productId: productId
    })
      .then(() => {
        setNotif('Task updated successfully');
        setEditId(null);
        handleGetProjects();
      })
      .catch(() => {
        setNotif('Something wrong');
      });
  };

  useEffect(() => {
    console.log(projectComments);
  }, [projectComments]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>All Projects</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setAddModal(true);
                  }}
                >
                  Add New Project
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item>
        <ProjectsList projects={projects} handleClickToEdit={handleClickToEdit} progressCalc={progressCalc} />
      </Grid>
      <Dialog
        open={addModal}
        onClose={() => {
          setAddModal(false);
        }}
      >
        <DialogTitle id="alert-dialog-title">{editId ? 'Update the Projects' : 'Add New Project'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Please enter the Product features</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Project Name"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
            value={projectName}
          ></TextField>
          <TextField
            autoFocus
            required
            margin="dense"
            id="comment"
            name="comment"
            label="Project Comments"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setProjectsComments(e.target.value);
            }}
            value={projectComments}
          ></TextField>
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DemoContainer variant="standard" components={['DatePicker']} sx={{ height: 'fit-content', py: 2 }}>
              <DatePicker
                label="Project Deadline"
                value={new Date(projectDeadLine)}
                onChange={(newValue) => setProjectDeadLine(newValue)}
                slotProps={{ textField: { variant: 'standard' } }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="Project Price"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setProjectPrice(e.target.value);
            }}
            value={projectPrice}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (editId) {
                handleEditProject();
              } else {
                handleAddProject();
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
