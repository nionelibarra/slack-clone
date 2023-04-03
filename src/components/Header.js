import {Avatar} from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
    return (
        <HeaderContainer> {/* Header left */}
            <HeaderLeft>
                <HeaderAvatar //TODO ADD ONLICK
                />
                <AccessTimeIcon/>
            </HeaderLeft>

            {/* Header Search */}
            {/* Header Right */} </HeaderContainer>

    )
}

export default Header

const HeaderContainer = styled.div ` 
display:flex;



`;

const HeaderLeft = styled.div`
flex:0.3;
display: flex;
align-items: center;
margin-left:20px;

> .MuiSvgIcon-root
{
    margin-left:auto;
    margin-right:30px;
}
`

const HeaderAvatar = styled(Avatar)`
`
