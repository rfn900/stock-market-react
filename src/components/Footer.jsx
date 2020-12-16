import React from 'react'
import styled from 'styled-components'

const Fotnav = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  rgba(172, 160, 187, 0.8);
    box-shadow: -2px -6px 20px rgba(172, 160, 187, 0.2);
    
    p {
        margin: 0;
        color: rgb(247, 235, 236);
    }
`

export default function Footer() {
    
    return (
        <Fotnav>
            <p>Copyright &copy;2020. All Right Reserved</p>
        </Fotnav>
    )
}

