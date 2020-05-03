import React from 'react';
import {PaperWrapper, SignUpWrapper, SignUpPageWrapper, LogoWrapper, Logo, GoBackIcon,
        NameInput, SignUpH1, LastNameInput, SignUpInput, CheckboxWrapper, BotaoConfirm, 
        BotaoWrapper, PaperSignUp, TopBottonWrapper} from './style';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push, goBack } from "connected-react-router";
import logoImg from "../../images/logo.png"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Header from "../Header";

class SignUpPage extends React.Component{
    render(){
        const { goToBackPage, goToHomePage } = this.props;

        return (
          <SignUpPageWrapper>
    
            <LogoWrapper>
              <Logo src={logoImg} onClick={goToHomePage}></Logo>
            </LogoWrapper>

            <TopBottonWrapper>
              {/* <Header/> */}
            </TopBottonWrapper>
            
            <PaperWrapper>
              <PaperSignUp>
                <GoBackIcon onClick={goToBackPage} />
                <SignUpH1>Criar uma conta</SignUpH1>
                <SignUpWrapper>
                  <NameInput
                    name="primeiro_nome"
                    type="text"
                    label="Primeiro Nome"
                    variant="filled"
                  />
                  <LastNameInput
                    name="sobrenome"
                    type="text"
                    label="Sobrenome"
                    variant="filled"
                  />
                  <SignUpInput
                    name="email"
                    type="email"
                    label="Email"
                    variant="filled"
                  />
                  <SignUpInput
                    name="password"
                    type="password"
                    label="Senha"
                    variant="filled"
                  />
                  <SignUpInput
                    name="confirm_password"
                    type="password"
                    label="Confirme a senha"
                    variant="filled"
                  />
                  <CheckboxWrapper>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Eu li e aceito os termos do serviço & política de uso."
                  />
                  </CheckboxWrapper>
                  <BotaoWrapper>
                    <BotaoConfirm variant="contained" color="primary">CRIAR</BotaoConfirm>
                  </BotaoWrapper>
                </SignUpWrapper>
              </PaperSignUp>
            </PaperWrapper>
          </SignUpPageWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      goToHomePage: () => dispatch(push(routes.root)),
      goToBackPage: () => dispatch(goBack())
    }
}
export default connect(null, mapDispatchToProps)(SignUpPage);