import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Settings from "../views/drawer/Settings"
import BottomTab from "./BottomTab";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Occasions"  component={BottomTab} />
            <Drawer.Screen name="Settings" component={Settings}  />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
