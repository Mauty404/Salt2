import React from 'react';
import Hot from "../views/occassion/Hot";
import {createStackNavigator} from "@react-navigation/stack";
import AddAdvert from "../views/AddAdvert";
import Drawer from "./Drawer";

const Stack = createStackNavigator();

const GlobalStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Drawer"
                component={Drawer}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AddAdvert"
                component={AddAdvert}
                initialParams={{itemId: 10}}
                options={{headerShown: true, title: "Add Advert"}}
            />
        </Stack.Navigator>
    );
};

export default GlobalStack;