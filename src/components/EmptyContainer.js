import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {NativeBaseProvider, Container, Spinner} from 'native-base';
const EmptyContainer = () => {
  return (
    <NativeBaseProvider>
      <Container style={styles.emptyContainer}>
        <Spinner />
      </Container>
    </NativeBaseProvider>
  );
};

export default EmptyContainer;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
