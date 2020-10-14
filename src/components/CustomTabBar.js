import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const TabBarArea = styled.SafeAreaView`
    flex-direction:row;
    background-color:#EEE;
`;
const TabBarItem = styled.View`
    flex:1;
    height:75px;
    align-items:center;
`;
const TabRegular = styled.TouchableHighlight`
    align-items:center;
`;
const TabImage = styled.Image`
    width:35px;
    height:35px;
    margin-top:10px;
    margin-bottom:5px;
`;

export default (props) => {

    return (
        <TabBarArea>
            {props.items.map(item => (
                <TabBarItem key={item.route}>
                    {item.type == 'regular' &&
                        <TabRegular underlayColor="transparent" onPress={() => props.navigation.navigate(item.route)}>
                            <>
                                <TabImage source={item.icon} />
                                <Text>{item.text}</Text>
                            </>
                        </TabRegular>
                    }
                </TabBarItem>
            ))}
        </TabBarArea>
    );
}