import { Box } from '@material-ui/core'
import React from 'react'
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import SideBar from '../../components/estaticos/sideBar/SideBar'
import TemaMobilidade from '../../components/temas/temaMobilidade/TemaMobilidade'

function Mobilidade() {
    return (
        <>
                <SideBar />
                <Box className='dir-bar'>
                    <DirBar />
                </Box>
                <Box display='flex' className='center meio'>
                    < TemaMobilidade />
                </Box>
            </>
    )
}

export default Mobilidade
