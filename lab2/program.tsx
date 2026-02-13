import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  SafeAreaView,
  Alert
} from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello, World!</Text>

      <Image
        source={{ uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" }}
        style={{ width: 200, height: 200 }}
      />

      <Button
        title="Click Me"
        onPress={() => Alert.alert("Button clicked")}
      />

      <TouchableOpacity>
        <Text>Me Touchable</Text>
      </TouchableOpacity>

      <Pressable onLongPress={() => Alert.alert("Long press detected!")}>
        <Text>Me Pressable</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
