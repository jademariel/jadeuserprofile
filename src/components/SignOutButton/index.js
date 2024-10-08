import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const SignOutButton = ({ onSignOut, isDarkMode }) => {
  return (
    <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.darkButton]} onPress={onSignOut}>
      <Icon 
        name="exit-to-app"              
        size={18}                        
        color={isDarkMode ? '#fff' : '#000'} 
        style={styles.icon} 
      />
      <Text style={[styles.signOutText, isDarkMode && styles.darkText]}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    marginTop: 60,                   
    backgroundColor: '#ECDFCC',      
    paddingVertical: 15,             
    paddingHorizontal: 35,           
    borderRadius: 21,
    borderWidth: 2,                  
    borderColor: '#FCFAEE',          
    flexDirection: 'row',            
    alignItems: 'center',            
    justifyContent: 'center',        
  },
  darkButton: {
    backgroundColor: '#3e3e3e',      
    borderColor: '#5e5e5e',          
  },
  signOutText: {
    color: '#000',                   
    fontSize: 14,                    
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 8,                  
  },
  darkText: {
    color: '#fff',                   
  },
  icon: {
    marginRight: 6,                  
  },
});

export default SignOutButton;
