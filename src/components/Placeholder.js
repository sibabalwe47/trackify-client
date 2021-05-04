import React from 'react'
import { View,Text,StyleSheet, Image, ImageBackground } from 'react-native'

const PlaceHolder = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.placeholderText}>Your habit tracking data will appear here.</Text>
            <View style={styles.imageWrapper}>
            <View style={styles.imageContainer}>
                  <ImageBackground style={styles.image} source={require('../../assets/placeholder.png')}>
                  </ImageBackground>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 120
    },
    imageWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 186,
        height:  132,
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    placeholderText: {
        fontWeight: '700',
        textAlign: 'center',
        color: '#C4C4C4',
        marginBottom: 40
    }
});

export default PlaceHolder;