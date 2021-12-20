import { Box } from '@material-ui/core'
import React from 'react'
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import SideBar from '../../components/estaticos/sideBar/SideBar'
import TemaSeguranca from '../../components/temas/temaSeguranca/TemaSeguranca'

function Seguranca() {
    return (
        <>
                <SideBar />
                <Box className='dir-bar'>
                    <DirBar />
                </Box>
                <Box display='flex' className='center meio'>
                    < TemaSeguranca />
                </Box>
            </>
    )
}

export default Seguranca
