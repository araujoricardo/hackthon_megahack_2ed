import React from "react";
import {ProfileSideBarWrapper, ProfilePicture, PictureWrapper,
        LinksWrapper, LogoutWrapper, TextWrapper, LogoutButton,
        TextButton} from "./style"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import NotificationIcon from '@material-ui/icons/AddAlarm';
import MensageIcon from '@material-ui/icons/MailOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import EventIcon from '@material-ui/icons/Event';
import AccountIcon from '@material-ui/icons/AccountBox';

class CardProfileSideBar extends React.Component{

    render(){

        const {goToHomePage} = this.props;
        return(
            <ProfileSideBarWrapper>        
                <PictureWrapper>
                    <ProfilePicture src={require("../../images/image.png")}/>
                    <p>Bill Gates</p>
                </PictureWrapper>
                <LinksWrapper>
                    <TextWrapper>
                        <NotificationIcon/>
                        <TextButton>Notificações</TextButton>
                    </TextWrapper>

                    <TextWrapper>
                        <MensageIcon/>
                        <TextButton>Mensagens</TextButton>
                    </TextWrapper>

                    <TextWrapper>
                        <LikeIcon/>
                        <TextButton>Favoritos</TextButton>
                    </TextWrapper>

                    <TextWrapper>
                        <EventIcon/>
                        <TextButton>Eventos</TextButton>
                    </TextWrapper>

                    <TextWrapper>
                        <AccountIcon/>
                        <TextButton>Perfil</TextButton>
                    </TextWrapper>
                </LinksWrapper>
                <LogoutWrapper>
                    <LogoutButton variant="contained" color="primary" onClick={goToHomePage}>SAIR</LogoutButton>
                </LogoutWrapper>
            </ProfileSideBarWrapper>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        goToHomePage: () => dispatch(push(routes.root)),
    }
}

export default connect(null, mapDispatchToProps) (CardProfileSideBar);
