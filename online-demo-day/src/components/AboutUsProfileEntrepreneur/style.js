import styled from 'styled-components';
import Typography from '@material-ui/core/Typography'

export const ContentWrapper = styled.div`
`

export const TitleAboutUsEntreprenour = styled(Typography)`
    text-align: center;
    &&{
        margin-top: 30px;
    }
    
`

export const ContentAboutUsEntreprenour = styled(Typography)`
    text-align: justify;
    &&{
        margin: 30px;
    }
    
`

export const Image = styled.img`
    display: block;
    margin: auto;
    max-width: 400px;
    max-height: 400px;
`