import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, style }: any) => {
  return <Text style={[{ color: "#111" }, style]}>{children}</Text>;
};

export default React.memo(CustomText);
