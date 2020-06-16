import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import MapPreview from "../components/MapPreview";
import { useSelector } from "react-redux";

import Colors from "../constants/Colors";

const PlaceDetailScreen = ({ navigation, route }) => {
  const { placeTitle, placeId } = route.params;
  const selectedPlace = useSelector((state) => {
    return state.places.places.find((place) => {
      return place.id === placeId;
    });
  });

  navigation.setOptions({
    headerTitle: placeTitle,
  });
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={{ uri: selectedPlace.imageUrl }} style={styles.image} />
      <View style={styles.locationContaier}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Latitude:{selectedPlace.lat}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Longitude:{selectedPlace.lng}</Text>
        </View>
      </View>
      <MapPreview
        location={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
        style={styles.mapPreview}
      />
    </ScrollView>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  locationContainer: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary,
    textAlign: "center",
  },
  mapPreview: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
