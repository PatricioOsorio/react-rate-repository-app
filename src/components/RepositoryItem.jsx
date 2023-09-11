import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import RepositoryStats from './RepositoryStats';
import RepositoryItemHeader from './RepositoryItemHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 5,
  },
});

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

export default RepositoryItem;
