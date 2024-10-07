import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const PersonalDetails = ({ isDarkMode }) => {
  const instagramLink = 'https://www.instagram.com/jedplusauce/'; 
  const githubLink = 'https://github.com/jademariel'; 

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
        Connect with Me!
      </Text>

      {/* QR Code for Instagram */}
      <View style={styles.qrContainer}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Scan to visit my Instagram:
        </Text>
        <QRCode
          value={instagramLink}
          size={130} // Adjusted size
          color={isDarkMode ? '#ffffff' : '#000000'} 
          backgroundColor={isDarkMode ? '#000000' : '#ffffff'} 
        />
      </View>

      {/* QR Code for GitHub */}
      <View style={styles.qrContainer}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Scan to visit my GitHub:
        </Text>
        <QRCode
          value={githubLink}
          size={130} 
          color={isDarkMode ? '#ffffff' : '#000000'} 
          backgroundColor={isDarkMode ? '#000000' : '#ffffff'} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 15, 
  },
  // Light Mode
  container: {
    padding: 35,
    borderRadius: 25,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: '#DA8359',
    width: '80%',
  },
  lightTitle: {
    color: '#000',
  },
  lightText: {
    color: '#000',
  },
  // Dark Mode
  darkContainer: {
    backgroundColor: '#243642',
  },
  darkTitle: {
    color: '#fff',
  },
  darkText: {
    color: '#fff',
  },
});

export default PersonalDetails;
