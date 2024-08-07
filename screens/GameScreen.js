import { useState,useEffect, useContext, useMemo } from "react"
import { Alert, FlatList, StyleSheet, Text,View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import AppContext from "../context"
import { useNavigation } from "@react-navigation/native"


function guessNumber(min,max){
    return Math.floor((Math.random()*(max-min))) + min
}


let minNumber=1
let maxNumber=100

let initialGuess=guessNumber(1,100)

const GameScreen=()=>{

    const [currentGuess,setCurrentGuess]=useState(initialGuess)
    const {userInput,guessList,setGuessList}=useContext(AppContext)

    const navigation= useNavigation();


    useEffect(()=>{
        if(initialGuess>userInput){
            maxNumber=currentGuess
            minNumber=1
        }else{
            minNumber=currentGuess+1
            maxNumber=100
        }
        setGuessList([])
    },[])

    useEffect(()=>{
        setGuessList((guessList)=> [currentGuess, ...guessList])
        if(currentGuess===userInput)
            navigation.navigate('GameOverScreen')
    },[currentGuess])


    const guessNextNumber=(direction)=>{
        if(direction==='lower'){
            if(currentGuess<userInput){
                Alert.alert(
                    'Wrong Guess', 
                    'You either gave a wrong guess or you are lying.Please give correct input',
                    [{text:'OK',style:'destructive'}]
                )
                return
            }else
                maxNumber=currentGuess
        }else{
            if(currentGuess>userInput){
                Alert.alert(
                    'Wrong Guess', 
                    'You either gave a wrong guess or you are lying.Please give correct input',
                    [{text:'OK',style:'destructive'}]
                )
                return
            }else

            minNumber=currentGuess+1
        }
        
        setCurrentGuess(guessNumber(minNumber, maxNumber));

    }


    return (
        <View style={styles.rootScreen}>
            <View style={styles.mainTitle}>
                <Text style={styles.textStyle}>Computer's Guess</Text>
            </View>
            <View style={styles.guessContainer}>
                <Text  style={styles.textStyle}>{currentGuess}</Text>
            </View>
            <View style={styles.buttonsHeadingContainer}>
                <Text style={styles.textStyle}>Higher or Lower</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="-" onPress={guessNextNumber.bind(this,'lower')}/>
                    <PrimaryButton title="+" onPress={guessNextNumber.bind(this,'higher')}/>
                </View>
            </View>
            <FlatList>

            </FlatList>
        </View>
    )

}

const styles=StyleSheet.create({
    rootScreen:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    mainTitle:{
        borderWidth:2,
        borderColor: 'white',
        marginBottom:50,
        marginTop:20,
        padding:30,
        borderRadius:20
    },
    buttonsHeadingContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4e0329',
        paddingHorizontal:60,
        paddingVertical:40,
        borderRadius:20
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        paddingTop:20
    },
    textStyle:{
        color:'#E4DEBE',
        fontSize:25,
        fontWeight:'bold'
    },
    guessContainer:{
        borderWidth:4,
        borderRadius:20,
        borderColor:'#E4DEBE',
        paddingVertical:30,
        paddingHorizontal:120,
        marginBottom:50
    }
})


export default GameScreen