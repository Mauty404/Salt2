import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import Drawer from "./navigation/Drawer";


export default function App() {
    return (
    <NavigationContainer>
        <StatusBar style="auto"/>
        <Drawer/>
    </NavigationContainer>
    );
}
