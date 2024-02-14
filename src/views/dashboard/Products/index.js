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
import ProductsList from './ProductsList';
import { useState } from 'react';
import { useEffect } from 'react';
import { createProduct, getProducts } from 'dataHandlers/productDataHandler';

export default function Projects() {
  const [addModal, setAddModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productComments, setProductComments] = useState('');

  useEffect(() => {
    getProducts().then((res) => {
      console.log(res);
      setProducts([...res]);
    });
  }, []);

  const handleAddProduct = () => {
    createProduct({
      productName: productName,
      productComments: productComments
    });
  };

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
                <Button
                  variant="contained"
                  endIcon={<AddIcon />}
                  onClick={() => {
                    setAddModal(true);
                  }}
                >
                  Add New Product
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      <Grid item>
        <ProductsList products={products} />
      </Grid>
      <Dialog
        open={addModal}
        onClose={() => {
          setAddModal(false);
        }}
      >
        <DialogTitle id="alert-dialog-title">Add New Product</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Please enter the Product features</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Product Name"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            value={productName}
          ></TextField>
          <TextField
            autoFocus
            required
            margin="dense"
            id="comment"
            name="comment"
            label="Product Comments"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setProductComments(e.target.value);
            }}
            value={productComments}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setAddModal(false);
              handleAddProduct();
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
