import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import './Navbar.css';
import { Home } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function EsconderBar(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
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

    var navbarComponent;

    if ( token == "" ) {
        navbarComponent = <AppBar position="static" id="navegacao">
            <Toolbar variant="dense" >
                <Box mx={1}>
                    <img src="https://i.imgur.com/x1m8CnY.png" alt="logo" className="logo" />
                </Box>
                <Box style={{ flexGrow: 1 }} >
                    <Link to='/home' className="text-decorator-none">
                        <h2>
                            Cidade Supera
                        </ h2>
                    </Link>
                </Box>
                <Box display="flex">
                    <Box mx={1} className='cursor'>
                        <Link to='/home' className="text-decorator-none">
                            <h3>
                                Home
                            </h3>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/sobre' className="text-decorator-none">
                            <h3>
                                Sobre
                            </h3>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/equipe' className="text-decorator-none">
                            <h3>
                                Equipe
                            </ h3>
                        </Link>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Link to='/login' className='text-decorator-none'>
                            <h3>
                                Entrar
                            </h3>
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }
    
    return (
        <>
            {navbarComponent}
        </>

    )
}

export default Navbar;
