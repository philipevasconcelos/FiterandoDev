import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import 'react-native-gesture-handler';

import iconChaveiro from '../assets/chaveiro.png';
import iconScoop from '../assets/scoop.jpg'

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;

const LojaHeader = styled.View`
flex-direction:row;
width:100%;
align-items:center;
height:50px;
justify-content:space-around;
background-color:#FF8C00;
`;
const NameItemText = styled.Text`
font-size:16px;
font-weight:bold;
color:#F0F8FF;
`;

const PontosItemText = styled.Text`
font-size:16px;
color:#F0F8FF;
`;
const PontosText = styled.Text`
font-size:16px;
`;


const ImageChave = styled.Image`
    margin-top:10px;
    width:150px;
    height:150px;
    border-radius:20px;
`;

const ItemText = styled.Text`
    align-items:center;
`;

const ScrollItem = styled.ScrollView`
    width:100%;
    margin-top:30px;
    margin-bottom:20px;
`;
const ButtonText = styled.Text`

`;

const DefaultButton = styled.TouchableHighlight`
    width:50%;
    background-color: #FF8C00;
    padding:10px 20px;
    border-radius:100px;
    justify-content:center;
    align-items:center;
`;


const TouchableOpacityToch = styled.View`
    width:100%;
    align-items:center;
`;

const Page = (props) => {

    const toExchange = () => {

        alert("PARABÉNS! Você trocou!");
    }

    return (
        <Container>
            <LojaHeader>
                <NameItemText>{props.name}</NameItemText>
                <PontosItemText>10</PontosItemText>
            </LojaHeader>
            <ScrollItem contentContainerStyle={{ alignItems: 'center' }}>
                <TouchableOpacityToch>
                    <ItemText>Chaveiro Fitness</ItemText>
                    <ImageChave source={iconChaveiro} />
                    <PontosText>10 Pontos</PontosText>
                    <DefaultButton width="100%" bgcolor="#FF8C00" underlayColor="#EE8133" onPress={toExchange}>
                        <ButtonText>Trocar</ButtonText>
                    </DefaultButton>

                    <ItemText>Garrafinha Fitness de Whay</ItemText>
                    <ImageChave source={iconScoop} />
                    <PontosText>15 Pontos</PontosText>
                    <DefaultButton width="100%" bgcolor="#FF8C00" underlayColor="#EE8133" onPress={toExchange}>
                        <ButtonText>Trocar</ButtonText>
                    </DefaultButton>
                </TouchableOpacityToch>
            </ScrollItem>

        </Container >
    );
}

Page.navigationOptions = ({ navigation }) => {

    return {
        title: 'Loja'
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        level: state.userReducer.level
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);