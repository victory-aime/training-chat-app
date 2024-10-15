import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { ChatIcon } from '_assets/svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorType } from '_theme/variables';
import { styles } from './styles';

const HeaderApp = (props: any) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.insideContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://lms.horizon-university.tn/pluginfile.php/1/theme_space/customsidebarlogo/1728261807/logo%20HORIZON-%20light.png',
            }}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <ChatIcon width={24} height={24} fill={ColorType.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderApp;
