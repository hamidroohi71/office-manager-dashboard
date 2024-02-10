import { Button, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
import TotalRevenueCard from './TotalRevenue';
import CashFlowCard from './CashFlowCard';
import DebtsCredits from './DebtsCredits';
import FinancialRecords from './FinancialRecords';

export default function Financial() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Technical Report</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" endIcon={<AddIcon />}>
                  Add New Record
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid container justifyContent="space-between" sx={{ gap: '1.5rem' }}>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <TotalRevenueCard />
            </Grid>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <CashFlowCard />
            </Grid>
            <Grid item sx={{ flex: '1 1 30%' }}>
              <DebtsCredits />
            </Grid>
          </Grid>
          <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid item sx={{ width: '100%' }}>
              <FinancialRecords />
            </Grid>
          </Grid>
          <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid item sx={{ width: '100%' }}></Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
