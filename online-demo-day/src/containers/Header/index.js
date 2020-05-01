import React from 'react';
import {HeaderWrapper} from './style'

class Header extends React.Component{





    render(){
        return(
            <HeaderWrapper>
                <h3>Header</h3>
                <button>Contato</button>
                <button>Sobre nós</button>
                <button>Planos</button>
                <button>Parceiros</button>
                <button>Como funciona?</button>
            </HeaderWrapper>
        )
    }



}


export default Header;