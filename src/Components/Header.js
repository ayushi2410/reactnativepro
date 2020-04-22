import React from 'react';
import {Text,StyleSheet ,View,Button ,TouchableOpacity ,Image} from 'react-native';
const Header=()=>{
	return (
		<View style={{backgroundColor:'#eee'}}>
  	<View  style={styles.containerstyles} >
  	  <View style={{ justifyContent: 'center',
    alignItems: 'center',}}>
       <Image source={ require('../../assets/forest.jpg') } style = {{height: 150, width: 150,borderRadius:150/2,alignItems:'center'}} />
       </View>
       <Text style={{textAlign: 'center',fontSize:30,margin:10, fontFamily: 'Roboto',fontWeight:'bold',opacity:0.6}}>EMERGENCY</Text>
       <Text style={{textAlign: 'center',fontSize:15,color:'#C0C0C0'}}>Rescue animals or call support for pets</Text>
   
      <View style={styles.MainContainer}>
       
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          
       >
 
            <Text style={styles.TextStyle}>Book Pet Ambulance</Text>
            
      </TouchableOpacity>

       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          
       >
            <View>
            <Text style={styles.TextStyle}>Contact Vets</Text>
           
            </View>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          
       >
 
            <Text style={styles.TextStyle}>Contact Pharmacy</Text>
            
      </TouchableOpacity>
      <Text style={{textAlign: 'center',color:'#C0C0C0',margin:10}}>Or Call us at 800-082-2800 for assistance</Text>
       </View>
     
   
  	    </View>
</View>
		);
};
const styles = StyleSheet.create({
  	   MainContainer: {
    justifyContent: 'center'
  },
 
  SubmitButtonStyle: {
 
    marginTop:15,
    paddingTop:10,
    paddingBottom:20,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:30,
    shadowRadius:50,
    elevation:4,
    borderColor: '#eee',
   shadowColor:'black'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:17,
  },
  containerstyles:{
justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        backgroundColor:'#fff',
        borderRadius:70,
        shadowRadius: 2,
        height:'95%',
        margin: 20,
       elevation:2
      
  }
});
export default Header;
