export type Action = {type: "ADD_TOKEN"|"ADD_ID"|"ADD_NOME"|"ADD_USUARIO"|"ADD_FOTOPERFIL"; payload: any};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

export const addId = (id: number): Action =>({
    type: "ADD_ID",
    payload: id,
});

export const addNome = (nome: string): Action =>({
    type: "ADD_NOME",
    payload: nome,
});

export const addUsuario = (usuario: string): Action =>({
    type: "ADD_USUARIO",
    payload: usuario,
});

export const addFotoPerfil = (fotoPerfil: string): Action =>({
    type: "ADD_FOTOPERFIL",
    payload: fotoPerfil,
});
