import {Camera} from "expo-camera";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        paddingBottom: 20,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
});


const CameraView = () => {

    const route = useRoute();

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState();

    const navigation = useNavigation();

    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            console.log('taking pic');
            try {
                let photo = await cameraRef.current.takePictureAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
                return photo;
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <View style={{flex: 1}}>
            <Camera style={{flex: 1}} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={{color: "white", fontWeight: 'bold'}}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                                      onPress={async () => {
                                          const r = await takePhoto();
                                          setPhoto(r.uri);
                                          navigation.push('AddAdvert', {
                                              ...route.params,
                                              photoUrl: r.uri,
                                          });
                                      }}
                    >
                        <Text style={{color: "white", fontWeight: 'bold'}}> Photo </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

export default CameraView;
