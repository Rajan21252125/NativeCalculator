import { StyleSheet, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import KeyBoard from "@/components/KeyBoard";
import { ThemedView } from "@/components/ThemedView";
import { StatusBar } from "expo-status-bar";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  const backgroundColor = useThemeColor({ light: "#fff", dark: "#151718" }, 'background');
  const textColor = useThemeColor({ light: "#151718", dark: "#fff" }, 'background');
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <ThemedView style={styles.themedView}>
          <View style={styles.TopHeader}>
            <Ionicons name="contract" size={30} color={textColor} />
            <View style={styles.secondSideIcons}>
              <Ionicons name="accessibility" size={30} color={textColor} style={styles.iconStyle} />
              <Ionicons name="airplane" size={30} color={textColor} style={styles.iconStyle} />
              <Ionicons name="close" size={30} color={textColor} />
            </View>
          </View>
          <KeyBoard />
        </ThemedView>
      </View>
      <StatusBar backgroundColor={backgroundColor}/>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopHeader: {
    position: 'absolute',
    top: 0,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  secondSideIcons: {
    flexDirection: 'row',
    marginRight: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  themedView: {
    flex: 1,
    padding: 20,
  },
});

export default index;
