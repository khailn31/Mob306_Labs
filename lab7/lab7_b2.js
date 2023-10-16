import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationDisplay = ({ title, location }) => (
  <View>
    <Text>{title}:</Text>
    {location && (
      <Text>
        Latitude: {location.latitude}, Longitude: {location.longitude}
      </Text>
    )}
  </View>
);

export default function Lab72() {
  const [initialLocation, setInitialLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Xác định vị trí ban đầu
    Geolocation.getCurrentPosition(
      (position) => {
        setInitialLocation(position.coords);
      },
      (error) => {
        console.error('Lỗi khi xác định vị trí ban đầu:', error);
      }
    );

    // Theo dõi vị trí hiện tại
    const watchId = Geolocation.watchPosition(
      (position) => {
        setCurrentLocation(position.coords);
      },
      (error) => {
        console.error('Lỗi khi xác định vị trí:', error);
      }
    );

    // Ngừng theo dõi khi component unmount
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <View>
      <LocationDisplay title="Vị trí ban đầu" location={initialLocation} />
      <LocationDisplay title="Vị trí hiện tại" location={currentLocation} />
    </View>
  );
}
