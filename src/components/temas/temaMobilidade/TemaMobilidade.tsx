import React, { useEffect, useState } from 'react'
import { CardHeader, CardContent, CardActions, Typography, Card, Avatar, IconButton, Box, Button, Menu, MenuItem } from '@material-ui/core'
import { busca } from '../../../services/Service';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import './TemaMobilidade.css'
import Postagem from '../../../models/Postagem';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function TemaMobilidade() {
    const [posts, setPosts] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);
    let history = useHistory();
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
            toast.info('Você precisa estar logado', {
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

    function selectTema() { }
    const listTema = posts.filter(function (ct, pos) {
        if (ct.tema?.id === 37) {
            return posts.indexOf(ct) === pos;
        }
    })

    listTema.reverse();
    return (
        <>
            {
                listTema.map(post => (
                    <Card className='card' >

                        <CardHeader
                            avatar={
                                <Avatar aria-label="">
                                    <img src={post.usuario?.fotoPerfil} alt="" className='fotoPerfil' />
                                </Avatar>
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

export default TemaMobilidade;