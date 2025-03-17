import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { api } from './api/api';
import { useDrinks } from './hooks';
import { Drink } from './types';

import DrinksSearch from '~/components/drinksSearch';
export default function Home() {
  const [searchText, setSearchText] = useState('');

  const { drinks, errorMessage, fetchData, clearSearch } = useDrinks();
  const handleSearch = () => {
    fetchData(searchText);
  };
  const clear = () => {
    setSearchText('');
    clearSearch();
  };

  useEffect(() => {
    fetchData('vodka');
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerShown: true }} />
      <SafeAreaView className="flex flex-1 bg-white px-10 pb-20">
        <View className="mb-10 mt-4 flex-row items-center justify-between gap-2">
          <TouchableOpacity
            className="flex h-10 items-center justify-center rounded-md"
            onPress={handleSearch}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex-row items-center justify-center rounded-md border border-gray-300">
            <TextInput
              className="w-80 rounded-md"
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search"
              multiline={false}
              onSubmitEditing={handleSearch}
            />
            <Pressable onPress={clear}>
              <Ionicons name="close" size={24} color="red" />
            </Pressable>
          </View>
        </View>

        {errorMessage && (
          <Text className="text-center font-semibold text-red-500">{errorMessage}</Text>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={drinks}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => <DrinksSearch item={item} />}
        />
      </SafeAreaView>
    </>
  );
}
