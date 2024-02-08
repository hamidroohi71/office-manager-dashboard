import { Button, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
import ProductsList from './ProductsList';

export default function Projects() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>All Products</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" endIcon={<AddIcon />}>
                  Add New Product
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item>
        <ProductsList />
      </Grid>
    </Grid>
  );
}
