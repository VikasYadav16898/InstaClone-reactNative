import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button, Text, HStack, VStack, Heading} from 'native-base';

import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {signOut} from '../action/auth';

const CustomHeader = ({signOut, authState, navigation, route}) => {
  return (
    <VStack>
      <Heading
        style={{
          backgroundColor: '#0f4c75',
        }}></Heading>
      <HStack>
        <Heading>Social App.</Heading>
      </HStack>
      <HStack>
        <>
          {authState.isAuthenticated && (
            <>
              <Button
                transparent
                onPress={() => {
                  navigation.navigate('AddPost');
                }}>
                <Text>+</Text>
              </Button>
              <Text style={{color: '#fdcb9e'}}> Add Post. </Text>
              <Button transparent onPress={() => signOut()}>
                <Text>Sign Out.</Text>
              </Button>
            </>
          )}
        </>
      </HStack>
    </VStack>
  );
};

const mapStateToProps = state => ({
  authState: state.auth,
});

const mapDispatchToProps = {
  signOut,
};

CustomHeader.prototypes = {
  signOut: propTypes.func.isRequired,
  authState: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
