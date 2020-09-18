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
    background-color:rgba(0, 0, 0, 0.9);
`;

const WelcomeImage = styled.View`
    flex:1;
    justify-content:center;
`;
const WelcomeLogo = styled.Image`
    width:300px;
    height:300px;
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
                    <DefaultButton width="100%" bgcolor="#EE8133" underlayColor="#EE8133" onPress={start}>
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