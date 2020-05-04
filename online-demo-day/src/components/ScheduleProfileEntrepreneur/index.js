import React from 'react'
import {ContentWrapper, TitleScheduleEntreprenour, ScheduleEntreprenour} from './style'

class ScheduleProfileEntrepreneur extends React.Component {

    state = {
        date: new Date(),
      }

    onChange = date => this.setState({ date })
    
    render(){
        return(
            <ContentWrapper>
                <TitleScheduleEntreprenour variant="h3">Agenda</TitleScheduleEntreprenour>
                <ScheduleEntreprenour
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </ContentWrapper>
        )
    }
};

export default ScheduleProfileEntrepreneur;