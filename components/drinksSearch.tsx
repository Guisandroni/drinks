import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const DrinksSearch = ({ item }: { item: any }) => {
  const handleItemClick = () => {
    router.push(`/details?id=${item.idDrink}`);
  };
  return (
    <TouchableOpacity
      onPress={handleItemClick}
      className="flex flex-row items-center gap-6 rounded-md border-b border-gray-200 p-2">
      <Image className="h-20 w-20 rounded-md" source={{ uri: item.strDrinkThumb }} />
      <View className="flex-1">
        <Text>{item.strCategory}</Text>

        <Text>{item.strDrink}</Text>
        <Text>{item.strAlcoholic}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default DrinksSearch;
