// Components/GeoLocalisation .js

// Import React
import React from 'react';
// Import required components
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
   
} from 'react-native';


import { connect } from 'react-redux'

class GeoLocalisation extends React.Component {

    constructor(props) {
        super(props)

    }

    _getLocalisation = () => {
        this.props.navigation.navigate("Localisation")
    }
    _getMap = () => {
        this.props.navigation.navigate("Position")
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.titleText}>Geo Localisation</Text>
                <View style={styles.container}>
            
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyleLocalisation}
                        onPress={this._getLocalisation}
                        navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    ><View style={styles.viewStyle}>
                    <Image style={styles.iconStyle} source={require('../Images/ic_localisation.png')} />
                        <Text style={styles.textStyle}>Geolocation</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyleLocalisation}
                        onPress={this._getMap}
                        navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    ><View style={styles.viewStyle}>
                    <Image style={styles.iconStyle} source={require('../Images/ic_map.png')} />
                        <Text style={styles.textStyle}>Map</Text>
                        </View>
                    </TouchableOpacity>
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
        backgroundColor: '#CD5C5C',
    },
    textStyle: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    
    buttonStyleLocalisation: {
        alignItems: 'center',
        backgroundColor: '#E18398',
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        width: 300,
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
        resizeMode: 'stretch',

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

export default connect(mapStateToProps)(GeoLocalisation)