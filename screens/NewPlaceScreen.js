import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";
import * as placesActions from "../store/places-actions";

const NewPlaceScreen = ({ navigation, route }) => {
  navigation.setOptions({
    headerTitle: "Add Place",
  });
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setselectedLocation] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(
      placesActions.addPlace(titleValue, selectedImage, selectedLocation)
    );
    navigation.goBack();
  };
  const locationPickedHandler = (location) => {
    setselectedLocation(location);
  };
  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTake={imageTakenHandler} />
        <LocationPicker
          navigation={navigation}
          route={route}
          onLocationPicked={locationPickedHandler}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
