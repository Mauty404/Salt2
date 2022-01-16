import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";
import GlobalStack from "./navigation/GlobalStack";


export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <StatusBar style="auto"/>
                <GlobalStack/>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
