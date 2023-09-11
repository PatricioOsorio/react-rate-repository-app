import React from 'react';
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Error404 from './Error404';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Trabajando en ello</Text>} />
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </View>
  );
};

export default Main;
