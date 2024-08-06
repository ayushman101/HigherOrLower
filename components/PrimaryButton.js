import { Pressable,View,StyleSheet,Text } from "react-native";

const PrimaryButton=(props)=>{
    return(
        <View>
            <Pressable style={({pressed})=> pressed? [styles.buttonStyle, styles.pressedButton]: styles.buttonStyle}  onPress={props.onPress}>
                <Text style={styles.buttonTextStyle} >{props.title}</Text>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonStyle:{
        backgroundColor:'#72063c',
        borderRadius:5,
        paddingVertical:8,
        paddingHorizontal:16,
        marginHorizontal:20,
    },

    buttonTextStyle:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },

    pressedButton:{
        opacity:0.75
    }
})

export default PrimaryButton;