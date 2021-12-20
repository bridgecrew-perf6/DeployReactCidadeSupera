import { Box } from '@material-ui/core'
import React from 'react'
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import PostCard from '../../components/estaticos/postCard/PostCard'
import SideBar from '../../components/estaticos/sideBar/SideBar'
import ListaPostagemUser from '../../components/postagens/listaPostagemUser/ListaPostagemUser'

function MeusPosts() {
    return (
            <>
                <SideBar />
                <Box className='dir-bar'>
                    <DirBar />
                </Box>
                <Box display='flex' className='center meio'>
                    <ListaPostagemUser />
                </Box>
            </>
    )
}

export default MeusPosts
