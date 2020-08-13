import React from "react";
import NotificationIcon from '@material-ui/icons/AddAlarm';
import MensageIcon from '@material-ui/icons/MailOutlineOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import EventIcon from '@material-ui/icons/Event';
import AccountIcon from '@material-ui/icons/AccountBox';
import {MiniCardWrapper, PictureWrapper, ProfilePicture} from "./style"

export default function MiniCardProfileSideBar(props) {
    return(
        <MiniCardWrapper>
            
            <PictureWrapper>
                <ProfilePicture src={require("../../images/image.png")}/>
            </PictureWrapper>

            <NotificationIcon/>
            <MensageIcon/>
            <LikeIcon/>
            <EventIcon/>
            <AccountIcon/>

        </MiniCardWrapper>
    )
}