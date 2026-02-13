import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {}
     <Image
        source={{ uri: 'https://i.pinimg.com/originals/1c/b6/b0/1cb6b03ad1094644125d392f8e5da90e.jpg' }}
        style={styles.image}
      />

      {}
      <Text style={styles.name}>Suzaina khan</Text>
      <Text style={styles.role}>Android / React Native Developer</Text>

      {}
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.text}>
        Passionate developer interested in Java, Data Structures & Algorithms, and mobile app development. Experienced with React Native, strong in problem solving, and knowledgeable in computer networking fundamentals. Always eager to learn and build efficient, scalable solutions.
      </Text>

      {}
      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.text}>• Java</Text>
      <Text style={styles.text}>• DSA</Text>
      <Text style={styles.text}>• Git & GitHub</Text>
      <Text style={styles.text}>• Android Development</Text>

      {}
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.text}>Bachelor of Computer Applications</Text>
      <Text style={styles.text}>Computer Science</Text>

      {}
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.text}>📧 suzainakhanumbca24@rvu.edu.in</Text>
      <Text style={styles.text}>📱 +91 9686801933</Text>

      {}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download Resume</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginRight: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
