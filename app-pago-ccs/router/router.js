import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


// importing Screens 
import Home from '../screens/home';
import Payment from '../screens/payment';
import Wallet from '../screens/wallet';
import Login from '../screens/auth screens/login';
import Register from '../screens/auth screens/register.js';

// icons imports
import { AntDesign, Foundation, Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    const commonHeaderOptions = {
        headerBackButtonMenuEnabled: true,
    }

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#ffd233'
            }}>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            // <Octicons name="number" size={24} color="black" />
                            <AntDesign name="home" size={24} color="black" />
                            ),
                        title: 'Home'
                        }} 
                />
                 <Tab.Screen
                    name='Payment'
                    component={Payment}
                    options={{
                        tabBarLabel: 'Payment',
                        tabBarIcon: () => (
                            // <Octicons name="number" size={24} color="black" />
                            <Foundation name="dollar" size={24} color="black" />
                            ),
                        title: 'Payment'
                        }} 
                />
                <Tab.Screen
                    name='Wallet'
                    component={Wallet}
                    options={{
                        tabBarLabel: 'Wallet',
                        tabBarIcon: () => (
                            // <Octicons name="number" size={24} color="black" />
                            <Ionicons name="wallet-outline" size={24} color="black" />
                            ),
                        title: 'Wallet'
                        }} 
                />
            </Tab.Navigator>
    )
}

const AppNavigator = () => {
    // const {currentUser} = useContext(AuthContext);
    const currentUser = true;
    
   return(
        <NavigationContainer>
            <Stack.Navigator>
                {currentUser ? (
                    <Stack.Group>
                        <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}}/> 
                    </Stack.Group>
                    
                    ): (
                        <Stack.Group>
                            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                        </Stack.Group>
                    )}
            
            </Stack.Navigator>
        </NavigationContainer>
   )
}

export default AppNavigator;