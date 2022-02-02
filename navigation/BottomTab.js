import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from "../views/bottomTab/Notifications";
import TopTab from "./TopTab";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TopTab" component={TopTab} options={{
                headerShown: false,
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-cart"
                            size={24}
                            color={tabInfo.focused ? "#4C52DE" : "#8e8e93"}
                        />
                    );
                },
            }}/>
            <Tab.Screen name="Notifications" component={Notifications} options={{
                headerShown: false,
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-notifications"
                            size={24}
                            color={tabInfo.focused ? "#4C52DE" : "#8e8e93"}
                        />
                    );
                },
            }} />
        </Tab.Navigator>
    );
}

export default BottomTab;