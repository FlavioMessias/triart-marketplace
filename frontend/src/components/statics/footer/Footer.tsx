import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from '../../../store/tokens/TokensReducer';
import "./Footer.css"; 

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    var footerComponent;
  
    if(token == "") {
      footerComponent = <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      
      
    >
      <Grid alignItems="center" item xs={12}>
        <Box className="box1">
          <Box 
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography 
              variant="h5"
              align="center"
              gutterBottom
              className="textos"
              
              
            
            >
              SIGA-NOS NAS REDES SOCIAIS!{" "}
            </Typography>
          </Box>
          <Box className="iconsRedes">
            <a
              href="https://github.com/https-github-com-triboartesao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="redes github"/>
            </a>
            <a
              href="https://www.instagram.com/triart.gen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="redes instagram"  />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box>
            <Typography 
              variant="subtitle2"
              align="center"
              gutterBottom
              className="cr"
           
            >
              © 2022 Copyright:
            </Typography>
          </Box>
          <Box>
              <Typography
                variant="subtitle2"
                gutterBottom
                align="center"
                className="cr"
                
              >
                Generation Brasil
              </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    }
  
    return (
      <>
       {footerComponent} 
      </>
    );
  }
  
  export default Footer;
  