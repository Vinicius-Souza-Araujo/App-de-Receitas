import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Rotas from './src/Rotas';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Rotas />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6D633',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});
