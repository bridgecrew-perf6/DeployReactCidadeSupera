import React from 'react'
import './Equipe.css';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Equipe() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} justifyContent="center" >
                    <Box display='center' paddingTop={5} >
                        <h3 className='textoEquipe' >Nosso Time:</ h3>
                    </Box>
                </Grid>

                <Grid item xs={4} >
                    <Grid justifyContent="center" >
                        <Box paddingTop={2} paddingLeft={10} paddingBottom={5} >
                            <img src="https://avatars.githubusercontent.com/u/76879747?s=400&u=55376ef8af47bb09a94b07b3e8560ee3f8fdda05&v=4" id='Davi' alt="" className="img-container" />

                            <Box maxWidth='250px' paddingTop={2}  >
                                <h2 className='txtSobre' >Davi Ferreira</h2>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid justifyContent="center" >
                        <Box paddingTop={2} paddingLeft={10} paddingBottom={5} >
                            <img src="https://avatars.githubusercontent.com/u/87380408?v=4" id='Ju' alt="" className="img-container mexer" />
                            <Box maxWidth='250px' paddingTop={2} >
                                <h2 className='txtSobre'>Juliana Macedo </h2 >
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid justifyContent="center">
                        <Box paddingTop={2} paddingLeft={10} paddingBottom={5}>
                            <img src="https://avatars.githubusercontent.com/u/91294318?v=4" id='Lucas' alt="" className="img-container" />

                            <Box maxWidth='250px' paddingTop={2} >
                                <h2 className='txtSobre'>Lucas Figueiredo</h2>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' marginTop={2} marginBottom={10} >
                        <Link to='/sobreNos' className="text-decorator-none">
                            <Button variant="outlined" className="botaoHome titulo transitionSizeHome">
                                Sobre Nós
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </ >
    )
}

export default Equipe;
