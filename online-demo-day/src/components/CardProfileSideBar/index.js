import React from "react";
import {ProfileSideBarWrapper, ProfilePicture, PictureWrapper,
        LinksWrapper, LogoutWrapper, TextWrapper} from "./style"
import Button from "@material-ui/core/Button";
import NotificationIcon from '@material-ui/icons/AddAlarm';
import MensageIcon from '@material-ui/icons/MailOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountIcon from '@material-ui/icons/AccountBox';




class CardProfileSideBar extends React.Component{




render(){
    return(
        <ProfileSideBarWrapper>

      
                <PictureWrapper>
                    <ProfilePicture src={require("../../images/image.png")}/>
                    <p>Bill Gates</p>
                </PictureWrapper>
      

            
            <LinksWrapper>
                <TextWrapper>
                    <NotificationIcon/>
                    <p>Notificações</p>
                </TextWrapper>

                <TextWrapper>
                    <MensageIcon/>
                    <p>Mensagens</p>
                </TextWrapper>

                <TextWrapper>
                    <LikeIcon/>
                    <p>Favoritos</p>
                </TextWrapper>

                <TextWrapper>
                    <AccountIcon/>
                    <p>Perfil</p>
                </TextWrapper>
            </LinksWrapper>
            
            <LogoutWrapper>
                <Button variant="contained" color="primary">SAIR</Button>
            </LogoutWrapper>



        </ProfileSideBarWrapper>
    )
}




}

export default CardProfileSideBar;
