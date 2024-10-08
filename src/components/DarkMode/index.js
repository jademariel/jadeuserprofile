import React from 'react';
import { Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const DarkModeToggle = ({ toggle, isDarkMode }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isDarkMode && styles.darkContainer]} 
      onPress={toggle}
    >
      <Icon 
        name={isDarkMode ? 'light-mode' : 'dark-mode'} 
        size={18}  // Smaller icon size
        color={isDarkMode ? '#fff' : '#000'} 
        style={styles.icon} 
      />
      <Text style={[styles.label, isDarkMode && styles.darkLabel]}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Text>
      <Switch
        onValueChange={toggle}
        value={isDarkMode}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,                   
    borderRadius: 21,             
    backgroundColor: '#ECDFCC',
    margin: -55,                   
    borderWidth: 2,
    borderColor: '#FCFAEE',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,                
    marginHorizontal: 8,         
    color: '#000',               
  },
  darkContainer: {
    backgroundColor: '#3e3e3e', 
    borderColor: '#FCFAEE',
  },
  darkLabel: {
    color: '#fff',               
  },
  icon: {
    marginRight: 6,
  },
});

export default DarkModeToggle;
