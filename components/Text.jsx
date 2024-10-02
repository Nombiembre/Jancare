import { Text as TextNative } from "react-native";
import React from "react";

const Text = ({ children, className: classes, ...rest }) => {
  return (
    <TextNative className="font-pregular" {...rest}>
      {children}
    </TextNative>
  );
};

export default Text;
