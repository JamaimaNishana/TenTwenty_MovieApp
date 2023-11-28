import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MediaScreen from '../screens/MediaScreen';
import MoreScreen from '../screens/MoreScreen';
import SearchScreen from '../screens/SearchScreen';
import { ListBulletIcon, Squares2X2Icon, FilmIcon, PlayIcon } from 'react-native-heroicons/solid'

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFFFFF"
            screenOptions={{ headerShown: false, }}
            barStyle={{
                backgroundColor: '#2E2739'

            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <Squares2X2Icon size={23} strokeWidth={2} />
                    ),
                }}
            />
            <Tab.Screen
                name="Watch"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Watch',
                    tabBarIcon: ({ color }) => (
                        <PlayIcon size={23} strokeWidth={2} />
                    ),
                }}
            />
            <Tab.Screen
                name="Media"
                component={MediaScreen}
                options={{
                    tabBarLabel: 'Media',
                    tabBarIcon: ({ color }) => (
                        <FilmIcon size={23} strokeWidth={2} />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color }) => (
                        <ListBulletIcon size={23} strokeWidth={2} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;