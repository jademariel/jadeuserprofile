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
            size={24} 
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

      // Light mode 
        container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: -1,
        borderRadius: 100,
        backgroundColor: '#ECDFCC', 
        margin: 25,
        borderWidth: 2,          
        borderColor: '#DA8359',
        justifyContent: 'flex-start', 
        marginLeft: -120
      },

      label: {
        marginRight: 10,
        fontSize: 16,
        color: '#000',
      },

      // Dark mode
      darkContainer: {
        backgroundColor: '#3e3e3e', 
        borderRadius: 10,        
        borderWidth: 2,          
        borderColor: '#DA8359',
      },
      
      darkLabel: {
        color: '#fff', 
      },

      icon: {
        marginRight: 6, 
      },
    });

    export default DarkModeToggle;