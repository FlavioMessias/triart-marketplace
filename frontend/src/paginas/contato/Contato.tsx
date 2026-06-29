import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Contato.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function Contato() {
  const classes = useStyles();
  const [brend, setBrenda] = React.useState(false);
  const [flavi, setFlavio] = React.useState(false);
  const [luc, setLucas] = React.useState(false);
  const [leon, setLeo] = React.useState(false);
  const [mate, setMateus] = React.useState(false);
  const [mir, setMi] = React.useState(false);
  const [sand, setSan] = React.useState(false);


  const flavio = () => {
    setFlavio(!flavi);
  };

  const brenda = () => {
    setBrenda(!brend);
  }

  const lucas = () => {
    setLucas(!luc);
  }

  const leo = () => {
    setLeo(!leon);
  }

  const mi = () => {
    setMi(!mir);
  }

  const mat = () => {
    setMateus(!mate);
  }

  const san = () => {
    setSan(!sand);
  }

  return (
    <>
        <Grid container direction='row' justifyContent='center'>
      <Grid alignItems='center' justifyContent='center'>

    <Box component="span" m={5} >

 <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }

        title="Brenda Chagas"
        subheader="Desenvolvedora FullStack Java"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Brenda"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Apresentação Breve
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: brend,
          })}
          onClick={brenda}
          aria-expanded={brend}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={brend} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
         Apresentação expandida
          </Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography>
          Apresentação expandida
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Box>

    <Box component="span" m={5} >

<Card className={classes.root}>
     <CardHeader
       avatar={
         <Avatar aria-label="recipe" className={classes.avatar}>
           MM
         </Avatar>
       }

       title="Mirelle Mota"
       subheader="Desenvolvedora FullStack Java"
     />
     <CardMedia
       className={classes.media}
       image="/static/images/cards/paella.jpg"
       title="Mirelle"
     />
     <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">
       Apresentação
       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         <LinkedInIcon />
       </IconButton>
       <IconButton aria-label="share">
         <GitHubIcon />
       </IconButton>
       <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: mir,
         })}
         onClick={mi}
         aria-expanded={mir}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>
     <Collapse in={mir} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>Method:</Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography>
         Apresentação expandida
         </Typography>
       </CardContent>
     </Collapse>
   </Card>
   </Box>

   

    <Box component="span" m={5} >

<Card className={classes.root}>
     <CardHeader
       avatar={
         <Avatar aria-label="recipe" className={classes.avatar}>
           S
         </Avatar>
       }

       title="Sandy Martins"
       subheader="Desenvolvedora FullStack Java"
     />
     <CardMedia
       className={classes.media}
       image="/static/images/cards/paella.jpg"
       title="Sandy"
     />
     <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">
       Apresentação
       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         < LinkedInIcon/>
       </IconButton>
       <IconButton aria-label="share">
         <GitHubIcon />
       </IconButton>
       <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: sand,
         })}
         onClick={san}
         aria-expanded={sand}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>
     <Collapse in={sand} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>Method:</Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography>
         Apresentação expandida
         </Typography>
       </CardContent>
     </Collapse>
   </Card>
   </Box>


</Grid>
</Grid>

   <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid alignItems='center' xs={12} justifyContent='center'>

      <Box component="span" m={5}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            F
          </Avatar>
        }
        title="Flavio Messias"
        subheader="Desenvolvedor FullStack Java"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Flavio"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Apresentação
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: flavi,
          })}
          onClick={flavio}
          aria-expanded={flavi}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={flavi} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography>
          Apresentação expandida
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    </Box>

   <Box component="span" m={5} >

<Card className={classes.root}>
     <CardHeader
       avatar={
         <Avatar aria-label="recipe" className={classes.avatar}>
           L
         </Avatar>
       }

       title="Leonardo Gonçalves"
       subheader="Desenvolvedor FullStack Java"
     />
     <CardMedia
       className={classes.media}
       image="/static/images/cards/paella.jpg"
       title="Leo"
     />
     <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">
       Apresentação
       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         <LinkedInIcon />
       </IconButton>
       <IconButton aria-label="share">
         <GitHubIcon />
       </IconButton>
       <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: leon,
         })}
         onClick={leo}
         aria-expanded={leon}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>
     <Collapse in={leon} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>Method:</Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography>
         Apresentação expandida
         </Typography>
       </CardContent>
     </Collapse>
   </Card>
   </Box>

   <Box component="span" m={5}>

   <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            L
          </Avatar>
        }

        title="Lucas Pereira"
        subheader="Desenvolvedor FullStack Java"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Lucas"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Apresentação
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: luc,
          })}
          onClick={lucas}
          aria-expanded={luc}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={luc} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography paragraph>
          Apresentação expandida
          </Typography>
          <Typography>
          Apresentação expandida
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Box>

    <Box component="span" m={5} >

<Card className={classes.root}>
     <CardHeader
       avatar={
         <Avatar aria-label="recipe" className={classes.avatar}>
           MT
         </Avatar>
       }

       title="Mateus de Queiroz"
       subheader="Desenvolvedor FullStack Java"
     />
     <CardMedia
       className={classes.media}
       image="/static/images/cards/paella.jpg"
       title="Mateus"
     />
     <CardContent>
       <Typography variant="body2" color="textSecondary" component="p">
       Apresentação
       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         <LinkedInIcon />
       </IconButton>
       <IconButton aria-label="share">
         <GitHubIcon />
       </IconButton>
       <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: mate,
         })}
         onClick={mat}
         aria-expanded={mate}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>
     <Collapse in={mate} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>Method:</Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography paragraph>
         Apresentação expandida
         </Typography>
         <Typography>
          Apresentação expandida
         </Typography>
       </CardContent>
     </Collapse>
   </Card>
   </Box>


    
    </Grid>
    </Grid>




    </>
  );
}