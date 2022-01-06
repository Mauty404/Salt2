import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home2 from "../views/Home2";
import Home1 from "../views/Occasions";
import Drawer from "./Drawer";


const Stack = createStackNavigator();
const ContactsStackScreen = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Occasions"
            component={Drawer}
            options={{headerShown: false}}
        />

    </Stack.Navigator>
);

export default ContactsStackScreen;
