import React, {useRef} from 'react';
import {Text, TouchableOpacity, Animated} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCollapsibleStack} from 'react-navigation-collapsible';

import {StackParamList} from '../App';

const data: number[] = [];
for (let i = 0; i < 100; i++) {
  data.push(i);
}

type ScreenProps = {
  navigation: StackNavigationProp<StackParamList>;
};

const DefaultHeaderScreen = ({navigation}: ScreenProps) => {
  const {
    onScroll,
    // onScrollWithListener,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleStack();

  const list = useRef();

  /* in case you want to use your listener
  const listener = ({nativeEvent}) => {
    console.log(nativeEvent);
  };
  const onScroll = onScrollWithListener(listener);
  */

  return (
    // <Animated.FlatList
    //   data={data}
    //   onScroll={onScroll}
    //   contentContainerStyle={{paddingTop: containerPaddingTop}}
    //   scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
    //   renderItem={({item}: any) => (
    //     <TouchableOpacity
    //       onPress={() => navigation.navigate('Detail')}
    //       style={{
    //         width: '100%',
    //         height: 50,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderBottomColor: 'gray',
    //         borderBottomWidth: 1,
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 22,
    //         }}>
    //         {item}
    //       </Text>
    //     </TouchableOpacity>
    //   )}
    //   keyExtractor={(item: any) => item.toString()}
    // />
    <Animated.FlatList
      contentContainerStyle={{paddingTop: containerPaddingTop}}
      data={data}
      keyExtractor={(_: any, index: {toString: () => any}) => index.toString()}
      nestedScrollEnabled
      onScroll={onScroll}
      ref={list}
      renderItem={({item}: any) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 22,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      // scrollEventThrottle={scrollEventThrottle}
      scrollIndicatorInsets={{
        top: scrollIndicatorInsetTop,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}
    />
  );
};

export {DefaultHeaderScreen};
