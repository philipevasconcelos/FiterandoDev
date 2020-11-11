import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;
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
`;

const Text = styled.Text``;

const Page = (props) => {
    return (
        <Container>
            <RankingHeader>
                <Label>Nickname</Label>
                <Label>Nível</Label>
                <Label>Pontos</Label>
            </RankingHeader>
            <RankingHeader>
                <NameItemText>{props.name}</NameItemText>
                <NivelItemText>{props.level == 'beginner' ? <Text>Iniciante</Text> : true} </NivelItemText>
                <NivelItemText>{props.level == 'intermediate' ? <Text>Intermediario</Text> : true} </NivelItemText>
                <NivelItemText>{props.level == 'advanced' ? <Text>Avançado</Text> : true} </NivelItemText>
                <PontosItemText>10</PontosItemText>
            </RankingHeader>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    return {
        title: 'Ranking'
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