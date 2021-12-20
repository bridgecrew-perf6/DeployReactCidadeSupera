import { Box } from '@material-ui/core'
import React from 'react'
import DirBar from '../../components/estaticos/lateralDir/DirBar'
import SideBar from '../../components/estaticos/sideBar/SideBar'
import TemaSaude from '../../components/temas/temaSaude/TemaSaude'

function Saude() {
    return (
        <>
                <SideBar />
                <Box className='dir-bar'>
                    <DirBar />
                </Box>
                <Box display='flex' className='center meio'>
                    < TemaSaude />
                </Box>
            </>
    )
}

export default Saude
