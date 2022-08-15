import styled from 'styled-components';

const BackdropStyled = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000e1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .content {
        width: clamp(50vw, 650px, 90vw);
        height: min(50vh, 500px);
        background-color: wheat;
        border-radius: 1rem;
    }
`;

export default BackdropStyled;