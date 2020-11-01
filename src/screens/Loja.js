import React, { useState } from 'react';
import styled from 'styled-components/native';
<<<<<<< HEAD
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
=======
import { connect } from 'react-redux';
import 'react-native-gesture-handler';
import DefaultButton from '../components/DefaultButton';

import iconChaveiro from '../assets/chaveiro.png';

>>>>>>> 0f4faed47b0d682d17f825b84f3e6d1656449c24

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;
<<<<<<< HEAD
const Label = styled.Text`
    font-size:20px;
    font-weight:bold;
    margin-top:20px;
    margin-bottom:10px;
`;

const RankingHeader = styled.View`
    flex-direction:row;
    width:90%;
    margin:10px;
    align-items:center;
    height:70px;
    justify-content:space-between;
`;
const NameItemText = styled.Text`
    font-size:16px;

`;
const NivelItemText = styled.Text`
    font-size:16px;

`;
const PontosItemText = styled.Text`
    font-size:16px;

=======

const LojaHeader = styled.View`
flex - direction: row;
width: 100 %;
align - items: center;
height: 50px;
justify - content: space - around;
background - color: rgba(255, 140, 0, 0.7);
`;
const NameItemText = styled.Text`
font - size: 16px;
font - weight: bold;

`;

const PontosItemText = styled.Text`
font - size: 16px;
`;

const ImageChave = styled.Image`
margin - top: 10px;
width: 150px;
height: 150px;
border - radius: 20px;
`;

const ItemText = styled.Text`
align - items: center;

`;

const ScrollItem = styled.ScrollView`
width: 100 %;
margin - top: 30px;
`;

const TouchableOpacityToch = styled.View`
width: 100 %;
align - items: center;
margin - bottom: 20px;
>>>>>>> 0f4faed47b0d682d17f825b84f3e6d1656449c24
`;

const Page = (props) => {
    return (
        <Container>
<<<<<<< HEAD
            <RankingHeader>
                <Label>Nickname</Label>
                <Label>Nível</Label>
                <Label>Pontos</Label>
            </RankingHeader>
            <RankingHeader>
                <NameItemText>{props.name}</NameItemText>
                <NivelItemText>{props.level} </NivelItemText>
                <PontosItemText>0</PontosItemText>
            </RankingHeader>
        </Container>
    );
}

=======
            <LojaHeader>
                <NameItemText>{props.name}</NameItemText>
                <PontosItemText>10</PontosItemText>
            </LojaHeader>
            <ScrollItem contentContainerStyle={{ alignItems: 'center' }}>
                <TouchableOpacityToch>
                    <ItemText>Chaveiro Fitness</ItemText>
                    <ImageChave source={iconChaveiro} />
                    <PontosItemText>10 Pontos</PontosItemText>
                </TouchableOpacityToch>

                <TouchableOpacityToch>
                    <ItemText>Chaveiro Fitness</ItemText>
                    <ImageChave source={iconChaveiro} />
                </TouchableOpacityToch>
                <TouchableOpacityToch>
                    <ItemText>Chaveiro Fitness</ItemText>
                    <ImageChave source={iconChaveiro} />
                </TouchableOpacityToch>
                <TouchableOpacityToch>
                    <ItemText>Chaveiro Fitness</ItemText>
                    <ImageChave source={iconChaveiro} />
                </TouchableOpacityToch>
            </ScrollItem>

        </Container >
    );
}


>>>>>>> 0f4faed47b0d682d17f825b84f3e6d1656449c24
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