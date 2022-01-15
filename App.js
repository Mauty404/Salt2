import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import Drawer from "./navigation/Drawer";
import {NativeBaseProvider} from "native-base";


export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <StatusBar style="auto"/>
                <Drawer/>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
