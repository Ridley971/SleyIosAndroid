import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Tutos from '../Components/Training/Tutos'
import MesVotes from '../Components/Training/MesVotes'
import AntrenmanStackNav from './AntrenmanStackNav'
import SleyTabNav from './SleyTabNav'
import Planning from "../Components/Planning"
import {DrawerContent} from "../Components/CustomComponent/DrawerContent"


const Drawer = createDrawerNavigator();

export default function SleyDrawerNav() {
  return (
      <Drawer.Navigator
            drawerContent={props => <DrawerContent{...props}/>}
            drawerStyle={{
              backgroundColor: 'rgba(255, 255, 0, 0.9)',
              width: 230,
            }}>
        <Drawer.Screen name="Accueil" component={SleyTabNav} />
        <Drawer.Screen name="Réserver" component={AntrenmanStackNav} />
        <Drawer.Screen name="Mes Réservations" component={Planning } />
        <Drawer.Screen name="Mes Votes" component={MesVotes} />
        <Drawer.Screen name="Tutos" component={Tutos} />
      </Drawer.Navigator>
  );
}
