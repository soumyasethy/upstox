import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {
  AnimationDuration,
  ModalHeightClose,
  ModalHeightOpen,
} from '../constants.ts';
import Triangle from './Triangle.tsx';

export const CollapseView = ({children}: {children: ReactNode | null}) => {
  const [collapsed, setCollapsed] = useState(true);
  const animationHeight = useRef(new Animated.Value(16)).current;
  const [fadeAnim] = useState(new Animated.Value(0));

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const collapseView = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
    }).start();
    Animated.spring(animationHeight, {
      duration: AnimationDuration,
      toValue: ModalHeightClose,
      useNativeDriver: false,
    }).start();
  };

  const expandView = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
    }).start();
    Animated.spring(animationHeight, {
      duration: AnimationDuration,
      toValue: ModalHeightOpen,
    }).start();
  };

  useEffect(() => {
    if (collapsed) {
      collapseView();
    } else {
      expandView();
    }
  }, [collapsed]);

  return (
    <Animated.View
      style={{
        height: animationHeight,
        justifyContent: 'flex-start',
        alignItem: 'center',
        backgroundColor: 'white',
      }}>
      <Triangle collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};
