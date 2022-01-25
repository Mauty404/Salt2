import {Box, Button, Center, Divider, FormControl, ScrollView, Stack, Text, View} from "native-base";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {TextInput} from 'react-native-paper';
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {RNCamera} from 'react-native-camera';

// const openCamera = async () => {
//     const result = await launchImageLibrary({mediaType: "mixed"});
//     return result;
// }

// const takePicture = async () => {
//     if(this.camera)
// }

const AddAdvert = () => {
    const [link, setLink] = React.useState('');
    const [price, setPrice] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState('');

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
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            title={'Open camera'}
                            // onPress={openCamera}
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
