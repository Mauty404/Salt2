import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Stack from "../navigation/Stack"
import Occasions from "../views/Occasions";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Occasions" component={Occasions} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
