import React from 'react';

import {
    Container,
    ContainerTop,
    ContainerBottom,
    BoxButton,
    Button,
    ButtonText,
    Header
  } from "./styles";

import AtracoesFavoritas from "../../assets/atracoes-favoritas.svg";
import Configuracoes from "../../assets/configuracoes.svg";
import Interrrogacao from "../../assets/interrogacao.svg";
import LocaisVisitados from "../../assets/locais-visitados.svg";
import MinhasRotas from "../../assets/minhas-rotas.svg";
import Notificacoes from "../../assets/notificacoes.svg";
import NumeroNotificacoes from "../../assets/numero-notificacoes.svg";
import Recompensas from "../../assets/recompensas.svg";
import Saida from "../../assets/saida.svg";
import Voltar from "../../assets/voltar.svg";
import MeuPerfil from "../../assets/meu-perfil.svg";
import User from "../../assets/user.svg";

const Perfil = ({navigation}) => {
    return (
        <Container>
            <ContainerTop>
                    <Header>
                    <Voltar onPress={() => navigation.goBack()}/>
                    
                    <Saida/>
                    
                    </Header>
                    <User style={{marginLeft: "auto", marginRight: "auto", width: 300, height: 300 }}/>
            </ContainerTop>

            <ContainerBottom>
                <BoxButton>                    
                    <MeuPerfil/>
                    <Button>
                        <ButtonText>Meu Perfil</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <Notificacoes/>
                    <Button>
                        <ButtonText>Notificações</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <AtracoesFavoritas/>
                    <Button>
                        <ButtonText>Atrações Favoritas</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <MinhasRotas/>
                    <Button>
                        <ButtonText>Minhas Rotas</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <LocaisVisitados/>
                    <Button>
                        <ButtonText>Locais Visitados</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <Recompensas/>
                    <Button>
                        <ButtonText>Recompensas</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <Configuracoes/>
                    <Button>
                        <ButtonText>Configurações</ButtonText>
                    </Button>
                </BoxButton>
            </ContainerBottom>
        </Container>
    )
}

export default Perfil;