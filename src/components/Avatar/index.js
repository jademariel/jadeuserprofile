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
    top: 130,                  
    right: 1,                 
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 135,
    height: 135,
    borderRadius: 99,
    borderWidth: 2,            
    borderColor: '#FCFAEE',  
  },
});

export default Avatar;