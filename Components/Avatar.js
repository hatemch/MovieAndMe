// Components/Avatar.js

import React, { useState } from 'react'
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, PermissionsAndroid} from 'react-native';
import { connect } from 'react-redux'
//import ImagePicker from 'react-native-image-picker'
import * as ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class Avatar extends React.Component {

    constructor(props) {
        super(props)
        // this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
        this._avatarClicked = this._avatarClicked.bind(this)
    }

    _avatarClicked = () => {
        // Ici nous appellerons la librairie react-native-image-picker pour récupérer un avatar
        this.props.navigation.navigate("AvatarProfile")
        console.log("URI --> ",this.props)
    }
    
    render() {
        return (
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={this._avatarClicked}
                navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
            >
                {/* A présent on peut récupérer notre avatar dans les props. Souvenez-vous Redux mappe notre state global et ses données dans les props de notre component. */}
                <Image style={styles.avatar} source={this.props.avatar} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchableOpacity: {
        margin: 5,
        width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    }
})
// On mappe l'avatar aux props de notre component
const mapStateToProps = state => {
    return {
        avatar: state.setAvatar.avatar
    }
}

export default connect(mapStateToProps)(Avatar)