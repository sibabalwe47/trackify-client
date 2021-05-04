import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const Icon = (props) => {
    const { iconName } = props;
    return (
        <View style={styles.iconWrapper}>
            {iconName == "dashboard" ? (<Image source={require("../../assets/dashboard.png")} style={styles.icon}/>) : null}
            {iconName == "track" ? (<Image source={require("../../assets/track.png")} style={styles.icon}/>) : null}
            {iconName == "about" ? (<Image source={require("../../assets/about.png")} style={styles.icon}/>) : null}
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25
    }
});

export default Icon;