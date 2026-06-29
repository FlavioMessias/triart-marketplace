import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Home from './../../../paginas/home/Home';

export default function Open() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon/>
      </Button>
      <Menu className='stile'
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <Link to='/Home' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>

        <Link to='/produtos' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Produtos</MenuItem>
        </Link>

        <Link to='/categorias' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Categorias</MenuItem>
        </Link>

        <Link to='/formularioCategoria' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Cadastrar Categorias</MenuItem>
        </Link>

        <Link to='/atualizarproduto/' className='text-decorator-none'>
        <MenuItem onClick={handleClose}>Cadastrar produto</MenuItem>
        </Link>

        

      </Menu>
    </div>
  );
}