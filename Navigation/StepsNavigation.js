// Navigation/StepsNavigation.js

import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import Step1 from '../Components/Steps/Step1'
import Step2 from '../Components/Steps/Step2'
import Step3 from '../Components/Steps/Step3'
import Step4 from '../Components/Steps/Step4'
import Step5 from '../Components/Steps/Step5'
import Step6 from '../Components/Steps/Step6'
import Step7 from '../Components/Steps/Step7'
import Step8 from '../Components/Steps/Step8'
import Accueil from '../Components/Accueil'


const StepsStackNavigator = createStackNavigator({
  Step1: {
    screen: Step1,
    navigationOptions: {
      title: 'Etape 1',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step2: {
    screen: Step2,
    navigationOptions: {
      title: 'Etape 2',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step3: {
    screen: Step3,
    navigationOptions: {
      title: 'Etape 3',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step4: {
    screen: Step4,
    navigationOptions: {
      title: 'Etape 4',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step5: {
    screen: Step5,
    navigationOptions: {
      title: 'Etape 5',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step6: {
    screen: Step6,
    navigationOptions: {
      title: 'Etape 6',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step7: {
    screen: Step7,
    navigationOptions: {
      title: 'Etape 7',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    }
  },
  Step8: {
    screen: Step8,
    navigationOptions: {
      title: 'Etape 8',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'}
    },
  },

  Accueil: {
    screen: Accueil,
    navigationOptions: {
      title: 'Accueil',
      headerStyle: {backgroundColor: 'rgba(255, 255, 0, 0.7)'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerShown: false
    },
  }
});

export default createAppContainer(StepsStackNavigator)
