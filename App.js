import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderCover from './src/components/HeaderCover';
import Avatar from './src/components/Avatar';
import DarkModeToggle from './src/components/DarkMode';
import PersonalDetails from './src/components/PersonalDetails';
import SignOutButton from './src/components/SignOutButton'; 

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  const handleSignOut = () => {
    
    console.log("User signed out");
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <HeaderCover isDarkMode={isDarkMode} />
      <Avatar />

      <PersonalDetails isDarkMode={isDarkMode} />
      <DarkModeToggle toggle={toggleDarkMode} isDarkMode={isDarkMode} />
      
      {/* Pass isDarkMode to SignOutButton for dark mode support */}
      <SignOutButton onSignOut={handleSignOut} isDarkMode={isDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FEFAE0',
  },
  darkBackground: {
    backgroundColor: '#2c2c2c',
  },
});
