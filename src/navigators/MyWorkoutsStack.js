import { createStackNavigator } from 'react-navigation-stack';

import MyWorkouts from '../screens/MyWorkouts';
import EditWorkout from '../screens/EditWorkout';
import EditRecommendations from '../screens/EditRecommendations';

export default createStackNavigator({
    MyWorkouts,
    EditWorkout,
    EditRecommendations
});