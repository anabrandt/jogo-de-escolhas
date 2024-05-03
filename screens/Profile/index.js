import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [newName, setNewName] = useState('');

  // updateProfile(auth.currentUser, {
  //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(() => {
  //   // Profile updated!
  //   // ...
  // }).catch((error) => {
  //   // An error occurred
  //   // ...
  // });

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {"Seu nome é: Fulano, gostaria de trocar?"}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setNewName}
          value={newName}
          placeholder="Novo Nome"
        />
        <Button
          title="Change Name"
          onPress={() => {}}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-around',
      backgroundColor: '#fdb',
      alignItems: 'center',
      flex: 1,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#eee'
    },
    title: {
      fontSize: 23,
      fontWeight: 'bold'
    }
  });

export default ProfileScreen;