import {View} from "native-base";
import {List, Searchbar} from "react-native-paper";
import {useEffect, useState} from "react";

const data = {
    "list": [{
        "id": 0,
        "type": "Electronics"
    },
        {
            "id": 1,
            "type": "Gaming"
        },
        {
            "id": 2,
            "type": "House"
        },
        {
            "id": 3,
            "type": "Garden"
        },
        {
            "id": 4,
            "type": "Health",
        },
        {
            "id": 5,
            "type": "Family"
        },
        {
            "id": 6,
            "type": "Trips"
        }]
}

const Groups = () => {

    const [filter, setFilter] = useState('');
    const originalList = data.list;
    const [filteredList, setFilteredList] = useState(data.list);

    useEffect(() => {
        const filterCategories = () => {
            const result = originalList.filter((item)=> {
                return item.type.toLowerCase().includes(filter)
            })
            setFilteredList(result);
        }
     filterCategories();
    }, [filter])

    const onChangeSearch = query => {
        setFilter(query.toLowerCase());
    }


    return (
        <View>
            <Searchbar
                placeholder="Search group"
                onChangeText={onChangeSearch}
            />
            <List.Section title="Groups">
                {filteredList.map((item) =>
                    <List.Item key={item.id} title={item.type}/>
                )}

            </List.Section>

        </View>
    )
};


export default Groups;