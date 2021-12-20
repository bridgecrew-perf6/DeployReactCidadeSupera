import { Box } from '@material-ui/core'
import React from 'react'
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import SideBar from '../../components/estaticos/sideBar/SideBar'
import TemaSaneamento from '../../components/temas/temaSaneamento/TemaSaneamento'

function Saneamento() {
    return (
        <>
                <SideBar />
                <Box className='dir-bar'>
                    <DirBar />
                </Box>
                <Box display='flex' className='center meio'>
                    < TemaSaneamento />
                </Box>
            </>
    )
}

export default Saneamento
