import { Box, Typography, Button, Card, CardHeader, Avatar, IconButton, Menu, MenuItem, CardContent, CardActions } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import './ListaPostagemUser.css'

function ListaPostagemUser() {

    let history = useHistory();
    const [posts, setPosts] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);
    const id = useSelector<TokenState, TokenState["ids"]>((state) => state.ids);
    const [toogle, setToogle] = useState(true)
    const [cor, setCor] = useState('#000000')

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        setCor((state) => toogle ? '#000000' : '#FF0064');
    }, [toogle]);

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    var botoes: string;
    const listaPost = posts.filter(function (ele, pos) {
        if (ele.usuario?.id === id) {
            return posts.indexOf(ele) === pos;
        }
    })

    listaPost.reverse();

    return (
        <>
            {
                listaPost.map(post => (
                    <Card className='cardLista' >

                        <CardHeader
                            avatar={
                                <Avatar aria-label="">
                                    <img src={post.usuario?.fotoPerfil} alt="" className='fotoPerfil' />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="Opções">
                                    <Button
                                        id="basic-button"
                                        aria-controls="basic-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <Link to={`/formularioPostagem/${post.id}`} className="menu-publi">Atualizar</Link></MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <Link to={`/deletarPostagem/${post.id}`} className="menu-publi">Deletar</Link></MenuItem>
                                    </Menu>

                                </IconButton>
                            }
                            title={post.usuario?.nome}
                            subheader={post.localizacao}

                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {post.titulo}
                            </Typography>
                            <Box paddingTop={1}>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                            </Box>
                            <Box paddingTop={1}>
                                <img src={post.foto} alt="" className='size' />
                            </Box>
                            <Typography variant="body2" component="p">
                                {post.tema?.categoria}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label='Like' onClick={e =>
                                setToogle(state => !state)} style={{ color: cor }} className='gostei'>
                                <FavoriteIcon />
                                <Typography style={{ cursor: 'pointer' }}
                                    color='textSecondary'
                                    variant='body2'
                                >{'10'}</Typography>
                            </IconButton>
                            <IconButton aria-label='Comentario'>
                                <MessageIcon />
                                <Typography style={{ cursor: 'pointer' }}
                                    color='textSecondary'
                                    variant='body2'
                                >{'10'}</Typography>
                            </IconButton>
                            <IconButton>
                                <BookmarkIcon />
                            </IconButton>
                        </CardActions>
                    </Card >

                ))
            }
        </>
    )
}

export default ListaPostagemUser;