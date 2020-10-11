import  React from 'react';
import { StyleSheet,Text, View, Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileStackNav from "./ProfileStackNav"
import SleyDrawerNav from "./SleyDrawerNav"
import AccueilStackNav from "./AccueilStackNav"

import Boutique from "../Components/Boutique"
import Connexion from "../Components/Auth/Connexion"

const Tab = createBottomTabNavigator();

const  MainTabNav =({navigation})=>(
        <Tab.Navigator
           initialRouteName="AccueilStackNav"
            tabBarOptions={{
              showLabel:false,
              style: {
                         backgroundColor: 'rgba(255, 255, 0, 0.7)',
                       },
              activeBackgroundColor:'#FFF9B8'

            }}
          >

         <Tab.Screen name="Boutique"
            component={Boutique}
            options={{
                  tabBarLabel: 'Boutique',
                  tabBarIcon: () => {
                    return <Image
                      source={require('../assets/store3.png')}
                      style={styles.tab_Icon}/>
                  },
                }}/>

           <Tab.Screen name="AccueilStackNav"
              component={AccueilStackNav}
              options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: () => {
                      return <Image
                        source={require('../assets/home.png')}
                        style={styles.tab_Icon}/>
                    },
                  }}/>

           <Tab.Screen name="Profil"
            component={ProfileStackNav}
            options={{
                  tabBarLabel: 'Profil',
                  tabBarIcon: () => {
                    return <Image
                      source={require('../assets/profile.png')}
                      style={styles.tab_Icon}/>
                  },
                }}/>

        </Tab.Navigator>
  )


const styles = StyleSheet.create({
  tab_Icon: {
    height:20, width:20
  },
})
export default MainTabNav
