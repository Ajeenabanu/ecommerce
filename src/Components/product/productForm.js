import {React, useState, useEffect}  from 'react';
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
import axios from "axios";
import { useNavigate,useSearchParams } from "react-router-dom";


export default function ProductForm(props) {
//   const [showPassword, setShowPassword] = React.useState(false);
  const [data, setData] = useState({
    productName:'',
    price:'',
    id:'',
    productDiscription:'',
    image: null
  });
  const [product, setProduct] = useState('');
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();


  try {
    useEffect(() => {
      if (props.data.role === 'editProduct') {
        var id = searchParams.get("id");
      axios
        .post("http://localhost:5000/api/admin/getProductById",{id:id})
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }, []);
  } catch (error) {
    console.log(error);
  }

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handelChange = (e) => {
    e.preventDefault();
    
    setData(previousState => {
        return { ...previousState, [e.target.name]: e.target.value }
    });
   
  }
  const handleImageChange = (e) =>{
    setData({
        ...data,
        image: e.target.files[0],
      });
  }

  const handelSubmit = () =>{
    const fd = new FormData();
    for (const i in data) {
        fd.append(i, data[i]);
    }
    if (props.data.role === 'editProduct') {
      var id = searchParams.get("id");
      fd.append('_id', id);
      axios
    .post("http://localhost:5000/api/admin/productUpdation", fd)
    .then(function (response) {
      console.log(response);
      alert(`Product Updated`);
      navigate("/admin");
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });

    } else {
      axios
    .post("http://localhost:5000/api/admin/addProduct", fd)
    .then(function (response) {
      console.log(response);
      alert(`Product Added product ID = ${response.data}`);
      navigate("/admin");
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
    }
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 10 }}>
      <div>
        <TextField
          placeholder={product ? product.productName : "Product Display Name"}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          onChange={handelChange}
          name='productName'
        />
        <TextField
        disabled
          placeholder={product ? product._id : "Product ID"}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          onChange={handelChange}
          name='id'
        />
        
        <FormControl fullWidth sx={{ m: 1 ,marginTop: 5}}>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder={product ? product.discription : 'Product Discription'}
            name='productDiscription'
            onChange={handelChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1,width: '25ch' ,marginTop: 5}}>
          <OutlinedInput
          placeholder={product ? product.price : 'Price'}
            name='price'
            onChange={handelChange}
          />
        </FormControl>
      </div>
      <div>
              <OutlinedInput
                sx={{ marginTop: 3}}
                onChange={handleImageChange}
                inputProps={{ accept: "image/*" }}
                name="image"
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
                required
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                Upload Image...
              </label>
            </div>
      <FormControl fullWidth sx={{ m: 1,width: '10ch' ,marginTop: 10}}>
        <Button  variant="contained"  onClick={handelSubmit}>{props.data.role === 'editProduct' ? 'Save' : 'Add Product'}</Button>
      </FormControl>
    </Box>
  );
}