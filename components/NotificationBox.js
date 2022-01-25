import {Box, HStack, Image, Spacer, Text, View, VStack} from "native-base";
import {StyleSheet} from "react-native";
import React from "react";

const paths = ['amazon.jpg', '../assets/ram_crucial.jpg']

const NotificationBox = ({details, title, company}) => {
    return (
        <View>
            <Box style={styles.container} p="3" rounded="none">
                <HStack>
                    <Image mr='2' source={
                        require('../assets/plus.png')
                    }
                           alt="Alternate Text"
                           style={{width: 30, height: 30}}/>
                    <VStack>
                        <HStack style={{paddingBottom: 10}}>
                            <Box style={{maxWidth: 230}}>
                                <Text style={styles.text}>{details}</Text>
                            </Box>
                            <Text style={{color: 'white', position: 'absolute', left: 270}}>15h ago</Text>
                        </HStack>
                        <Box style={{
                            backgroundColor: 'grey',
                            width: 300,
                            borderRadius: 5,
                            border: 2,
                            borderColor: '#73AD21',
                            padding: 7
                        }}>
                            <HStack>
                                <Image source={require('../assets/ram_crucial.jpg')}
                                       alt="Elo"
                                       style={{width: 50, height: 50, borderRadius: 7}}/>
                                <VStack>
                                    <Box style={{width: 240}}>
                                        <Text style={styles.text}>{title}</Text>
                                    </Box>
                                    <Text style={styles.text}>{company}</Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </VStack>
                </HStack>
            </Box>
            <Spacer/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: '96%',
        margin: 7,
        backgroundColor: '#222739',
        minHeight: 100
    },
    text: {
        color: 'white',
        minWidth: 50,
        minHeight: '50%',
        paddingLeft: 10
    }
});

export default NotificationBox;
