import { Paper, Button, ListSubheader,ListItem, ListItemText } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import React from 'react'
import './DirBar.css'


function DirBar() {
    return (
        <Box display='flex'>
        <Paper className='dir'>
            <Button variant='outlined' className='btn'>Amigos</Button>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg" alt="" className='amigos' />
                Roberto Leandro
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg" alt="" className='amigos' />
                Amanda Almeida
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291b6b9-bpthumb.jpg" alt="" className='amigos' />
                Ricard Riquelme
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" alt="" className='amigos' />
                Josivaldo Patrik
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
                <img src="	https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg" alt="" className='amigos' />
                Isabella Fontes
            </Box>
        </Paper>
        </Box>
    )
}

export default DirBar