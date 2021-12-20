import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';
import { Http2ServerRequest } from 'http2';

function CadastroUsuario() {
    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            fotoPerfil: '',
            senha: '',
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            fotoPerfil: '',
            senha: '',
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }

    return (
        <Grid container className="background1" >
            <Grid item xs={12} >
                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" style={{ opacity: 1 }}>
                    <Box className="cardCadastro" marginTop={12} paddingLeft={4} paddingRight={4} justifyContent="center" alignItems="center">
                        <Box marginY={2}>
                            <h1 className="textoCadastro">
                                Cadastro
                            </ h1>
                            <form onSubmit={onSubmit}>
                                <Box >
                                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='standard' name='nome' margin='normal' fullWidth />
                                </Box>
                                <Box  >
                                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='standard' name='usuario' margin='normal' fullWidth />
                                </Box >
                                <Box  >
                                    <TextField value={user.fotoPerfil} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='fotoPerfil' label='url: Foto Perfil' variant='standard' name='fotoPerfil' margin='normal' fullWidth />
                                </Box >
                                <Box >
                                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='standard' name='senha' margin='normal' type='password' fullWidth />
                                </Box >
                                <Box  >
                                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='standard' name='confirmarSenha' margin='normal' type='password' fullWidth />
                                </Box >
                                <Box display='flex' justifyContent='center' marginTop={2} textAlign='center'>
                                    <Link to='/login' className='text-decorator-none'>
                                        <Button variant='contained' className='btnCancelar'>
                                            Cancelar
                                        </Button>
                                    </Link>
                                    <Button type='submit' variant='contained' className='botao1'>
                                        Cadastrar
                                    </Button>
                                </Box>
                            </form>
                            <Box display='flex' justifyContent='center' marginTop={2}>
                                <Box marginRight={1}>
                                    <Typography variant='subtitle1' gutterBottom align='center'>Já possui uma conta?</Typography>
                                </Box>
                                <Link to='/login' className='text-decorator-none'>
                                    <Typography variant="subtitle1" gutterBottom align='center' className='txt' >Logue-se</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid >
    )
}

export default CadastroUsuario;
