import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Polyline } from "react-native-maps";
import { MapMarker } from "@/src/entities/MapMarker";
import { COLORS, SIZES } from "@/src/shared/utils";
import { IMapMarker } from "@/src/shared/interface";
import { View } from "react-native";
import { Spinner } from "@/src/shared/ui/Spinner";
import { P } from "@/src/shared/ui/Texts";

interface IMyMap {
  showLine?: boolean;
  markers: IMapMarker[];
}

const MyMap = ({ showLine, markers }: IMyMap) => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [locationLoaded, setLocationLoaded] = useState(false);
  const getPermissions = async () => {
    if (showLine) {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      if (currentLocation) {
        setLocation(currentLocation);
        setLocationLoaded(true);
      }
    }
  };
  useEffect(() => {
    getPermissions();
  }, []);
  return (
    <View style={{ position: "relative" }}>
      <MapView
        style={{
          width: "100%",
          height: 300,
          borderRadius: SIZES.light,
        }}
        provider="google"
        initialRegion={{
          latitude: 43.21255513375194,
          longitude: 76.89594803576219,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            img={marker.img}
            id={marker.id}
            name={marker.name}
            latitude={marker.latitude}
            longitude={marker.longitude}
            desc={marker.desc}
          />
        ))}
        {showLine && location ? (
          <>
            <Polyline
              coordinates={[
                {
                  latitude: location?.coords.latitude,
                  longitude: location?.coords.longitude,
                },
                {
                  latitude: markers[0].latitude,
                  longitude: markers[0].longitude,
                },
              ]}
              strokeWidth={4}
              strokeColor={COLORS.primary}
            />
          </>
        ) : null}
      </MapView>
      {locationLoaded ? null : (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 300,
            borderRadius: SIZES.light,
            backgroundColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <P size="medium" color={COLORS.additional} text="Маршрут сториться" />
        </View>
      )}
    </View>
  );
};

export default MyMap;
