import { Button, Container, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


function CadastroCategoria() {

let navigate = useNavigate();
const token = useSelector<TokenState, TokenState['tokens']>(
  (state)=> state.tokens
) 
const {id} = useParams<{id: string}>();
const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: ''
})

    useEffect(() => {
        if (token === ''){
          alert('Erro de conexão, realize o Login novamente')
          navigate('/login')
        }
      }, [token])

      async function categoriaById(id: string) {
        await buscaId(`/categorias/${id}`, setCategoria, {
          headers: { Authorization: token },
        });
      }
    
      useEffect(() => {
        if (id !== undefined) {
          categoriaById(id);
        }
      }, [id]);
    
      function updatedCategoria(event: ChangeEvent<HTMLInputElement>) {
        setCategoria({
          ...categoria,
          [event.target.name]: event.target.value,
        });
      }
    
      async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
    
        console.log("Categoria" + JSON.stringify(categoria))
    
        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizado com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined, 
            } ); 
            
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined, 
            } ); 
        }
        back()

    }

    function back() {
        navigate('/categorias')
    }

    return (
        <>
        <Container maxWidth="sm">
        <form onSubmit={cadastrar}>
          <Typography variant="h3" component="h1">
            Nova Categoria
          </Typography>

          <TextField
            label="Nome da categoria"
            value={categoria.tipo}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedCategoria(event)
            }
            id="Tipo"
            name="tipo"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Box display="flex" justifyContent="space-around">
            <Link to="/categorias" className='tdn'>
              <Button  variant="contained" color="secondary">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </Box>
        </form>
      </Container>
      </>
    );
}

    export default CadastroCategoria