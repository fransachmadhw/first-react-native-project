import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-neutral-100">
        <Text>Hello World 😁</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
