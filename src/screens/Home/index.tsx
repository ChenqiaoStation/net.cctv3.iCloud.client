import React, {useState} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Menus, TabBar} from './components';

interface MyProps {}

const Home: React.FC<MyProps> = props => {
  const [refreshing, setRefreshing] = useState(false);
  
  return (
    <View style={{flex: 1}}>
      <View
        style={{height: useSafeAreaInsets().top, backgroundColor: 'white'}}
      />
      <TabBar onSearchPress={() => {}} onMorePress={index => {}} />
      <FlatList
        data={Array.from({length: 10})}
        refreshControl={
          <RefreshControl onRefresh={() => {}} refreshing={refreshing} />
        }
        renderItem={info => (
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {}}></TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <View style={{paddingVertical: 5}}>
            <Menus />
          </View>
        )}
      />
    </View>
  );
};

export default Home;
