import { useLocalSearchParams, useNavigation, useRouter } from "expo-router"; // Added useRouter
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useCallback, useEffect, useLayoutEffect, useState } from "react"; // Added useLayoutEffect
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"; // Added TouchableOpacity, Text
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../firebaseConfig"; // Combined these imports

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const { userID, name, backgroundColor } = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter(); // Initialize router

  //Set the header title
  useEffect(() => {
    navigation.setOptions({ title: name || "Chat" });
  }, [navigation, name]);

  //Add the Log Out button to the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={() => {
            signOut(auth)
              .then(() => {
                router.replace("/"); // Send user back to Login screen
              })
              .catch((error) => alert(error.message));
          }}
        >
          <Text style={{ color: "#007AFF", fontWeight: "bold" }}>Log Out</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, router]);

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

  // 4. Function to send messages
  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, "messages"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

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
    <View
      style={[styles.container, { backgroundColor: backgroundColor || "#fff" }]}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name: name,
        }}
        renderBubble={renderBubble}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="height" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
