import React from 'react';
import styled from 'styled-components/native';
import useMuscleImage from './useMuscleImage';

const ExerciseItemArea = styled.View`
    height:60px;
    flex-direction:row;
    margin-bottom:15px;
`;
const ExerciseMuscleArea = styled.View`
    width:50px;
    height:50px;
    justify-content:center;
    align-items:center;
`;
const ExerciseMuscleImage = styled.Image`
    width:65px;
    height:50px;
    border-radius:5px;
    border-color:#FFCC98;
    border-width:1px;
`;
const ExerciseInfo = styled.View`
    flex:1;
    flex-direction:column;
    justify-content:center;
    margin-left:15px;
`;
const ExerciseName = styled.Text`
    font-size:15px;
    color:#FFF;
`;
const ExerciseDetails = styled.Text`
    font-size:12px;
    color:#999;
`;

const ExerciseCheck = styled.TouchableHighlight`
    width:60px;
    justify-content:center;
    align-items:center;
`;
const ExerciseDone = styled.Image`
    width:40px;
    height:40px;
`;
const ExerciseUnDone = styled.View`
    width:40px;
    height:40px;
    border:5px solid #FFF;
    border-radius:20px;
`;
const ExerciseCount = styled.View`
    width:25px;
    justify-content:center;
`;

const ExerciseCountText = styled.Text`
    font-size:17px;
    color:#FFF;
`;

export default (props) => {
    return (
        <ExerciseItemArea>
            <>
                <ExerciseCount>
                    <ExerciseCountText>{props.index + 1}.</ExerciseCountText>
                </ExerciseCount>
                <ExerciseMuscleArea>
                    <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
                </ExerciseMuscleArea>
                <ExerciseInfo>
                    <ExerciseName>{props.data.name}</ExerciseName>
                    <ExerciseDetails>
                        {`${props.data.sets} séries - ${props.data.reps} rep ${props.data.load ? `- ${props.data.load} kg` : ''}`}
                    </ExerciseDetails>
                </ExerciseInfo>
                <ExerciseCheck onPress={props.checkAction} underlayColo="transparent">
                    {props.data.done ? <ExerciseDone source={require('../assets/check-white.png')} /> : <ExerciseUnDone></ExerciseUnDone>}
                </ExerciseCheck>
            </>
        </ExerciseItemArea >
    );
}