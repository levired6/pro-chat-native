import { useRouter } from "expo-router";
import { signInAnonymously } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// @ts-ignore
import { auth } from "../firebaseConfig";

// Professional color palette
const backgroundColors = {
  black: "#090C08",
  purple: "#474056",
  gray: "#8A95A5",
  green: "#B9C6AE",
};

export default function Login() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors.black);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSignIn = () => {
    if (!name) {
      alert("Please enter a name first!");
      return;
    }
    setLoading(true);
    // @ts-ignore
    signInAnonymously(auth)
      .then((result) => {
        setLoading(false);
        router.push({
          pathname: "/chat",
          params: {
            userID: result.user.uid,
            name: name,
            backgroundColor: color,
          },
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Login failed: " + error.message);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1557683316-973673baf926",
      }}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.mainContainer}
      >
        <View style={styles.glassBox}>
          <Text style={styles.title}>Pro Chat</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Choose Background Color:</Text>
          <View style={styles.colorContainer}>
            {Object.entries(backgroundColors).map(([key, hexValue]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.colorCircle,
                  { backgroundColor: hexValue },
                  color === hexValue && styles.selectedCircle,
                ]}
                onPress={() => setColor(hexValue)}
              />
            ))}
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#757083" />
          ) : (
            <TouchableOpacity style={styles.button} onPress={onSignIn}>
              <Text style={styles.buttonText}>Enter Chat</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  glassBox: {
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "#1D1D1D",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 30,
    padding: 10,
    fontSize: 18,
    borderBottomColor: "#757083",
  },
  label: {
    fontSize: 16,
    color: "#757083",
    marginBottom: 15,
    fontWeight: "300",
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  colorCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  selectedCircle: {
    borderWidth: 3,
    borderColor: "#007AFF",
  },
  button: {
    backgroundColor: "#757083",
    padding: 18,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
