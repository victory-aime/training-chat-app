import { Image, View } from 'react-native';
import React from 'react';
import { styles } from '_screens/auth/styles/styles.ts';

const Banner = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: 'https://lms.horizon-university.tn/pluginfile.php/1/theme_space/customsidebarlogo/1728261807/logo%20HORIZON-%20light.png',
        }}
        style={styles.imageStyle}
        resizeMode={'contain'}
        resizeMethod={'resize'}
      />
    </View>
  );
};

export default Banner;
