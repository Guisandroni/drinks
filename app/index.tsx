import { LinearGradient } from 'expo-linear-gradient';
import { router, Stack } from 'expo-router';
import { Image, View, Text, Pressable } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: 'App', headerShown: false }} />
      <LinearGradient
        colors={['#1a237e', '#4a148c', '#311b92']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1">
        <View className="flex-1">
          <Animated.View
            entering={FadeIn.duration(1000)}
            className="flex-1 justify-around items-center px-5 py-15">
            <View className="gap-4 items-center">
              <Text className="text-4xl font-bold text-center text-white">DrinkMaster</Text>
            </View>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
              }}
              className="w-64 h-64 rounded-full"
            />

            <Text className="text-xl leading-7 text-center text-white">
              Descubra o mundo dos coquetéis{'\n'}na palma da sua mão
            </Text>

            <Pressable
              onPress={() => router.push('/home')}
              className="active:scale-98 w-full max-w-[300px] rounded-full bg-white px-8 py-4 shadow-md active:opacity-90"
              style={({ pressed }) =>
                pressed ? { opacity: 0.9, transform: [{ scale: 0.98 }] } : {}
              }>
              <Text className="text-center text-lg font-semibold text-[#1a237e]">
                Começar a explorar
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </LinearGradient>
    </>
  );
}
