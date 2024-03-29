import React from 'react'
import styled from 'styled-components'

//Create an arrow up to be used as a Scroll up button

const ScrollUpDiv = styled.div`
    width: 3.5em;
    height: 3.5em;
    position: fixed;
    bottom: 5em;
    left: 2em;
    background-color:#179bd7;
    border-radius: 15px;
    display: flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    opacity: 0.8;
    span{
        
        &::before, &::after{
            content:'';
            position: absolute;
            background: #fafafa;
            height: 6px;
            width: 50%;
            top: 45%;
        }
        &::before{
            transform: translateX(-77%) rotateZ(-45deg);
            transform-origin: left left; 
        }
        &::after{
            transform: translateX(-18%) rotateZ(45deg);
            transform-origin: right right; 
        }
    }
`

export default function ScrollUp(props) {
    return (
        // We need to pass the onClick function as props so we can use here
        <ScrollUpDiv onClick={props.onClick}>
            <span></span>
        </ScrollUpDiv>
    )
}
