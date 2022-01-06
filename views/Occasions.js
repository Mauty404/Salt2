import React from 'react';
import {Button, Text, View} from 'react-native';

const HelloWorldApp = ({navigation}) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>Occasions</Text>
            <Button
                title="Go to About Screen"
            />
        </View>
    )
}
export default HelloWorldApp;
