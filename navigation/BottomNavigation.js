import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfilePage from '../screens/ProfilePage';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import MenuScreen from '../screens/MenuScreen';
import Accoount from '../screens/Accoount';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#CD7F32',
          borderRadius: 20,
          margin: 15,
          position: 'absolute',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="home" size={25} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          headerShown:false,
          tabBarIcon: ({}) => {
            return <Ionicons name="person-circle" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={ProfilePage} options={{headerShown: false}} />
       <Stack.Screen name="Accoount" component={Accoount} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default MyTabs;
