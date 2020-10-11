import React from 'react';
import styled from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';

const Container = styled.ImageBackground`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#000;
`;

const SafeArea = styled.SafeAreaView`
    flex:1;
    width:100%;
    align-items:center;
    background-color:rgba(28, 28, 28, 0.9);
`;

const WelcomeName = styled.Text`
    font-size:35px;
    font-weight: bold;
    color:#FFF;
    margin-left:10%;
    height:60px;
`;

const WelcomeText = styled.Text`
    font-size:26px;
    font-weight: bold;
    color:#FFF;
    margin-left:6%;
    align-items:center;
    height:70px;
`;

const WelcomeInfo = styled.Text`
    font-size:19px;
    font-weight: bold;
    color:#FFF;
    width:100%;
    margin-left:10%;
`;

const WelcomeInfoCont = styled.Text`
    font-size:19px;
    font-weight: bold;
    color:#FFF;
    width:100%;
    height:70px;
    margin-left:14%;
`;

const BeginConfigArea = styled.View`
    flex:1;
    justify-content:center;
    width:80%;
`;
const ButtonText = styled.Text`
    color:#FFF;
`;

const Page = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return (
        <Container source={require('../assets/fitness.jpg')}>
            <SafeArea>
                <BeginConfigArea>
                    <WelcomeName>▶Fiterando</WelcomeName>
                    <WelcomeText>Bem-vindo ao time!</WelcomeText>
                    <WelcomeInfo>Viver uma vida saudável</WelcomeInfo>
                    <WelcomeInfoCont>nunca foi tão divertido.</WelcomeInfoCont>
                    <DefaultButton width="100%" bgcolor="#FF8C00" underlayColor="#EE8133" onPress={start}>
                        <ButtonText>PLAY</ButtonText>
                    </DefaultButton>
                </BeginConfigArea>
            </SafeArea>
        </Container>
    );
}

Page.navigationOptions = {
    headerShow: null
}
export default Page;