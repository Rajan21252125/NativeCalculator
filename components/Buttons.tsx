import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


type ButtonsProps = {
    text: string,
    onPress: () => void,
    isOrange?: boolean,
}
const Buttons = ({text, onPress, isOrange = false} : ButtonsProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, isOrange && {backgroundColor: 'orange'}]}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'grey',
        padding: 20,
        borderRadius: 30,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default Buttons