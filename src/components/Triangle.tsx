import React from 'react';
import {Animated, Pressable} from 'react-native';
import {styles} from '../styles.ts';

const Triangle = ({
  collapsed,
  toggleCollapsed,
}: {
  collapsed: boolean;
  toggleCollapsed: Function;
}) => {
  return (
    <Pressable
      onPress={toggleCollapsed}
      style={{
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          styles.triangle,
          {transform: [{rotateX: collapsed ? '0deg' : '180deg'}]},
        ]}
      />
    </Pressable>
  );
};

Triangle.propTypes = {};

export default Triangle;
