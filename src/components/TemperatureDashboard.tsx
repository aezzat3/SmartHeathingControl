import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fetchTemperature} from '../utils/fetchTemperature';

const TemperatureDashboard: React.FC = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [cache, setCache] = useState<{
    timestamp: number | null;
    value: number | null;
  }>({timestamp: null, value: null});

  useEffect(() => {
    const fetchData = async () => {
      const now = Date.now();
      if (cache.timestamp && now - cache.timestamp < 5000) {
        setTemperature(cache.value);
      } else {
        const temp = await fetchTemperature();
        setTemperature(temp);
        setCache({timestamp: now, value: temp});
      }
    };

    const interval = setInterval(fetchData, 5000);
    fetchData();

    return () => clearInterval(interval);
  }, [cache]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Temperature: {temperature}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  label: {fontSize: 18},
});

export default TemperatureDashboard;
