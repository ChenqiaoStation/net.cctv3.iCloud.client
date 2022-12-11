import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import ToolBar from '@src/components/ToolBar';
import React, {useEffect} from 'react';
import {Linking, Platform, Text, TouchableOpacity} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {PERMISSIONS, request} from 'react-native-permissions';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const Writer: React.FC<MyProps> = props => {
  const {route, navigation} = props;
  const [logs, bears, increasePopulation, mergeLogs] = useStore(state => [
    state.logs,
    state.bears,
    state.increasePopulation,
    state.mergeLogs,
  ]);

  let audioRecorderPlayer = null;

  useEffect(() => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        ios: PERMISSIONS.IOS.MICROPHONE,
      }),
    ).then(result => {
      if (result == 'granted' || result == 'limited') {
        audioRecorderPlayer = new AudioRecorderPlayer();
      } else {
        Linking.openSettings();
      }
    });
    return function () {};
  }, []);

  return (
    <>
      <ToolBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title="测试页面"
      />
      <TouchableOpacity
        onPress={async () => {
          await audioRecorderPlayer.startRecorder();
        }}>
        <Text>开始</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          const result = await audioRecorderPlayer.stopRecorder();
          console.log({AudioRecorderResult: result});
        }}>
        <Text>结束</Text>
      </TouchableOpacity>
    </>
  );
};

export default Writer;
