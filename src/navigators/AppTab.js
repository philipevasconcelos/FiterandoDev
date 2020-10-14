import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomTabBar from '../components/CustomTabBar';
import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import MyWorkoutsStack from './MyWorkoutsStack';

export default createBottomTabNavigator({
    HomeStack,
    WorkoutStack: {
        screen: WorkoutStack,
        navigationOptions: {
            tabBarVisible: false
        }
    },
    MyWorkoutsStack
}, {
    tabBarComponent: (props) => (
        <CustomTabBar
            {...props}
            items={[
                {
                    type: 'regular',
                    text: 'Início',
                    icon: require('../assets/home.png'),
                    route: 'HomeStack'
                },
                {
                    type: 'regular',
                    text: 'Treinos',
                    icon: require('../assets/treinos.png'),
                    route: 'WorkoutStack'
                },
                {
                    type: 'regular',
                    text: 'Ranking',
                    icon: require('../assets/medalha.png'),
                    route: ''
                },
                {
                    type: 'regular',
                    text: 'Editar',
                    icon: require('../assets/myworkouts.png'),
                    route: 'MyWorkoutsStack'
                }
            ]}
        />
    )
});