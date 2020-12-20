import styled from 'styled-components'

const SearchStyled = styled.div`
    display: flex;
    align-items: center;
    input {
        font-size: 0.8em;
        margin: 0;
        border-radius: 5px;
        border: 2px solid rgba(172, 160, 187, 0.8);
        &:focus {
            outline: none;
            border-color: rgb(247, 235, 236);
        }
    }
    button {
        background: none;
        border: none;
        &:focus {
            outline: none;
        }
    }
`
export {SearchStyled}