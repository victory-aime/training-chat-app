import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BaseText } from '_components/baseText/baseText.tsx';
import { Avatar } from 'native-base';
import { SendIcon, UserIcon } from '_assets/svg';
import { SCREEN_HEIGTH } from '_utils/dynamic.utils.ts';
import DataListContainer from '_components/dataListContainer/DataListContainer';

const HomeScreen = () => {
  const fakeData = {
    userName: 'helloooo world',
    imageUrl:
      'https://lms.horizon-university.tn/pluginfile.php/1/theme_space/customsidebarlogo/1728261807/logo%20HORIZON-%20light.png',
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <DataListContainer
          gap={5}
          data={[fakeData]}
          isLoading={false}
          ItemRender={({ item, index }) => (
            <>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Avatar size={'md'} />
                  <BaseText> {item?.userName}</BaseText>
                </View>
                <UserIcon width={18} height={18} />
              </View>
              <View
                style={{
                  minHeight: SCREEN_HEIGTH - 500,
                  backgroundColor: 'red',
                }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={{ uri: item?.imageUrl }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 15,
                  }}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                      }}>
                      <SendIcon key={index} width={18} height={18} />
                      <BaseText>{index + 1} </BaseText>
                    </TouchableOpacity>
                  ))}
                </View>
                <View>
                  <BaseText>Hello World</BaseText>
                </View>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
