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
        <Text style={[styles.text, styles.italicText, isDarkMode ? styles.darkText : styles.lightText]}>
          Scan to visit my Instagram:
        </Text>
        <QRCode
          value={instagramLink}
          size={130}  
          color={isDarkMode ? '#ffffff' : '#000000'} 
          backgroundColor={isDarkMode ? '#000000' : '#ffffff'} 
        />
      </View>

      {/* QR Code for GitHub */}
      <View style={styles.qrContainer}>
        <Text style={[styles.text, styles.italicText, isDarkMode ? styles.darkText : styles.lightText]}>
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
  container: {
    padding: 25,
    borderRadius: 35,
    marginVertical: 69,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: '#E2F1E7',
    width: '80%',
  },
  text: {
    fontSize: 13,
    marginBottom: 5,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  lightTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold', // Make "Connect with Me!" bold
  },
  lightText: {
    color: '#000',
  },
  darkContainer: {
    backgroundColor: '#243642',
  },
  darkTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold', // Make "Connect with Me!" bold
  },
  darkText: {
    color: '#fff',
  },
  italicText: {
    fontStyle: 'italic', // Make "Scan to visit my Instagram/GitHub" italic
  },
});

export default PersonalDetails;
