import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from "react-native-safe-area-context";
import Stack from "./navigation/Stack";
import {NavigationContainer} from "@react-navigation/native";
import Drawer from "./navigation/Drawer";

export default function App() {
    return (
    <NavigationContainer>
        <StatusBar style="auto"/>
        <Stack/>
    </NavigationContainer>
    );
}
