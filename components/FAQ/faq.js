import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {


  return (
 
      <><WebView style={styles.container}
      source={{ uri: 'https://ogso-mountain-essentials.com/b2c-catalog/#1' }} />
 
      </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});