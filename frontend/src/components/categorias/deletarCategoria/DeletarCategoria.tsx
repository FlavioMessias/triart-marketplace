import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function DeletarCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
   const token = useSelector<TokenState, TokenState['tokens']>(
    (state)=> state.tokens
  ) 
    const [categoria, setCategoria] = useState<Categoria>()
  
    useEffect(() => {
        if (token === '') {
            alert("Erro de conexão, realize o Login novamente")
            navigate("/login")
        }
    }, [token])
  
    useEffect(() => {
      if(id !== undefined) {
        findById(id)
      }
    },[id])
  
    async function findById(id: string){
      await buscaId(`/categorias/${id}`, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
    }
  
    async function sim() {
      await deleteId(`/categorias/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('Tema apagado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined, 
      } ); 
      navigate('/categorias')
    }
  
    function nao(){
      navigate('/categorias')
    }


  return (
    <Box m={2}>
        <Card variant='outlined'>
          <CardContent>
            <Box justifyContent='center'>
              <Typography color='textSecondary' gutterBottom>Deseja deletar a categoria: </Typography>
              <Typography color='textSecondary'>{categoria?.tipo} </Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Box display='flex' justifyContent='start' ml={1} mb={2}>
              <Box mx={2}>
                <Button onClick={sim} variant='contained' size='large' color='primary' className='marginLeft'>Sim</Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant='contained' size='large' color='secondary'>Não</Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    
  )
}

export default DeletarCategoria