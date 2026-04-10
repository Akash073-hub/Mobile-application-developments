import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

type Props = {
  navigation: any;
};

const Profile = ({ navigation }: Props) => {
  const [text, setText] = useState<string>('');
  const [submittedText, setSubmittedText] = useState<string>('');

  const handleSubmit = () => {
    setSubmittedText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <TextInput
        placeholder="Enter something..."
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
      />

      <Button title="Submit Text" onPress={handleSubmit} />

      {submittedText ? (
        <Text style={styles.result}>Result: {submittedText}</Text>
      ) : null}

      <View style={{ marginTop: 15 }} />

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  result: {
    marginTop: 15,
    fontSize: 18,
  },
});
