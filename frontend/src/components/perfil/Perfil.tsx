import { Avatar, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import User from '../../models/User';
import { buscaId } from '../../services/Service';
import { TokenState } from '../../store/tokens/TokensReducer';
import './Perfil.css'

function Perfil() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  })

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: {Authorization: token}
    })
  }

  useEffect(() => {
    getUserById(+userId)
  }, [])

  return (
    <>
      <Container>
        <div className='perfilContainer'>
          <Grid xs={3} alignItems='center' justifyContent='center' className='perfil'>
            <img src={usuario.foto} alt="" className='imgPerfil' />
            <Typography variant='h5' align='center' >{usuario.nome}</Typography>
          </Grid>
          <Grid xs={9} justifyContent='center' className='perfil'>
            <Typography variant='h4' align='center'>Produtos de {usuario.nome}</Typography>
            Você tem um total de: {usuario.produtos?.length} produtos cadastrados

            <div className="postUser">
            {usuario.produtos?.map((produtos) => (
              <div className="postPerfil">
                <h3>{produtos.nome}</h3>
                <p>{produtos.descricao}</p>
                <strong>{produtos.categoria?.tipo}</strong> 
              </div>
            ))}
            </div>


          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Perfil;