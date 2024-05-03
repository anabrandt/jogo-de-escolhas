import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebaseConfig } from './firebaseConfig'
import { initializeApp } from "firebase/app";
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Stack = createNativeStackNavigator();

initializeApp(firebaseConfig);

const Loading = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        LOADING!!!
      </Text>
    </View>
  )
}


function App() {
  const [isAuth, setIsAuth] = React.useState(undefined)

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    });
  }, [])

  if (isAuth === undefined) {
    return Loading();
  }

  return (
    <NavigationContainer>
      {
        isAuth ? 
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> :
        <Stack.Navigator initialRouteName='Login' >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;