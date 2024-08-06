import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllScreens from './AllScreensComponent';
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { ContextProvider } from './context';


const Stack= createNativeStackNavigator();

export default function App() {
  return (
      <>
      <StatusBar style="light" />

      <ContextProvider>
         <NavigationContainer>
              <Stack.Navigator screenOptions={{
                headerShown:false
              }}>
                  <Stack.Screen name="StartingGameScreen"  >
                    {(props)=><AllScreens {...props} childComponent={<StartGameScreen/>}/>}
                  </Stack.Screen>
                  <Stack.Screen name="GameScreen"  >
                    {(props)=><AllScreens {...props} childComponent={<GameScreen/>}/>}
                  </Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
      </ContextProvider>
      </>
     
  );
}


const styles = StyleSheet.create({
  rootscreen:{
    flex:1,
  },

  imageStyle:{
    flex:1,
  }
});

