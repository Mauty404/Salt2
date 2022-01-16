import {
    Box,
    Button,
    Center,
    Divider, Flex,
    FormControl, HStack,
    Input, Pressable,
    ScrollView, Spacer,
    Stack,
    Text,
    WarningOutlineIcon
} from "native-base";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {TextInput} from 'react-native-paper';
import React from "react";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";


const AddAdvert = () => {
    const [link, setLink] = React.useState('');
    const [price, setPrice] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const navigation = useNavigation();

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
                    <Pressable
                        onPress={() => {
                            console.log("Hello world")
                        }} style={{ height: 300}}
                    >
                        <Box p="5" rounded="8" bg="cyan.700" style={{height: "100%"}}>
                            <Text mt="2" fontSize={14} color="cyan.100" >
                                Place for your photo. Click me.
                            </Text>
                        </Box>
                    </Pressable>
                    <FormControl mb="5">
                        <FormControl.HelperText>
                            Enter photo to your occasion.
                        </FormControl.HelperText>
                    </FormControl>
                    <Divider/>
                </Box>
                <Box>
                    <Text bold fontSize="lg" mb="2">
                        Details
                    </Text>
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
