import {React, useState}  from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function ProductForm() {
//   const [showPassword, setShowPassword] = React.useState(false);
  const [data, setData] = useState({
    name:'',
    price:'',
    id:'',
    discription:''
  });

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handelChange = (e) => {
    e.preventDefault();
    
    setData(previousState => {
        console.log(e.target.name)
        return { ...previousState, [e.target.name]: e.target.value }
    });
   
  }

  const handelSubmit = () =>{
    console.log(data)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 10 }}>
      <div>
        <TextField
          placeholder="Product Display Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          onChange={handelChange}
          name='name'
        />
        <TextField
          placeholder="Product ID"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          onChange={handelChange}
          name='id'
        />
        
        <FormControl fullWidth sx={{ m: 1 ,marginTop: 5}}>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder='Product Discription'
            name='discription'
            onChange={handelChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1,width: '25ch' ,marginTop: 5}}>
          <OutlinedInput
          placeholder='Price'
            name='price'
            onChange={handelChange}
          />
        </FormControl>
      </div>
      <FormControl fullWidth sx={{ m: 1,width: '25ch' ,marginTop: 5}}>
        <Button  variant="contained"  onClick={handelSubmit}>Add Product</Button>
      </FormControl>
    </Box>
  );
}