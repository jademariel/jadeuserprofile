import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationIcon = ({ isDarkMode }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isDarkMode && styles.darkContainer]} 
      onPress={() => alert('No new notifications!')}
    >
      <Icon 
        name="notifications" 
        size={24} 
        color={isDarkMode ? '#fff' : '#000'} 
        style={styles.icon} 
      />
      <Text style={[styles.label, isDarkMode && styles.darkLabel]}>
        Notifications
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ECDFCC',
    margin: 10,
    borderWidth: 2,
    borderColor: '#DA8359',
    justifyContent: 'flex-start',
  },

  label: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },

  darkContainer: {
    backgroundColor: '#3e3e3e',
  },

  darkLabel: {
    color: '#fff',
  },

  icon: {
    marginRight: 6,
  },
});

export default NotificationIcon;
