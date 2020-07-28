import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {TouchableOpacity,Text} from 'react-native'

import Connexion from "../Components/Auth/Connexion"
import RsConnect from "../Components/Auth/RsConnection"
import Profile from "../Components/Auth/Profile"
import Accueil from "../Components/Accueil"
import Step1 from '../Components/Steps/Step1'
import Step2 from '../Components/Steps/Step2'
import Step3 from '../Components/Steps/Step3'
import Step4 from '../Components/Steps/Step4'
import Step5 from '../Components/Steps/Step5'
import Step6 from '../Components/Steps/Step6'
import Step7 from '../Components/Steps/Step7'
import Step8 from '../Components/Steps/Step8'
import SleyDrawerNav from './SleyDrawerNav'

const Stack = createStackNavigator()

function ConnexionStackNav() {
  return (
      <Stack.Navigator
        initialRouteName='Connexion'
        screenOptions={{
                  headerStyle: {
                    backgroundColor: 'rgba(255, 255, 0, 1)'
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  },
                  headerTintColor: 'black',
                }}>

        <Stack.Screen
          name='Connexion'
          component={Connexion}
          options={{ headerShown: false }}/>


          <Stack.Screen
            name='RsConnect'
            component={RsConnect}/>

                      <Stack.Screen
                        name='Profile'
                        component={Profile}/>
        <Stack.Screen
          name='Step1'
          component={Step1}/>

        <Stack.Screen
          name='Step2'
          component={Step2}/>

        <Stack.Screen
          name='Step3'
          component={Step3}/>

        <Stack.Screen
          name='Step4'
          component={Step4}/>

        <Stack.Screen
          name='Step5'
          component={Step5}/>

        <Stack.Screen
          name='Step6'
          component={Step6}/>

        <Stack.Screen
          name='Step7'
          component={Step7}/>

        <Stack.Screen
          name='Step8'
          component={Step8}/>

        <Stack.Screen
            name='SleyDrawerNav'
            component={SleyDrawerNav}
            options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default ConnexionStackNav
