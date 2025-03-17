import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, ScrollView, Image, Text } from 'react-native';

const DrinksDetails = ({ item }: { item: any }) => {
  const ingredients = Array.from({ length: 15 }, (_, index) => ({
    ingredient: item[`strIngredient${index + 1}`] || '',
    measure: item[`strMeasure${index + 1}`] || 'to taste',
  })).filter((item) => item.ingredient);

  return (
    <ScrollView className="flex-1">
      <View className="relative">
        <Image
          source={{ uri: item.strDrinkThumb }}
          style={{ width: '100%', height: 300 }}
          className="rounded-b-3xl"
        />

        <View className="mx-4 -mt-10 rounded-xl bg-white p-6 shadow-lg">
          <Text className="mb-2 text-2xl font-bold">{item.strDrink}</Text>
          <View className="mb-4 flex-row justify-between">
            <Text className="text-gray-600">{item.strCategory}</Text>
            <Text className="text-gray-600">{item.strAlcoholic}</Text>
          </View>

          <View className="my-4 border-b border-gray-200" />

          <Text className="mb-2 text-lg font-semibold">Instructions</Text>
          <Text className="mb-4 text-gray-700">{item.strInstructions}</Text>

          <Text className="mb-2 text-lg font-semibold">Ingredientes</Text>
          {ingredients.map(({ ingredient, measure }, index) => (
            <Text key={index}>
              {ingredient} - {measure}
            </Text>
          ))}

          {item.strGlass && (
            <>
              <Text className="mt-4 text-lg font-semibold">Glass</Text>
              <Text className="mb-4 text-gray-700">{item.strGlass}</Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DrinksDetails;
