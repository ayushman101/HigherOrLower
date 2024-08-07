import { View,Text,StyleSheet } from "react-native"

const GameLog=({index, guessNumber})=>{
    return(
        <View style={styles.LogStyle}>
            <Text style={{fontWeight:'bold', marginRight:120}}>#{index}</Text>
            <Text style={{fontWeight:'bold'}}>Opponent's Guess: {guessNumber}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    LogStyle:{
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:20,
        borderWidth:2,
        backgroundColor:'#ddb52f',
        flexDirection:'row',
        justifyContent:'flex-start'
    }
})

export default GameLog