import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import BottomTab from '@src/components/BottomTab';
import {Home} from '@src/screens';
import Debug from '@src/screens/Debug';
import {useDip, useHomeIndicatorHeight} from '@src/utils';
import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Popover from 'react-native-popover-view';

import {RootStacksProp} from './Stacks';

const Tab = createBottomTabNavigator();
const MENUS = [
  {name: '笔记', value: '/', src: require('@src/images/folder_note.png')},
  {name: '照片', value: '/', src: require('@src/images/folder_album.png')},
  {name: '视频', value: '/', src: require('@src/images/folder_video.png')},
  {name: '录音', value: '/', src: require('@src/images/folder_audio.png')},
];
interface AppProps {
  navigation: RootStacksProp;
}

const tabs = [
  {
    name: '首页',
    screen: Home,
    icon: require('@src/images/menu_global.png'),
  },
  {
    name: '文件',
    screen: Debug,
    icon: require('@src/images/menu_book.png'),
  },
  {
    name: '分享',
    screen: Debug,
    icon: require('@src/images/menu_share.png'),
  },
  {
    name: '广场',
    screen: Debug,
    icon: require('@src/images/menu_message.png'),
  },
  {
    name: '我的',
    screen: Debug,
    icon: require('@src/images/menu_i.png'),
  },
];

const App: React.FC<AppProps> = props => {
  const {navigation} = props;
  const [isShowPopover, setIsShowPopover] = useState(false);

  useFocusEffect(
    useCallback(() => {
      return function () {
        setIsShowPopover(false);
      };
    }, []),
  );

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {Array.from(tabs, (_, i) => (
          <Tab.Screen
            key={i}
            name={tabs[i].name}
            component={tabs[i].screen}
            options={{
              tabBarLabel: tabs[i].name,
              tabBarBadge: Math.ceil(100 * Math.random()),
              tabBarButton: bottomTabBarButtonProps => (
                <BottomTab
                  {...bottomTabBarButtonProps}
                  item={_}
                  activeColor={'#987123'}
                  index={i}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>

      <View
        style={{
          position: 'absolute',
          bottom: useHomeIndicatorHeight() + useDip(64),
          right: 16,
        }}>
        <Popover
          isVisible={isShowPopover}
          verticalOffset={StatusBar.currentHeight * -1}
          popoverStyle={{backgroundColor: 'transparent'}}
          from={
            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.viewFloatButton}
              onPress={() => {
                setIsShowPopover(true);
              }}>
              <Image
                style={{
                  height: useDip(28),
                  width: useDip(28),
                  tintColor: 'white',
                }}
                source={require('@src/images/app_write.png')}
              />
            </TouchableOpacity>
          }>
          <View style={{}}>
            {Array.from(MENUS, (_, i) => (
              <TouchableOpacity
                activeOpacity={0.88}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 4,
                }}
                onPress={() => {
                  navigation.navigate('Writer');
                }}
                key={i}>
                <Image
                  style={{height: useDip(32), width: useDip(32)}}
                  source={_.src}
                />
                <View style={{width: 5}} />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 6,
                    paddingVertical: 4,
                    backgroundColor: '#333',
                    borderRadius: 4,
                  }}>
                  <Text style={{color: 'white', fontSize: useDip(14)}}>
                    {_.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Popover>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTabBarStyle: {
    height: useDip(56),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  viewFloatButton: {
    height: useDip(52),
    width: useDip(52),
    borderRadius: useDip(26),
    backgroundColor: '#987123',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
