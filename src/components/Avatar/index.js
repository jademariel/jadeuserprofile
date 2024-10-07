import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/propayl.png')}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',      
    top: 160,                  
    right: 20,                 
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 130,
    height: 145,
    borderRadius: 99,
    borderWidth: 1,            
    borderColor: '#E2F1E7',  
  },
});

export default Avatar;