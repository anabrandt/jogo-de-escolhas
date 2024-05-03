import { View, Text, Button } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

function HomeScreen() {

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title='LOGOUT' onPress={logOut} />
      </View>
    );
  }

export default HomeScreen;