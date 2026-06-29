import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Container } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import './CadastroProdutos.css';
import User from '../../../models/User';
//cadastro de produtos
function CadastroProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state)=> state.tokens
    ) 
    const userId = useSelector<TokenState, TokenState['id']>(
      (state) => state.id
    )

    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      tipo: '',
    });

    const [usuario, setUsuario] = useState<User>( {
      id: +userId,
      nome: '',
      usuario: '',
      senha: '',
      foto: ''
    })
  
    const [produtos, setProdutos] = useState<Produto>({
      id: 0,
      nome: '',
      descricao: '',
      foto: '',
      quantidade: 0,
      preco: 0,
      categoria: null,
      usuario: null
    });

  
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
  
    useEffect(() => {
      setProdutos({
        ...produtos,
        categoria: categoria,
        usuario: usuario
      });
    }, [categoria]);

    useEffect(() => {
      getCategoria()
      if (id !== undefined) {
          findByIdProdutos(id)
      }
  }, [id])
  
    async function findByIdProdutos(id: string) {
      await buscaId(`produtos/${id}`, setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      getCategoria();
      if (id !== undefined) {
        findByIdProdutos(id);
      }
    }, [id]);
  
    async function getCategoria() {
      await busca('/categorias', setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    function updatedProduto(event: ChangeEvent<HTMLInputElement>) {
      setProdutos({
        ...produtos,
        [event.target.name]: event.target.value,
        categoria: categoria,
      });
    }
  
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
  
      if (id !== undefined) {
        put(`/produtos`, produtos, setProdutos, {
            headers: {
                'Authorization': token
            }
        })

        toast.success('Produto atualizado com sucesso', {
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
        post(`/produtos`, produtos, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
        toast.success('Produto cadastrado com sucesso', {
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
  navigate('/produtos')
}

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
          <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de Produtos</Typography>
          <TextField value={produtos.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
          <TextField value={produtos.descricao} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="descricao" label="descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
          <TextField value={produtos.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="foto" label="foto" name="foto" variant="outlined" margin="normal" fullWidth />
          <TextField value={produtos.quantidade} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="quantidade" label="quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
          <TextField value={produtos.preco} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedProduto(event)} id="preco" label="preço" name="preco" variant="outlined" margin="normal" fullWidth />
         

          <FormControl >
              <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
              <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  onChange={(event) => buscaId(`/categorias/${event.target.value}`, setCategoria, {
                      headers: {
                          'Authorization': token
                      }
                  })}>
                  {
                      categorias.map(categorias => (
                          <MenuItem value={categorias.id}>{categorias.tipo}</MenuItem>
                      ))
                  }
              </Select>
              <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
              <Button type="submit" variant="contained" color="primary">
                  Finalizar
              </Button>
          </FormControl>
      </form>
  </Container>
)
}

export default CadastroProdutos