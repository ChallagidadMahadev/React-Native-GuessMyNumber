import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButtons({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#B86C5C" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButtons;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 24,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#922B21",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
