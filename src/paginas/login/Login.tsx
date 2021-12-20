import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from "../../models/UserLogin";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/tokens/actions";
import { toast } from 'react-toastify';
import './Login.css';

function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''

        }
    )
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (respUserLogin.token !== '') {
            dispatch(addToken(respUserLogin.token));
            dispatch(addId(respUserLogin.id));
            history.push('/feed')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)

            toast.success('Usuário logado com sucesso!', {
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
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
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

    return (
        <Grid container className="background1" >
            <Grid item xs={12} >
                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" style={{ opacity: 1 }}>
                    <Box className="cardLogin" marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box marginY={2}>
                            <h1 className="textoLogin" >
                                Login
                            </h1>
                            <form onSubmit={onSubmit}>
                                <Box marginY={4}>
                                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" fullWidth />
                                </Box>
                                <Box marginY={4} >
                                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" type='password' fullWidth />
                                </Box >
                                <Box marginLeft={11}>
                                    <Button type="submit" variant="contained" color="secondary" className="botao1 btn-grad">
                                        Login
                                    </Button>
                                </Box>
                            </form>
                            <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                                </Box>
                                <Link to='/cadastroUsuario' className='text-decorator-none'>
                                    <Typography variant="subtitle1" gutterBottom align='center' className='txt' >Cadastre-se</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;
