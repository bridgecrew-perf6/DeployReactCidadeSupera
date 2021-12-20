import Tema from './Tema';
import User from './User';

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    foto: string;
    localizacao: string;
    tema?: Tema| null;
    usuario?: User| null
}

export default Postagem;