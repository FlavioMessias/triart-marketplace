import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AccountCircle } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const pages = [{'title':'Home',
                'link': 'home'},
                {
                  'title':'Produtos',
                  'link':'produtos'
                },{
                  'title':'Sobre nós',
                  'link':'sobre'
                }, {
                  'title':'Contato',
                  'link':'contato'
                }];


// const pages = ["Home", "Produtos", "Sobre nos", "Contato"]; 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);



function Navbar() {

  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  let navigate = useNavigate();
   const token = useSelector<TokenState, TokenState["tokens"]>(
   (state) => state.tokens
 );

 const dispatch = useDispatch();
 function goLogout() {
   dispatch(addToken(""));
   toast.info("Logout efetuado com sucesso!!", {
     position: "top-right",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: false,
     theme: "colored",
     progress: undefined,
   });
   navigate("/login");
 }

;
 const [auth, setAuth] = React.useState(true);
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const open = Boolean(anchorEl);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setAuth(event.target.checked);
 };

 const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };


  return (
    <AppBar position="sticky">
      <Box style={{backgroundColor:'#c19258f2', padding: '.25rem 1.725rem'}} >
        <Toolbar disableGutters>
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" }
            }}
          >
            <img
              src="https://i.imgur.com/UDBIW93.png"
              alt="Logo tribo artesão"
              width="25%"
              className="imgLogo"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography id="decorButton"  textAlign="center" >{page.title}
                  </Typography>
                </MenuItem>
                

              ))}
            </Menu>
          </Box>
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" }
            }}
          >

            <img
              src="https://i.imgur.com/UDBIW93.png"
              alt="Logo tribo artesão"
              width="40%"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={`./${page.link}`} style={{textDecoration:'none', color:'white'}}>
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            <IconButton>
                <FavoriteOutlinedIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
             aria-label="account of current user"
             aria-controls="menu-appbar"
             aria-haspopup="true"
             onClick={handleMenu}
             color="inherit" >

             <AccountCircle />
         </IconButton>{" "}
         <Menu
             id="menu-appbar"
             anchorEl={anchorEl}
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
             }}
             keepMounted
             transformOrigin={{
               vertical: "top",
               horizontal: "right",
             }}
             open={open}
             onClose={handleClose}
           >
            <Link to = "/perfil" className="tdn">
             <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
             </Link>
             <MenuItem onClick={goLogout}>Logout</MenuItem>
             <Link to="/atualizarProduto" className="tdn">
             <MenuItem>Cadastrar Produtos</MenuItem>
             </Link>
             
           </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default Navbar;

