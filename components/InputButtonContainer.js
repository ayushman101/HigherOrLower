import { View, StyleSheet, TextInput, Alert } from "react-native"
import PrimaryButton from "./PrimaryButton"
import { useNavigation } from "@react-navigation/native"
import { useContext, useState } from "react"
import AppContext from "../context"
const InputButtonContainer=()=>{

    const [currentInput,setCurrentInput]=useState('');

    const {setUserInput}= useContext(AppContext)

    const navigation=useNavigation();

    const validateInput=(value)=> {
        if(isNaN(value) || value < 1 || value >99){
            return false
        }
        return true
    }

    const resetInput=()=>{
        setCurrentInput('')
    }

    const navigateOnConfirm=()=>{

        const value=parseInt(currentInput)

        if(validateInput(value)){
            setUserInput(value)
            navigation.navigate('GameScreen')
            return
        }
        Alert.alert(
            'Invalid Input',
            'Entered Number must be between 1 and 99',
            [{text:'OK', style:'destructive',onPress: resetInput}]
            )
    }

    return(
        <View style={styles.InputButtonContainerStyle}>
            
            <TextInput 
                style={styles.TextInputStyle} 
                keyboardType="number-pad" 
                maxLength={2} 
                textAlign="center" 
                onChangeText={(enteredText)=>setCurrentInput(enteredText)}
                value={currentInput}
            />

            <View style={styles.buttonContainer}>
                <PrimaryButton title='Reset' onPress={resetInput}/>
                <PrimaryButton title='Confirm' onPress={navigateOnConfirm}/>
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    InputButtonContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4e0329',
        paddingHorizontal:40,
        paddingVertical:40,
        borderRadius:20
        // width:100,
        // height:100
    }  ,
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        paddingTop:20
    },
    TextInputStyle:{
        borderBottomColor:'#E4DEBE',
        borderBottomWidth:'2',
        width:50,
        height:50,
        fontSize:30,
        fontWeight: "bold",
        color:'#E4DEBE'   
    }
})

export default InputButtonContainer