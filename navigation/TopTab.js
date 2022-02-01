import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hottest from "../views/occassion/Hottest";
import Hot from "../views/occassion/Hot";
import Stack from "./Stack";

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Stack" component={Stack} options={{ title: 'HOT' }}/>
            <Tab.Screen name="Hottest" component={Hottest} />
        </Tab.Navigator>
    );
}

export default TopTab;