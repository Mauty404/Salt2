import {Box, Button, Center, Divider, FormControl, Image, ScrollView, Stack} from "native-base";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {TextInput} from 'react-native-paper';
import React from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import axios from "axios";
import {StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        width: 100,
        height: 30
    },
    photo: {
        flex: 1,
        width: 300,
        height: 300,
        alignItems: 'center',
    }
});


const AddAdvert = () => {
    const route = useRoute();
    const {
        photoUrl = '',
        link: defaultLink = '',
        price: defaultPrice = '',
        title: defaultTitle = '',
        description: defaultDescription = ''
    } = route.params;

    const [link, setLink] = React.useState(defaultLink);
    const [price, setPrice] = React.useState(defaultPrice);
    const [title, setTitle] = React.useState(defaultTitle);
    const [description, setDescription] = React.useState(defaultDescription);
    const navigation = useNavigation();
    const [photo, setPhoto] = React.useState(photoUrl);

    const postAdvert = async () => {
        try {
            const res = await axios.post('http://10.0.2.2:3000/advert', {
                title: title,
                price: price,
                description: description,
                link: link
            })
        } catch (e) {
            console.error(e);
        }
        navigation.navigate('Drawer');
    }

    return (
        <ScrollView
            style={{
                width: "90%",
            }}
        >
            <Stack
                space={2.5}
                alignSelf="center"
                px="4"
                safeArea
                mt="4"
                w={{
                    base: "100%",
                    md: "25%",
                }}
            >
                <Box>
                    <FormControl mb="5">
                        <TextInput
                            label="Link"
                            value={link}
                            onChangeText={setLink}
                            selectionColor="orange"
                            underlineColor="orange"
                            activeUnderlineColor="orange"
                        />
                        <FormControl.HelperText>
                            Enter link to your occasion.
                        </FormControl.HelperText>
                    </FormControl>
                    <Divider/>
                </Box>
                <Box>
                    <Text bold fontSize="lg" mb="2">
                        Photo
                    </Text>
                    <Image source={{uri: photo}} style={styles.photo}/>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            title={'Open camera'}
                            onPress={() => navigation.navigate("CameraView", {
                                title: title,
                                price: price,
                                description: description,
                                link: link
                            })}
                            style={styles.button}
                        />
                    </View>
                </Box>
                <Box>
                    <Text bold fontSize="lg" mb="2">
                        Details
                    </Text>ex
                    <FormControl isDisabled mb="5">
                        <TextInput
                            label="Price"
                            keyboardType="numeric"
                            value={price}
                            onChangeText={setPrice}
                            selectionColor="orange"
                            underlineColor="orange"
                            activeUnderlineColor="orange"
                        />
                    </FormControl>
                    <Divider/>
                    <FormControl isDisabled mb="5">
                        <TextInput
                            label="Title"
                            value={title}
                            onChangeText={setTitle}
                            selectionColor="orange"
                            underlineColor="orange"
                            activeUnderlineColor="orange"
                        />
                    </FormControl>
                    <Divider/>
                    <FormControl isDisabled mb="5">
                        <TextInput
                            label="Description"
                            value={description}
                            onChangeText={setDescription}
                            selectionColor="orange"
                            underlineColor="orange"
                            activeUnderlineColor="orange"
                        />
                    </FormControl>
                    <Divider/>
                </Box>
            </Stack>
            <Button onPress={() => postAdvert()}>
                Submit
            </Button>
        </ScrollView>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <AddAdvert/>
            </Center>
        </NativeBaseProvider>
    )
}
