import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const TotalSalariesCard = ({ isLoading }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCardClick = () => {
    navigate('/dashboard/financial');
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      onClick={handleCardClick}
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.secondary[800],
                        mt: 1
                      }}
                    >
                      <img src={EarningIcon} alt="Notification" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        backgroundColor: theme.palette.secondary.dark,
                        color: theme.palette.secondary[200],
                        zIndex: 1
                      }}
                      aria-controls="menu-earning-card"
                      aria-haspopup="true"
                    >
                      <MoreHorizIcon fontSize="inherit" />
                    </Avatar>
                    <Menu
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      id="menu-earning-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Total</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Past Month</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Past 6 Months</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Past Year</Typography>
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mt: 3, zIndex: 100 }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 700 }}>Total Salaries:</Typography>
              </Grid>
              <Grid container direction="column" sx={{ mt: 3, gap: 2 }}>
                <Grid item sx={{ zIndex: 100 }}>
                  <Grid container justifyContent="space-between" sx={{ gap: '3rem' }}>
                    <Grid item>
                      <Typography>All paid salaries:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>300,000,000 T</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ zIndex: 100 }}>
                  <Grid container justifyContent="space-between" sx={{ gap: '3rem' }}>
                    <Grid item>
                      <Typography>Technical team salaries:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>250,000,000 T</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ zIndex: 100 }}>
                  <Grid container justifyContent="space-between" sx={{ gap: '3rem' }}>
                    <Grid item>
                      <Typography>Marketing team salaries:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>25,000,000 T</Typography>
                    </Grid>
                  </Grid>
                </Grid>{' '}
                <Grid item sx={{ zIndex: 100 }}>
                  <Grid container justifyContent="space-between" sx={{ gap: '3rem' }}>
                    <Grid item>
                      <Typography>Other team salaries:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>25,000,000 T</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalSalariesCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalSalariesCard;
