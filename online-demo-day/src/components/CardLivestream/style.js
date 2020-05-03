import styled from 'styled-components'

export const LiveStreamWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-rows: 70% 1fr;
`

export const LiveStreamContentWrapper = styled.div`
    grid-row: 1;
    width: 100%;
    height: 100%;
`

export const LiveStreamContent = styled.iframe`
    margin-top: 20px;
    width: 100%;
    height: 90%;
`

export const LiveStreamDescriptionWrapper = styled.div`
    grid-row: 2;
    width: 100%;
`