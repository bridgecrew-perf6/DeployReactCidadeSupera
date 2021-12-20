import React, { useEffect, useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import './Perfil.css'
import InfoIcon from '@mui/icons-material/Info';
import { Link, useHistory, useParams } from "react-router-dom";
import User from '../../models/User'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'
import {buscaId} from '../../services/Service'

function Perfil() {
    let history = useHistory();
    const [user, setUser] = useState<User[]>([]);
    const { idUser } = useParams<{ idUser: string }>();
    const token = useSelector<TokenState,TokenState["tokens"]>((state)=>state.tokens);
    const [value, setValue] = React.useState(0);

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

    
    
    async function findById(id: string){
        buscaId('/usuarios/${id}',setUser,{
            headers: {
                'Authorization': token
            }
        })
    }

    

    return (
        <div>
            <div className='back'>
                <Link to='/feed'>
                    <Button>
                        <img src="data:image/jpeg;base64,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" alt="voltar" className='imgvoltar' />
                    </Button>
                </Link>
            </div>
            <Box marginBottom='50' borderBottom='1px solid #DDD'>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Informações" icon={<InfoIcon />} />
                </BottomNavigation>
            </Box>
            <Grid className='lugar-card'>
                <Card>
                    <CardContent>
                        <Typography variant="h5" color="initial">Nome do Usuário</Typography>
                        <Typography variant="body2" component="p">
                            Sobre mim: 
                        </Typography>
                    </CardContent>
                </Card>

                <Card className='tam'>
                    <CardContent>
                        <Typography variant="h5" color="initial">Informações</Typography>
                        <Typography variant="body2" component="p">
                            Nome:
                        </Typography>
                        <Typography variant="body2" component="p">
                            Telefone:
                        </Typography>
                        <Typography variant="body2" component="p">
                            Email:
                        </Typography>
                        <Typography variant="body2" component="p" className='space'>
                            Data de Nascimento:
                        </Typography>
                        <Button variant='contained' className='botao1 space'>
                            Atualizar Informações
                        </Button>
                    </CardContent>
                </Card>
                <Card >
                    <CardContent>
                        <Typography variant="h5" color="initial">Menu</Typography>
                        <Typography variant="body2" component="p" >
                            Home
                        </Typography>
                        <Typography variant="body2" component="p" >
                            Logout
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default Perfil;
