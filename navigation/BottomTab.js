import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from "../views/bottomTab/Notifications";
import TopTab from "./TopTab";

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TopTab" component={TopTab} options={{
                headerShown: false
            }}/>
            <Tab.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BottomTab;