import React, { ChangeEvent, useEffect, useState } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { Grid, Box } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin'
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/Actions';
import { toast } from 'react-toastify';
import './Login.css'

interface State {
  password: string;
  showPassword: boolean;
}

function Login() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [token, setToken] = useState('')



  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login('usuarios/logar', userLogin, setRespUserLogin);

      toast.success('Usuário Logado com Sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error('Erro ao Logar!!! Verifique os dados e tente novamente.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }


  useEffect(() => {
    if(respUserLogin.token !==''){
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home');
    }
  }, [respUserLogin])

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token))
      navigate('/home');
    }
  }, [token]);




  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

 
 


  return (

    <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo'>
      <Grid alignItems='center' xs={6} justifyContent='center'>
        <Box paddingX={6} >
          <form onSubmit={conectar}  className='fundo2'>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }} className="escolha">Login</Typography>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              value={userLogin.usuario}
              id="usuario"
              name="usuario"
              label="Usuário"
              variant="outlined"
              className='inputLogin'
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin='normal' variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" className="escolha">Senha</InputLabel>
              <OutlinedInput
                id="senha"
                name='senha'
                type={values.showPassword ? 'text' : 'password'}
                value={userLogin.senha}
                className='inputLogin'
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box marginTop={2}>
              <Button type='submit' variant="outlined" className='btn'>Entrar</Button>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'>Não possui conta?</Typography>
            </Box>

            <Link to='/cadastrar'>
              <Typography variant='subtitle1' gutterBottom align='center' className='textos1 cadastro'>Cadastre-se</Typography>
            </Link>

          </Box>
        </Box>   
      </Grid>
      <Grid xs={6} className='imagemLogo' display={{xs:'none',md:'block'}}>
       
        </Grid >
    </Grid>




  );
}

export default Login;