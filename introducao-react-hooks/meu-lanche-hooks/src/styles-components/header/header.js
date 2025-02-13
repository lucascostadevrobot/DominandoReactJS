import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto; /* A primeira coluna ocupa o espaço restante, a segunda é do tamanho da imagem */
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;

`;


export const Cabecalho = styled.header`
    width: auto;
    height: auto;
    background-color: rgb(20, 20, 20); /* Corrigido o erro de 'rgbrgb' para 'rgb' */
    font-size: 10px;
    color: rgb(255, 255, 255);
    display: block;
    padding: 10px;
    order: 1; /* Faz com que o cabecalho fique antes da foto na ordem */
`;

export const FotoPerfil = styled.img`
    object-fit: cover;
    order: 2; /* Faz com que a foto vá para a segunda posição */
    justify-self: end; /* Alinha a foto à direita */
`;

export const Button = styled.button`
    background-color: rgb(255, 255, 255);
    color: rgb(29, 36, 73);
    width: 200px;
    height: 40px;
    border-radius: 10px;
`;
