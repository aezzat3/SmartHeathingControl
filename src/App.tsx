import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TemperatureSlider from './components/TemperatureSlider';
import TemperatureDashboard from './components/TemperatureDashboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TemperatureSlider />
      <TemperatureDashboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
