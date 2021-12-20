import React from "react";
import './Sobre.css';
import { Grid, Box, Typography } from "@material-ui/core";

function Sobre() {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {/* Caixa de missão*/}
                <Grid item xs={4} justifyContent="center">
                    <Box
                        justifyContent="center"
                        alignItems="center"
                        marginTop={20}
                        marginLeft={10}
                        className="corpo"
                        paddingBottom={2}
                        paddingTop={2}
                    >
                        <Box justifyContent="center" alignItems="center" marginLeft={15}>
                            <img src="https://i.imgur.com/vnSINbG.png" className="missao" />
                        </Box>
                        <Box justifyContent="center" alignItems="center">
                            <Typography
                                variant="h5"
                                gutterBottom
                                align="center"
                                className="texto1"
                            >
                                Conectar pessoas interessadas a discutir sobre problemas sociais
                                e aproximá-las com instituições públicas e privadas interessadas
                                em engajar. E juntos encontraremos uma solução através do nosso
                                website
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* Caixa de visão*/}
                <Grid item xs={4} justifyContent="center">
                    <Box
                        justifyContent="center"
                        alignItems="center"
                        marginTop={20}
                        marginLeft={5}
                        marginRight={5}
                        className="corpo1"
                        paddingBottom={2}
                        paddingTop={2}
                    >
                        <Box justifyContent="center" alignItems="center" marginLeft={18}>
                            <img src="https://i.imgur.com/LZJnJiJ.png" className="missao" />
                        </Box>
                        <Box justifyContent="center" alignItems="center">
                            <p className="texto4">Colaboração</p>
                            <p className="texto4">Resiliência</p>
                            <p className="texto4">Agilidade</p>
                            <p className="texto4">Ética</p>
                            <p className="texto4">Conhecimento</p>
                            
                        </Box>
                        
                    </Box>
                </Grid>
                {/* Caixa de valores*/}

                <Grid item xs={4} justifyContent="center">
                    <Box
                        justifyContent="center"
                        alignItems="center"
                        marginTop={20}
                        marginRight={10}
                        className="corpo2"
                        paddingBottom={2}
                        paddingTop={2}
                    >
                        <Box justifyContent="center" alignItems="center" marginLeft={15}>
                            <img src="https://i.imgur.com/iO2tcCD.png" className="missao" />
                        </Box>
                        <Box justifyContent="center" alignItems="center">
                            <Typography
                                variant="h5"
                                gutterBottom
                                align="center"
                                className="texto1"
                            >
                                Aspiramos nos tornar uma plataforma de auxílio as entidades publicas e privadas interessadas a soluncionar as demandas sociais de forma mais eficiente e responsivas
                            </Typography>
                        </Box>
                        
                    </Box>
                </Grid>

                {/* Nesta parte inicia as informações complementares*/}

                <Grid item xs={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginX="auto"
                        marginTop={20}
                        marginLeft={20}
                    >
                        <Typography
                            variant="h4"
                            color="initial"
                            align="center"
                            className="texto1"
                        >
                            Cidade Supera
                            <Typography
                                variant="h5"
                                color="initial"
                                align="center"
                                className="texto1"
                            >
                                É o seu espaço de reclamação e sugestão de melhoria para a sua
                                cidade. Sua manifestação poderá causar impacto na sua
                                comunidade, superando os problemas e atingindo melhorias sociais
                                estruturais e sociais
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box marginTop={20}>
                        <img
                            src="https://i.imgur.com/7SMqaea.png"
                            alt=""
                            width="500px"
                            height="500px"
                        />
                    </Box>
                </Grid>

                {/* Nesta parte inicia a segunda box relacionada ao segundo comentário*/}

                <Grid item xs={6}>
                    <Box marginLeft={20}>
                        <img
                            src="https://i.imgur.com/0t3rg8z.png"
                            alt=""
                            width="500px"
                            height="500px"
                        />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginX="auto"
                        marginTop={25}
                        marginRight={20}
                        paddingBottom={10}
                    >
                        <Typography variant="h5" align="center" className="texto1">
                            Publique os problemas enfrentados infraestrutura, segurança,
                            mobilidade, educação, saúde e saneamento básico que se encontram
                            em seu bairro. Discuta e compartilhe suas experiências não apenas
                            com moradores da redondeza, mas também com empresas e instituições
                            públicas interessadas em solucionar os problemas Pessoas formam
                            comunidades, e com a participação de órgãos públicos e empresas
                            poderemos solucionar JUNTOS os problemas, fazendo da nossa cidade
                            um lugar melhor!
                        </Typography>
                    </Box>
                </Grid>

                {/* Aqui é a parte final da Grid da container*/}
            </Grid>
        </>
    );
}

export default Sobre;
