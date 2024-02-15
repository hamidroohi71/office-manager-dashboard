import { Button, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
import TotalProjectCard from './TotalProjectsCard';
import TotalTasksCard from './TotalTasksCard';
import TotalPerformance from './TotalPerformanceCard';
import TotalProjectChart from '../Default/TotalProjectChart';
import TasksList from '../Tasks/TasksList';
import { useState } from 'react';

export default function Technical() {
  const [tasks, setTasks] = useState([]);
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Technical Report</Typography>
              </Grid>
              {/* <Grid item>
                <Button variant="contained" endIcon={<AddIcon />}>
                  Add New Project
                </Button>
              </Grid> */}
            </Grid>
          </Paper>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container justifyContent="space-between" sx={{ gap: '1.5rem' }}>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TotalProjectCard />
            </Grid>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TotalTasksCard />
            </Grid>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TotalPerformance />
            </Grid>
          </Grid>
          <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid item sx={{ width: '100%' }}>
              <TotalProjectChart />
            </Grid>
          </Grid>
          <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid item sx={{ width: '100%' }}>
              {/* <TasksList /> */}
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
