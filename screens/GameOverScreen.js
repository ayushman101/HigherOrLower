import { Text,View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useContext } from "react";
import AppContext from "../context";
import { useNavigation } from "@react-navigation/native";

const GameOverScreen=()=>{

    const {userInput, guessList,setUserInput, setGuessList}=useContext(AppContext)

    const navigation=useNavigation()

    function resetGame(){
        setUserInput('')
        setGuessList([])
        navigation.navigate('StartingGameScreen')
    }

    return(
        <View style={styles.rootScreen}>
           <View style={styles.mainTitle}>
                <Text style={styles.textStyle}>Game Complete</Text>
            </View>
            <View style={styles.buttonsHeadingContainer}>
                <Text style={styles.textStyle}>{guessList.length} Rounds to Guess the Number {userInput}</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="NewGame" onPress={resetGame} />
                </View>
            </View>


        </View>
    )
}

const styles=StyleSheet.create({
    rootScreen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    mainTitle:{
        borderWidth:2,
        borderColor: 'white',
        // marginBottom:50,
        // marginTop:100,
        padding:30,
        borderRadius:20
    },
    textStyle:{
        color:'#E4DEBE',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },

    buttonsHeadingContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4e0329',
        paddingHorizontal:40,
        paddingVertical:40,
        marginTop:50,
        borderRadius:20
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        paddingTop:20
    },
})

export default GameOverScreen