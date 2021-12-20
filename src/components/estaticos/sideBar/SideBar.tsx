import { Paper, Button, ListSubheader, ListItem, ListItemText, Typography, Box } from '@material-ui/core';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SideBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function SideBar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens);
    let history = useHistory();
    const dispatch = useDispatch();

    function logout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push('/login');
    }

    return (
        <>
            <Box display='flex'>
                <Paper className='barra'>
                    <Box paddingLeft={5}>
                    <img src="https://i.imgur.com/9OXbFlu.png" alt="logo Cidade Supera" className='logoSideBar' />
                    </Box>
                    
                    <Box mx={1} className='cursor' paddingTop={2} >
                        <Link to='/feed' className="text-decorator-none">
                            <Typography variant="h6" color="inherit" className='margin'>
                                Feed
                            </Typography>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/meusPosts' className="text-decorator-none" >
                            <Typography variant="h6" color="inherit" className='margin'>
                                Meus Posts
                            </Typography>
                        </Link>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit" className='margin'> Temas </Typography>
                        <Box paddingLeft={3} >
                            <Link to='/temaSaude' className="text-decorator-none">
                                <Typography variant="h6" color="inherit" className='marginTema'>
                                    Saúde
                                </Typography>
                            </Link>
                            <Link to='/temaEducacao' className="text-decorator-none">
                                <Typography variant="h6" color="inherit" className='marginTema'>
                                    Educação
                                </Typography>
                            </Link>
                            <Link to='/temaSaneamento' className="text-decorator-none">
                                <Typography variant="h6" color="inherit" className='marginTema'>
                                    Saneamento Básico
                                </Typography>
                            </Link>
                            <Link to='/temaSeguranca' className="text-decorator-none ">
                                <Typography variant="h6" color="inherit" className='marginTema'>
                                    Segurança
                                </Typography>
                            </Link>
                            <Link to='/temaMobilidade' className="text-decorator-none">
                                <Typography variant="h6" color="inherit" className='marginTema'>
                                    Mobilidade
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                    <Box mx={1} className='cursor margin'>
                        <Typography variant="h6" color="inherit" className='margin' onClick={() => logout()}>
                            Logout
                        </Typography>
                    </Box>

                </Paper>
            </Box>
        </>
    )
}

export default SideBar;