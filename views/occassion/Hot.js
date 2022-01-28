import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {Box, Button, HStack, Image, ScrollView, Spacer, Text, VStack,} from "native-base";
import axios from "axios";
import {useIsFocused} from "@react-navigation/native";

export default function Hot({navigation}) {
    const [adverts, setAdverts] = useState();
    const isFocused = useIsFocused();

    useEffect(() => {
        const fetchAdverts = async() => {
            try {
                const res = await axios.get('http://10.0.2.2:3000/advert', {

                })
                setAdverts(res.data);
            }
            catch(e) {
                console.error(e);
            }
        }
        fetchAdverts().catch();
    }, [isFocused])
    return (
        <ScrollView style={styles.view}>
            {adverts && adverts.map((item) => (
            <Box style={styles.container} p="3" rounded="none" key={item.id}>
                <HStack alignItems="flex-start">
                    <Image
                        source={{
                            uri: "https://static.pepper.pl/threads/raw/default/458742_1/re/300x300/qt/60/458742_1.jpg",
                        }}
                        alt="Alternate Text"
                        size={"sm"}
                    />
                    <VStack ml="4">
                            <Text color="white" fontWeight="bold" fontSize={20}>
                                {item.title}
                            </Text>
                        <Spacer/>
                        <Text fontSize={16} color="white">
                            Microsoft
                        </Text>
                        <Spacer/>
                        <Text color="#ff4d00" fontSize={16} fontWeight="bold">
                            {item.price} zł
                        </Text>
                    </VStack>
                    <Spacer/>
                    {/*<Text color="#5f6273">{moment(item.creationDate).format('lll')}</Text>*/}
                </HStack>
                <HStack>
                    <Image rounded='3xl' mr='2' source={{
                        uri: "data:image/jpeg;base64,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"
                    }}
                           alt="Alternate Text"
                           size={"xs"}/>
                    <Text color="white" mt="2" fontWeight="medium" fontSize={16}>Mikorolo</Text>
                    <Spacer/>
                    <Button mt="2" variant='ghost' colorScheme='primary' style={styles.button} onPress={() => navigation.navigate("Details", { id: item.id})}>Check</Button>
                </HStack>
            </Box>
                )
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#1A1D24',
        flex: 1
    },
    container: {
        flexDirection: "column",
        width: '100%',
        margin: 7,
        backgroundColor: '#222739'
    },
    text: {
        color: 'white',
    },
    button: {
        color: '#ff4d00'
    }
});