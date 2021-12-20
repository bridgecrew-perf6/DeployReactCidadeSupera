import { Box } from '@material-ui/core'
import React from 'react'
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import SideBar from '../../components/estaticos/sideBar/SideBar'
import TemaEducacao from '../../components/temas/temaEducacao/TemaEducação'

function Educacao() {
    return (
        <>
                <SideBar />
                <Box className='dir-bar'>
                    <DirBar />
                </Box>
                <Box display='flex' className='center meio'>
                    < TemaEducacao />
                </Box>
            </>
    )
}

export default Educacao;
