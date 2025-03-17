import { Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, SafeAreaView, ScrollView, Text } from 'react-native';

import useDrinksId from './hooks/drinksId';

import DrinksDetails from '~/components/drinksDetails';

export default function Details() {
  const { id } = useLocalSearchParams();
  const { drink, loading } = useDrinksId(id as string);
  console.log(drink, id);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (!drink) {
    return <Text>Drink not found</Text>;
  }
  return (
    <>
      <Stack.Screen options={{ title: 'Details', headerShown: true }} />
      <SafeAreaView className="flex flex-1 bg-white px-1">
        <DrinksDetails item={drink} />
      </SafeAreaView>
    </>
  );
}
