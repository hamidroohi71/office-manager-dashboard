import { Button, Grid, Paper, Typography } from '@mui/material';
import ProjectsList from './ProjectsList';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';

export default function Projects() {
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
                <Button variant="contained" endIcon={<AddIcon />}>
                  Add New Project
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item>
        <ProjectsList />
      </Grid>
    </Grid>
  );
}
