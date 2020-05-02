import React, { Component } from "react";
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push, goBack } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {PaperWrapper, LoginWrapper, LoginPageWrapper, LogoWrapper, Logo, GoBackIcon} from './style'
import logoImg from "../../images/logo.png"


class LoginPage extends Component {

  render() {
    const { goToSignUpPage, goToHomePage, goToBackPage, goToFeedPage } = this.props;

    return (
      <LoginPageWrapper>

        <LogoWrapper>
          <Logo src={logoImg} onClick={goToHomePage}></Logo>
        </LogoWrapper>
        
        <PaperWrapper>
          <GoBackIcon onClick={goToBackPage} />
          <LoginWrapper>
            <TextField
              name="email"
              type="email"
              label="E-mail"
            />
            <TextField
              name="password"
              type="password"
              label="Password"
            />
            <Button onClick={goToFeedPage}>Login</Button>
            <Button onClick={goToSignUpPage}>CADASTRE-SE</Button>
          </LoginWrapper>
        </PaperWrapper>
      </LoginPageWrapper>
      
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    goToSignUpPage: () => dispatch(push(routes.signuppage)),
    goToHomePage: () => dispatch(push(routes.root)),
    goToBackPage: () => dispatch(goBack()),
    goToFeedPage: () => dispatch(push(routes.feedpage))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);


// perfilEmpreendedor={
//     //cadastro
//     informacoesCadastrais={
//       nome: "",
//       email: "",
//       empresa: "",
//       id: ""
//     },

//     //feed
//     conteudoFeed={
//       titulo: "",
//       objetivo: "",
//       video: "",
//       votos: "",
//       autor: ""
//     },

//     //conteudo do perfil
//     perfil={
//       equipe={
//         membros=["lorenzo", "profissão"]
//       },
//       produto={

//       },
//       proposta={

//       },
//       problema={
        
//       }
//     }

// }

// feed={
//   [
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},

//   ]
// }