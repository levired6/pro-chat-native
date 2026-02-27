import { useRouter } from "expo-router";
import { signInAnonymously } from "firebase/auth";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebaseConfig";

export default function Login() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSignIn = () => {
    setLoading(true);
    signInAnonymously(auth)
      .then((result) => {
        setLoading(false);
        // Navigate to the chat screen and pass the name/ID
        router.push({
          pathname: "/chat",
          params: { userID: result.user.uid, name: name },
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Login failed: " + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pro Chat</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={onSignIn}>
          <Text style={styles.buttonText}>Enter Chat</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10, fontSize: 18 },
  button: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
