/* eslint-disable react/no-unstable-nested-components */
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Account, Settings, Home } from 'pages';

const Tab = createBottomTabNavigator();

export const MainNavigatior = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            const params = route?.params as any;
            const iconName = focused ? params?.focusedIcon : params?.unFocusedIcon ?? 'homeee';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} initialParams={{ focusedIcon: 'home', unFocusedIcon: 'home-outline' }} />
        <Tab.Screen
          name="Account"
          component={Account}
          initialParams={{ focusedIcon: 'business', unFocusedIcon: 'business-outline' }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          initialParams={{ focusedIcon: 'ios-list', unFocusedIcon: 'ios-list-outline' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
