import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, ActivityIndicator, FlatList } from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  // useState();
  const router = useRouter()
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <Pressable>
          <Text style={styles.headerBtn}>Show all</Text>
        </Pressable>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?
          (<ActivityIndicator size="large" color={COLORS.primary} />) :
          error ?
            (<Text>Something went wrong</Text>) :
            (<FlatList
              data={[1, 2, 3, 4]}
              renderItem={({ item }) => (
                (<PopularJobCard
                  item={item}
                />)
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal

            />)
        }
      </View>
    </View>
  );
};

export default Popularjobs;
