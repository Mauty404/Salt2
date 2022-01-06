import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from "../views/bottomTab/Notifications";
import TopTab from "./TopTab";
import {Button} from "react-native";

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Occasions" component={TopTab} options={{
                headerLeft: () => (
                    <Button
                        onPress={() => alert('This is a button!')}
                        title="Info"
                        color="#fff"
                    />
                ),
            }}/>
            <Tab.Screen name="Notifications" component={Notifications} />
        </Tab.Navigator>
    );
}

export default BottomTab;