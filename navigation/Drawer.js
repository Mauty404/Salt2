import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Settings from "../views/drawer/Settings"
import BottomTab from "./BottomTab";
import {Button} from "native-base";


const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="BottomTab"  component={BottomTab}
                           options={{ title: 'Occasions',
                headerRight: () => (
                    <Button
                        onPress={() => navigation.navigate('AddAdvert')}
                        color="#fff"
                        style={styles.button}
                    >
                        New adv
                    </Button>
                )}} />
            <Drawer.Screen name="Settings" component={Settings}  />
        </Drawer.Navigator>
    );
}

const styles = {
    button: {
        marginRight: 30
    }
}

export default DrawerNavigator;
