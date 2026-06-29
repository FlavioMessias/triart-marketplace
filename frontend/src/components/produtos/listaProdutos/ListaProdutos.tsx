import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import "./ListaProdutos.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
    objectFit: 'contain',
    width: 'auto',
  },
});

function ListaProdutos() {

    let navigate = useNavigate();
    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state)=> state.tokens
    ) 

    const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

useEffect(() => {
  if (token === '') {
    toast.error('Erro de conexão, realize o Login novamente', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined, 
    } ); 
    navigate('/login');
  }
}, [token]);

async function getProdutos() {
  await busca("/produtos", setProdutos, {
      headers: {'Authorization': token}
    })
}

useEffect(() => {
  getProdutos()
}, [produtos.length])

const classes = useStyles();


return (
  <div className="listaCards">
    {produtos.map((produtos) => (
      <Card key={produtos.id}>
          <CardActionArea>
          <Link to={`/produtos/${produtos.id}`} className='text-decorator-none' >
            <CardMedia
              className={classes.media}
              image={produtos.foto}
              title={produtos.nome}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className='titleDescription'>
                {produtos.nome}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="productDescription"
              >
                {produtos.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.categoria?.tipo}
              </Typography>
              <Typography variant="body2" component="p">
                Vendido por: {produtos.usuario?.nome}
              </Typography>

            </CardContent>
            </Link>
          </CardActionArea>
          <CardActions className='cardActions'>
            <Link to={`/produtos/${produtos.id}`} className='text-decorator-none'>
              <Button size="small" color="primary" variant="contained" fullWidth className='btn-lista'>
                Ver mais
              </Button>
            </Link>
          



              
            <Box display="flex" justifyContent="center" mt={1.5} mb={1.5}>

              <Link to={`/atualizarProduto/${produtos.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link> 
              
              <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
             
            </Box>

          </CardActions>
        </Card>
      
    ))}
  </div>
);
}

export default ListaProdutos