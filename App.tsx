import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swirl</Text>
      <Text style={styles.subtitle}>Camera capture coming in Phase 3.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },
});
