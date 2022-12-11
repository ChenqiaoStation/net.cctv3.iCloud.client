import {useDip} from '@src/utils';
import React from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface MyProps {
  onSearchPress: () => void;
  onMorePress: (index: number) => void;
}

const TabBar: React.FC<MyProps> = props => {
  const {onSearchPress, onMorePress} = props;
  return (
    <View
      style={{
        height: useDip(44),
        backgroundColor: 'white',
        paddingHorizontal: 12,
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#eee',
            paddingHorizontal: 12,
            borderRadius: 5,
            height: useDip(28),
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}
          onPress={() => {}}>
          <Image
            source={require('@src/images/tab_search.png')}
            style={{height: useDip(18), width: useDip(18), tintColor: '#999'}}
          />
          <View style={{width: 12}} />
          <Text
            style={{flex: 1, fontSize: useDip(14), color: '#999'}}
            numberOfLines={1}>
            全民聊足球 ⚽️
          </Text>
        </TouchableOpacity>
        <View style={{width: 12}} />
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('@src/images/tab_present.png')}
            style={{height: useDip(20), width: useDip(20)}}
          />
        </TouchableOpacity>
        <View style={{width: 12}} />
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('@src/images/tab_message.png')}
            style={{height: useDip(20), width: useDip(20)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabBar;
