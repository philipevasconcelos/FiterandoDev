import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomTabBar from '../components/CustomTabBar';
import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import MyWorkoutsStack from './MyWorkoutsStack';
import LojaStack from './LojaStack';
import RankingStack from './RankingStack';
import LojaStack from './LojaStack';
console.disableYellowBox = true;



export default createBottomTabNavigator({
    HomeStack,
    WorkoutStack: {
        screen: WorkoutStack,
        navigationOptions: {
            tabBarVisible: false
        }
    },
    RankingStack,
    LojaStack,
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
                    route: 'RankingStack'
                },
                {
                    type: 'regular',
                    text: 'Loja',
                    icon: require('../assets/loja.png'),
<<<<<<< HEAD
                    route: 'LojaStack'
=======
                    route: 'Loja'
>>>>>>> 0f4faed47b0d682d17f825b84f3e6d1656449c24
                },
                {
                    type: 'regular',
                    text: 'Editar',
                    icon: require('../assets/myworkouts.png'),
                    route: 'MyWorkoutsStack',
                }
            ]}
        />
    )
});