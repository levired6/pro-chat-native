import { useLocalSearchParams, useNavigation } from "expo-router";
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { db } from "../firebaseConfig";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const { userID, name } = useLocalSearchParams();
  const navigation = useNavigation();

  // Set the header title to the user's name
  useEffect(() => {
    navigation.setOptions({ title: name || "Chat" });
  }, [name]);

  // Real-time listener for Firestore messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      );
    });

    return () => unsubscribe();
  }, []);

  // Function to send messages to Firestore
  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, "messages"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  // Custom bubble styling
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: "#007AFF" },
          left: { backgroundColor: "#E5E5EA" },
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name: name,
        }}
        renderBubble={renderBubble}
      />
      {/* Fixes keyboard covering input on older Android/iOS versions */}
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
