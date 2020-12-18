import React from 'react'

import {FooterStyled} from './FooterStyled'

export default function Footer() {
    // In the footer we just show copyright notice. Styles are imported from corresponding styled component.
    return (
        <FooterStyled>
            <p>Copyright &copy;2020. All Right Reserved</p>
        </FooterStyled>
    )
}

