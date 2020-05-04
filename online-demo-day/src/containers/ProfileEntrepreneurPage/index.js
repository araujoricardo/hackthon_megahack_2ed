import React from 'react';
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import {ProfilePageWrapper, ProfileSideBar, ContentWrapper, PropertyWrapper, LogoWrapper, Logo, InputSearch, 
        ButtonSearchWrapper, SearchWrapper} from "./style";
import CardProfileSideBar from "../../components/CardProfileSideBar"
import CardEntrepreneurProperty from "../../components/CardEntrepreneurProperty"
import AboutUsProfileEntrepreneur from '../../components/AboutUsProfileEntrepreneur'
import ScheduleProfileEntrepreneur from '../../components/ScheduleProfileEntrepreneur'
import logoImg from "../../images/logo.png"
import SearchIcon from '@material-ui/icons/Search';


class ProfileEntrepreneurPage extends React.Component{

    state = {
        aboutUs: true,
        schedule: false,
    }

    onClickAboutUs = () => {
        this.setState({
            aboutUs: true,
            schedule: false
        })
    }

    onClickSchedule = () => {
        this.setState({
            aboutUs: false,
            schedule: true
        })
    }

    render(){

        const {goToFeedPage, goToEventPage} = this.props;
        let showAboutUs;
        let showSchedule;

        if(this.state.aboutUs){
            showAboutUs = <AboutUsProfileEntrepreneur></AboutUsProfileEntrepreneur>
        }else if (this.state.schedule){
            showSchedule = <ScheduleProfileEntrepreneur>Agenda</ScheduleProfileEntrepreneur>
        }

        return(
            <ProfilePageWrapper>

                <LogoWrapper>
                    <Logo src={logoImg} onClick={goToFeedPage}/>
                </LogoWrapper>
                
                <ProfileSideBar>
                    <CardProfileSideBar
                    events={goToEventPage}/>
                </ProfileSideBar>

                <SearchWrapper>
                    <InputSearch label="Pesquisar..."></InputSearch>
                    <ButtonSearchWrapper><SearchIcon></SearchIcon></ButtonSearchWrapper>
                </SearchWrapper>

                <ContentWrapper>
                    {showAboutUs}
                    {showSchedule}
                </ContentWrapper>            

                <PropertyWrapper>
                    <CardEntrepreneurProperty
                        onClickAboutUs={this.onClickAboutUs}
                        onClickSchedule={this.onClickSchedule}/>
                </PropertyWrapper>

            </ProfilePageWrapper>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        goToFeedPage: () => dispatch(push(routes.feedpage)),
        goToEventPage: () => dispatch(push(routes.livestream)),
    }
}

export default connect(null, mapDispatchToProps)(ProfileEntrepreneurPage)