import React from 'react'
import { Box, Container } from '@material-ui/core';
import PostCard from '../../components/estaticos/postCard/PostCard';
import SideBar from '../../components/estaticos/sideBar/SideBar';
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import CadastroPost from '../../components/postagens/cadastropost/CadastroPost';
import './Feed.css'
import CadastroTema from '../../components/temas/cadastroTema/CadastroTema';


function Feed() {
    return (
        <>
            <SideBar />
            <Box className='dir-bar'>
                <DirBar />
            </Box>
            <Box display='flex' className='center'>
                <CadastroPost />
            </Box>
            <Box display='flex' className='center meio'>
                <PostCard />
            </Box>
        </>
    )
}

export default Feed;

