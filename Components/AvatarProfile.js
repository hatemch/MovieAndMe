// Components/ImagePicker .js

// Import React
import React, { useState } from 'react';
// Import required components
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    PermissionsAndroid,
    Icon,
    TouchableHighlight
} from 'react-native';

// Import Image Picker
import * as ImagePicker from 'react-native-image-picker';
//import Geolocalisation

// import ImagePicker from 'react-native-image-picker';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
import { connect } from 'react-redux'

class AvatarProfile extends React.Component {

    constructor(props) {
        super(props)

        // this.setState est appelé dans un callback dans showImagePicker, pensez donc bien à binder la fonction _avatarClicked
        this._onClickTakePhoto = this._onClickTakePhoto.bind(this)
        this._onClickChooseFromLibrary = this._onClickChooseFromLibrary.bind(this)
    }

    //const [filePath, setFilePath] = useState([]);


    requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };


    requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };
    /****************************************************************************************** */

    _onClickTakePhoto = () => {
        ImagePicker.launchCamera({}, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                const uri = response?.assets && response.assets[0].uri
                console.log('Photo : ', uri)
                let requireSource = { uri: uri }
                //const source = { uri: 'data:image/jpeg;base64,' + response.data };
                //console.log('source = ',source)
                // On crée une action avec l'image prise et on l'envoie au store Redux
                const action = { type: "SET_AVATAR", value: requireSource }
                this.props.dispatch(action)
            }
        })
        this.props.navigation.goBack("Favorites")
    }


    _onClickChooseFromLibrary = () => {

        ImagePicker.launchImageLibrary({}, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('L\'utilisateur a annulé')
            }
            else if (response.error) {
                console.log('Erreur : ', response.error)
            }
            else {
                const uri = response?.assets && response.assets[0].uri
                console.log('Photo : ', uri)
                let requireSource = { uri: uri }
                //const source = { uri: 'data:image/jpeg;base64,' + response.data };
                //console.log('source = ',source)
                // On crée une action avec l'image prise et on l'envoie au store Redux
                const action = { type: "SET_AVATAR", value: requireSource }
                this.props.dispatch(action)
            }
        })
        this.props.navigation.goBack("Favorites")
    }
    _avatarClicked = () => {
        console.log("URI --> ", this.props)
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.titleText}>Changer votre Photo de profile</Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={this._avatarClicked}
                        navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    >
                        {/* A présent on peut récupérer notre avatar dans les props. Souvenez-vous Redux mappe notre state global et ses données dans les props de notre component. */}
                        <Image style={styles.avatar} source={this.props.avatar} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={this._onClickTakePhoto}
                        navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    >
                       <View style={styles.viewStyle}>
                       <Image style={styles.iconStyle} source={require('../Images/ic_camera.png')} />
                        <Text style={styles.textStyle}>
                            Prendre Photo
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={this._onClickChooseFromLibrary}
                        navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    >
                        <View style={styles.viewStyle}>
                            <Image style={styles.iconStyle} source={require('../Images/ic_library.png')} />
                            <Text style={styles.textStyle}>Choisir Image</Text>
                        </View>
                    </TouchableOpacity >
                </View>
            </SafeAreaView>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FBEEE6',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
        color: '#fff',
        backgroundColor: '#5472AE',
    },
    textStyle: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#84A3CD',
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        width: 300,
        borderColor: '#5472AE',
        borderWidth: 1,
    },
  
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
        resizeMode: 'stretch',

    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: '#9B9B9B',
        borderWidth: 2
    },
    iconStyle: {
        width: 25,
        height: 25,
        padding: 18
    }, 
    viewStyle: {
    flexDirection: 'row'
  },
});

// On mappe l'avatar aux props de notre component
const mapStateToProps = state => {
    return {
        avatar: state.setAvatar.avatar
    }
}

export default connect(mapStateToProps)(AvatarProfile)