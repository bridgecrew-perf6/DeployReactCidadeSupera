import React from 'react'
import { Grid, Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} justifyContent="center" >
                    <Box display='center' paddingTop={2} >
                        <h3 className='textoEquipe' >Nosso Time:</ h3>
                    </Box>
                </Grid>

                <Grid item xs={4} >
                    <Grid justifyContent="center" >
                        <Box paddingTop={2} paddingLeft={10} >
                            <img src="https://avatars.githubusercontent.com/u/76879747?s=400&u=55376ef8af47bb09a94b07b3e8560ee3f8fdda05&v=4" id='Davi' alt="" className="img-container" />

                            <Box maxWidth='250px' paddingTop={2}  >
                                <h2 className='txtSobre' >Davi Ferreira</h2>
                                <Typography variant="body2" color="initial" className='textoTime' >
                                    Desde de a infância apaixonado por tecnologia e em foco programação, pois criar algo assim é incrível então com muita curiosidade fui buscando saber cada vez mais sobre essa área onde me descobri e percebi que não só criar mas analisar e principalmente resolver problemas são coisas que mais amo.
                                </Typography>
                                <Box className='redeSocial' paddingBottom={10} paddingTop={2} >
                                    <a href="https://github.com/DaviFerreira98" target="_blank">
                                        <GitHubIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                    <a href="" target="_blank">
                                        <InstagramIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/davi-ferreira-da-silva-8561b6125/" target="_blank">
                                        <LinkedInIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid justifyContent="center">
                        <Box paddingTop={2} paddingLeft={10}>
                            <img src="https://avatars.githubusercontent.com/u/87380408?v=4" id='Ju' alt="" className="img-container" />

                            <Box maxWidth='250px' paddingTop={2} >
                                <h2 className='txtSobre'>Juliana Macedo </h2 >
                                <Typography variant="body2" color="initial" className='textoTime' >
                                Desde criança sou impulsionada pelos estudos, por novas descobertas, e, sonho em contribuir para o desenvolvimento da sociedade. Decidi fazer uma transição de carreira quando me encontrei na programação, onde poderia estar sempre me desafiando e conectando minha carreira ao meu propósito.
                                </Typography>
                                <Box className='redeSocial' paddingBottom={10} paddingTop={2} >
                                    <a href="https://github.com/julianacsmacedo" target="_blank">
                                        <GitHubIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                    <a href="" target="_blank">
                                        <InstagramIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/juliana-cs-macedo/" target="_blank">
                                        <LinkedInIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid justifyContent="center">
                        <Box paddingTop={2} paddingLeft={10}>
                            <img src="https://avatars.githubusercontent.com/u/91294318?v=4" id='Lucas' alt="" className="img-container" />

                            <Box maxWidth='250px' paddingTop={2} >
                                <h2 className='txtSobre'>Lucas Figueiredo</h2>
                                <Typography variant="body2" color="initial" className='textoTime' >
                                Adoro assistir animes, jogar vídeo-games, escrever historias e ler sobre Não-ficção, Ficção e Filosofia nas horas vagas. Desisti da carreira de secretariado porque notei que aprender a codar era algo natural e apaixonante, hoje apaixonado por tecnologia só penso aprimorar minhas habilidades.
                                </Typography>
                                <Box className='redeSocial' paddingBottom={10} paddingTop={2} >
                                    <a href="https://github.com/DomLucaz" target="_blank">
                                        <GitHubIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                    <a href="" target="_blank">
                                        <InstagramIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/domlucaz/" target="_blank">
                                        <LinkedInIcon style={{ fontSize: 40, color: "black" }} className='transitionSize redeSocial' />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </ >
    )
}

export default SobreNos;
