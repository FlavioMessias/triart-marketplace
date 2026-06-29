import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, FormControlLabel, Grid, RadioGroup, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import './CadastroUsuario.css';
import { toast } from "react-toastify";

interface State {
  password: string;
  showPassword: boolean;
}


function Cadastrar() {

  let navigate = useNavigate()
  const [confirmarSenha, setConfirmarSenha] = useState<String>('')
  const [userCadastrar, setUserCadastrar] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value)
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserCadastrar({
      ...userCadastrar,
      [event.target.name]: event.target.value
    })
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === userCadastrar.senha && userCadastrar.senha.length >= 8) {
      try {
        await cadastroUsuario('usuarios/cadastrar', userCadastrar, setUserResult);
        toast.success('Usuário criado com sucesso!!! Efetue o Login.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined, 
        } ); 
      } catch (error) {
        toast.error('Falha ao cadastrar o usuário. Por favor, confira os campos', {
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
    } else {
      toast.error('Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos.', {
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
  }

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate('/login')
    }
  }, [userResult])
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <>
      <Grid container direction="row" alignItems="center" justifyContent="center" className='fundo'>
        <Grid item xs={6} className='imagemLogo'>

        </Grid>

        <Grid item xs={6} alignItems="center" justifyContent="center" >
          <Box padding={10}>
            <form onSubmit={conectar} className='fundo22' >
              <Typography variant="h2" className="escolha">Cadastre-se</Typography>
              <TextField  className="escolha"
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userCadastrar.nome}
                id="nome"
                name="nome"
                label='Digite seu Nome'
                variant="outlined"
                fullWidth
                margin="normal" />
              <TextField 
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                value={userCadastrar.usuario}
                id="usuario"
                name="usuario"
                label="Usuário"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <FormControl fullWidth margin='normal' variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" className="escolha">Senha</InputLabel>
                <OutlinedInput
                  type={values.showPassword ? 'text' : 'password'}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  value={userCadastrar.senha}
                  id="senha"
                  name="senha"
                  label="Senha"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth margin='normal' variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password" className="escolha">Confirmar Senha</InputLabel>
                <OutlinedInput 
                  type={values.showPassword ? 'text' : 'password'}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                  value={confirmarSenha}
                  id="confirmarSenha"
                  name="confirmarSenha"
                  label="Confirmar a Senha"
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box className="botao" alignItems='center' justifyContent='space-evenly'>
                <Link to='/login' className='text-decorator-none'>
                  <Button variant="outlined" className='btn'>
                    Cancelar
                  </Button>
                </Link>
                <Button  variant="outlined" className='btn' type="submit">
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Cadastrar;