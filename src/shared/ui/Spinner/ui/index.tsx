import { View, Text, ActivityIndicator, Button } from "react-native";
import React, { useState } from "react";

const Spinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Start Loading" onPress={startLoading} />
      )}
    </View>
  );
};

export default Spinner;
