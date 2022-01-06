import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hottest from "../views/occassion/Hottest";
import Hot from "../views/occassion/Hot";

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hottest" component={Hottest} />
            <Tab.Screen name="Hot" component={Hot} />
        </Tab.Navigator>
    );
}

export default TopTab;