import React from 'react'
import { ContentWrapper, TitleAboutUsEntreprenour, ContentAboutUsEntreprenour, Image } from './style'

function AboutUsProfileEntrepreneur(props) {
    return (
        <ContentWrapper>
            <TitleAboutUsEntreprenour variant="h3">Sobre nós</TitleAboutUsEntreprenour>
            <ContentAboutUsEntreprenour variant="body">
                Meu nome é Paulo Nogueira, tenho 37 anos e sou Advogado.
                <br />
                <Image src="https://live.staticflickr.com/6178/6140989632_1c8066563d_b.jpg" alt="Paulo" />
                <br />
                Sou o fundador da Health soluções em agendamentos, idealizei este projeto após inúmeras tentativas de agendar consultas através do telefone,
                mas que demandavam muito tempo para completar todo o atendimento e agendamento e com minha rotina agitada nunca era possível.
                <br />
                <br />
                Pensando em você que assim como eu não tem a disponibilidade de passar 15 a 20 minutos em uma ligação queremos criar esta plataforma facilitadora,
                que também guia ao médico correto.
                <br />
                <br />
                Contamos com o investimento para custear o desenvolvimento, marketing e lançamento da plataforma.</ContentAboutUsEntreprenour>
        </ContentWrapper>
    )
};

export default AboutUsProfileEntrepreneur;