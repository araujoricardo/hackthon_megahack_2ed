import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const ContentWrapper = styled.div`
`

export const TitleScheduleEntreprenour = styled(Typography)`
    text-align: center;
    &&{
        margin-top: 10px;
    }
    
`

export const ScheduleEntreprenour = styled(Calendar)`
    &&{
        margin: 40px auto;
    }
`