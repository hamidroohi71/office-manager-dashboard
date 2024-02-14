import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Box, width } from '@mui/system';
import ClientsList from './ClientsList';
import { useEffect } from 'react';
import { createClient, getClients } from 'dataHandlers/clientDataHandlers';
import { useState } from 'react';

export default function Marketing() {
  const [clients, setClients] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [clientName, setClientName] = useState('');
  const [isReal, setIsReal] = useState(true);
  useEffect(() => {
    getClients().then((res) => {
      console.log(res);
      setClients([...res]);
    });
  }, []);

  const handleAddClient = () => {
    createClient({
      clientName: clientName,
      isReal: isReal ? true : false
    });
  };

  console.log(clientName, isReal);

  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ mb: 2, p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>All Client</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setAddModal(true);
                  }}
                >
                  Add New CLient
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item>
        <ClientsList clients={clients} />
      </Grid>
      <Dialog
        open={addModal}
        onClose={() => {
          setAddModal(false);
        }}
      >
        <DialogTitle id="alert-dialog-title">Add New Client</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Please enter the client features</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Client Name"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setClientName(e.target.value);
            }}
            value={clientName}
          ></TextField>
          <InputLabel sx={{ fontSize: '0.7rem', fontWeight: 300, mt: 1.75 }} id="demo-simple-select-label">
            Type
          </InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isReal}
            label="Type"
            variant="standard"
            onChange={(e) => {
              setIsReal(e.target.value);
            }}
          >
            <MenuItem value={true}>Natural Person</MenuItem>
            <MenuItem value={false}>Legal Person</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setAddModal(false);
              handleAddClient();
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
    </Grid>
  );
}
