import React from 'react';
import { Text, View, FlatList } from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    ></FlatList>
  );
};

export default RepositoryList;
