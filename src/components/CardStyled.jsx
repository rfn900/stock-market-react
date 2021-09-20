import styled from 'styled-components'


const CardStyled = styled.div`
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 6px 10px rgba(37, 59, 128, 0.1);
    height: 10em;
    justify-content: center;
    &:hover {
        box-shadow: 2px 6px 20px rgba(37, 59, 128, 0.1);
    }
    p{
        margin: 0;
        font-size: 1.2em;
        font-weight: 600;
        color: #rgb(37,59,128);
    }
`

export {CardStyled}
