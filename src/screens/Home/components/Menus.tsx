import {useDip} from '@src/utils';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface MyProps {}

const Menus: React.FC<MyProps> = props => {
  /** https://www.iconfont.cn/collections/detail?cid=42791 */
  const MENUS = [
    {name: '笔记', value: '/', src: require('@src/images/folder_note.png')},
    {name: '相册', value: '/', src: require('@src/images/folder_album.png')},
    {name: '收藏', value: '/', src: require('@src/images/folder_love.png')},
    {name: '视频', value: '/', src: require('@src/images/folder_video.png')},
    {name: '录音', value: '/', src: require('@src/images/folder_audio.png')},
  ];

  return (
    <View style={styles.viewMenus}>
      {MENUS.map((it, i) => (
        <TouchableOpacity
          key={i}
          style={{alignItems: 'center'}}
          onPress={() => {}}
          activeOpacity={0.88}>
          <Image
            source={it.src}
            style={{
              height: useDip(36),
              width: useDip(36),
            }}
          />
          <View style={{height: 4}} />
          <Text style={{color: '#333', fontSize: 12}}>{it.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  viewMenus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginHorizontal: 12,
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default Menus;
