import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';

const AllScreens=({childComponent})=>{
    return (
        <>
        <LinearGradient colors={['#72063c','#ddb52f']} style={styles.rootscreen}>
            <ImageBackground source={require('./assets/background.png')} style={styles.imageStyle} imageStyle={{opacity:0.15}}>
                <SafeAreaView style={{flex:1}}>
                  {childComponent}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    rootscreen:{
      flex:1,
    },
  
    imageStyle:{
      flex:1,
    }
  });
  

export default AllScreens