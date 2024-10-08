import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NameTitle = ({ isDarkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>Jade Mariel</Text>
      <Text style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}>Plazos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 5,
    left: 6,           
    alignItems: 'flex-start', 
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10, 
  },

  last: {
    fontSize: 16,
    marginTop: -2,  
  },

// Light mode 
lightTitle: {
  color: 'black', 
  borderColor: '#DA8359',
  backgroundColor: '#ECDFCC', 
},

lightText: {
  color: '#ffff', 
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
},

// Dark mode 
  darkTitle: {
    color: '#fff', 
    borderColor: '#387478',
    backgroundColor: '#243642', 
  },

  darkText: {
    color: '#000', 
    textShadowColor: '#ffe5ff', 
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2, 
  },
});

export default NameTitle;