import React from 'react'
import {StyleSheet, View, Text,Button,Image,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import SleyBackground from "../CustomComponent/SleyBackground"
import StepsTitle from "../CustomComponent/StepsTitle"

class Step2 extends React.Component {

  _NextStep(sexe) {
    const action = { type: "UPDATE_SEXE", value: sexe }
    this.props.dispatch(action)
    this.props.navigation.navigate("Step3")
   }

  render()
  {
     console.log(this.props)
    return(
      <SleyBackground>
        <StepsTitle style={{flex:1}}>Quel est votre Sexe ?</StepsTitle>

        <View style={styles.gender_container}>
          <TouchableOpacity
          style={styles.touchMale}
          onPress={() => {this._NextStep("M")}}>
          <Image
              style={{width:150, height: 150}}
              source={require('../../assets/gender-Male.png')}
                />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchFemale}
           onPress={() => {this._NextStep("F")}}>

          <Image
              style={{width: 150, height: 150}}
              source={require('../../assets/gender-Female.png')}
                />
          </TouchableOpacity>
        </View>


    </SleyBackground>
    )
  }
}
const styles={

  gender_container:{
    flex:5,
    justifyContent:"space-between",
    alignItems: 'flex-start',
    flexDirection:"row"
  },
}

const mapStateToProps = (state) => {
  return {
   sexe: state.sexe
 }
}

export default connect(mapStateToProps)(Step2)
