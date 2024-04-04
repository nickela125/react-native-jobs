import { View, Text, Pressable, FlatList} from "react-native";

import styles from "../tabs/tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <Pressable style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </Pressable>
)

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small / 2}}
        renderItem={({item}) => (
          <Pressable >
            <TabButton 
              name={item}
              activeTab={activeTab}
              onHandleSearchType={() => setActiveTab(item)}/>
          </Pressable>
        )} />
    </View>
  );
};

export default Tabs;
