import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Details from "../views/occassion/Details";
import Hot from "../views/occassion/Hot";


const Stack = createStackNavigator();
const ContactsStackScreen = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Hot"
            component={Hot}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Details"
            component={Details}
            initialParams={{itemId: 10}}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
);

export default ContactsStackScreen;
