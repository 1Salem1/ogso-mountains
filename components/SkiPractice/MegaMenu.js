import React from "react";
import { Menu, Divider, HamburgerIcon, Center, NativeBaseProvider } from "native-base";
import { Pressable } from "react-native";
import { Fontisto } from '@expo/vector-icons'; 
function Example() {
  return <Menu trigger={triggerProps => {
    return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Fontisto name="more-v-a" size={24} color="#e8500e" />
          </Pressable>;
  }}>
      <Menu.Item>More Details</Menu.Item>
    </Menu>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="53">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    