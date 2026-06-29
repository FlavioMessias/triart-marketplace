import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';

function ListaCategoria() {

    
    let navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state)=> state.tokens
      ) 
    
    useEffect(() => {
        if (token === ''){
            alert('Erro de conexão, realize o Login novamente')
            navigate('/login')
        }
    }, [token])
    
    async function getCategoria(){
        await busca('/categorias', setCategoria, {
            headers: {'Authorization': token}
        })
    }
    
    useEffect(() => {
        getCategoria()
    }, [categoria.length])

  return (
    <Grid item xs={6}>
    {categoria.map(categorias => (
    <Box m={2} key={categorias.id}>
        <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Tema
                </Typography>

                <Typography variant="h5" component="h2">
                    {categorias.tipo}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
            <Link to={`/formularioCategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                </Button>
                    </Box>
            </Link>
            <Link to={`/deletarCategoria/${categorias.id}`} className="text-decorator-none">
                <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                        deletar
                    </Button>
                </Box>
            </Link>
                </Box>
            </CardActions>
        </Card>
    </Box>
    ))}
</Grid>
);
}


export default ListaCategoria