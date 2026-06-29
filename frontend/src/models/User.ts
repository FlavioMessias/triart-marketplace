import Produto from "./Produto";

interface User{
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    produtos?: Produto[]

}

export default User;