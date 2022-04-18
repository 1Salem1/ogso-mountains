import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {


  return (
 
      <><WebView style={styles.container}
      source={{ uri: "https://online.flippingbook.com/view/467555189/" }} />
 
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