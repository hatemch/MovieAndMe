// Components/MapPosition.js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';

export default function MapPosition() {

  const [pin, setPin] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })
  const GOOGLE_PLACES_API_KEY = 'AIzaSyDAeu6BCrWPJkjZFtSOvXUQULrOoQs8lL4'; // never save your real api key in a snack!

 /* const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude =
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        //setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        //setCurrentLatitude(currentLatitude);
        setPin({ currentLatitude, currentLongitude })
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };*/
  /*didMount = () => {
   // this.getOneTimeLocation();
   //alert(JSON.stringify(position))
  }*/
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
            padding: 10,
            color: "#000000",
            listView: { backgroundColor: "white" }
          }
        }}

      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker coordinate={pin}
          pinColor="black"
          draggable={true} // to change location of our pin marker
          onDragStart={(e) => {
            console.log('Drag start', e.nativeEvent.coordinates)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout>
            <Text style={styles.textCallout} >I' am here</Text>
          </Callout>
        </Marker>
        <Circle
          center={pin}
          radius={1000}>
        </Circle>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  map: {
    width: '100%',
    height: '100%'
  },
  textCallout: {
    color: 'black',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  google_container: {
    flex: 0,
    position: "absolute",
    widyh: "100%",
    zIndex: 1,
    listView: {
      backgroundColor: "white",
      color: 'black'
    },
    color: "black"
  }
})
