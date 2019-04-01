import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home'
import ProfileScreen from './profile'

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;