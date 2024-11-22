import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const TemperatureSlider: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(20);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Temperature: {temperature}°C</Text>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={30}
        step={1}
        value={temperature}
        onValueChange={setTemperature}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#8E8E93"
        thumbTintColor="#1EB1FC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  label: {fontSize: 18, marginBottom: 10},
  slider: {width: 300, height: 40},
});

export default TemperatureSlider;
