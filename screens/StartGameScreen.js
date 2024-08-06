import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import InputButtonContainer from "../components/InputButtonContainer";

const StartGameScreen=()=>{
    return(
        <ScrollView style={{flex:1}}>
        <KeyboardAvoidingView style={styles.StartGameScreenStyle} behavior="position">
            <InputButtonContainer/>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}


const styles=StyleSheet.create({
    StartGameScreenStyle:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:150,
    }
})

export default StartGameScreen;