import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import NotificationBox from '../../components/NotificationBox'
import {ScrollView} from "native-base";
import {useIsFocused} from "@react-navigation/native";
import axios from "axios";


const Notifications = () => {
    const isFocused = useIsFocused();
    const [notifications, setNotifications] = useState();

    useEffect(() => {
        const fetchAdverts = async() => {
            try {
                const res = await axios.get('http://10.0.2.2:3000/notification')
                setNotifications(res.data);
            }
            catch(e) {
                console.error(e);
            }
        }
        fetchAdverts().catch();
    }, [isFocused])

    return (
        <ScrollView style={style.view}>
            {notifications && notifications.map((item) => (
                <NotificationBox details={item.details} company={item.company} title={item.title} key={item.id}/>
            ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    view: {
        backgroundColor: '#1A1D24',
        flex: 1
    }
})


export default Notifications;
