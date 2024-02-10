import { Button, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
import TasksList from '../Tasks/TasksList';
import TotalHRCard from './TotalHRCard';
import TotalSalariesCard from './TotalSalariesCard';
import HRPerformanceCard from './HRPerformanceCard';
import MembersList from './MembersList';

export default function HRPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Human Resource Report</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" endIcon={<AddIcon />}>
                  Add New Person
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container justifyContent="space-between" sx={{ gap: '1.5rem' }}>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TotalHRCard />
            </Grid>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TotalSalariesCard />
            </Grid>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <HRPerformanceCard />
            </Grid>
          </Grid>
          <Grid item>
            <Paper sx={{ my: 2, p: 2 }}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Top Member:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Amir Sharahi</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>95 Score</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid item sx={{ width: '100%' }}>
              <MembersList />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
