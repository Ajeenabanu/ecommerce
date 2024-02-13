import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function ProductTile(props) {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

 
  try {
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/home")
        .then((res) => {
          setProducts(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const handleAdtocart=(id)=>{
    var products = [];
    var storedProducts = JSON.parse(localStorage.getItem("products"));
    for(var i in storedProducts) {
      products.push(storedProducts[i]);
    }
    if (!products.includes(id)) {
      products.push(id);
    } else {
      alert('product is already in cart')
    }

    localStorage.setItem("products", JSON.stringify(products));
    props.data.setproductCount(products.length);
    console.log(id);
  }
  const handleEdit=(id)=>{
    navigate("/editproduct?id="+id);
  }  
  const handleDelete=(id)=>{ 
    axios
    .post("http://localhost:5000/api/admin/deleteProductById", {id:id})
    .then(function (response) {
      console.log(response);
      alert(`Product deleted`);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
  }
  return (
    <div>
      <Grid container spacing={3}>
        {products
          ? products.map((product) => {
              return (
                <Grid xs={4}>
                <Card sx={{ maxWidth: 345, margin: 5, padding: 3 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.productName}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="span">
                        Price: {product.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.discription}
                      </Typography>
                    </CardContent>
                    {props.data.role === "home" ? (
                      <Box>
                        <Button onClick={(e)=>handleAdtocart(product._id)} variant="contained">add To Cart</Button>
                      </Box>
                    ) : (
                      <Box>
                        <Button onClick={(e)=>handleEdit(product._id)} variant="contained" sx={{ margin: 2 }} >
                          edit
                        </Button>
                        <Button onClick={(e)=>handleDelete(product._id)} variant="contained"  data-productId={product._id}>delete</Button>
                      </Box>
                    )}
                  </CardActionArea>
                </Card>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </div>
  );
}
