import React from 'react'
import styled from 'styled-components'

const ScrollUpDiv = styled.div`
    width: 3.5em;
    height: 3.5em;
    position: fixed;
    bottom: 5em;
    left: 2em;
    background-color:#AC9FBB;
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
            background: #76717a;
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
        <ScrollUpDiv onClick={props.onClick}>
            <span></span>
        </ScrollUpDiv>
    )
}
