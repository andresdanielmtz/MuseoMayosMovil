import { useRef, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import MayoVideos from "@/assets/videos/mayo_info.mp4"
export default function VideoScreen() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={styles.contentContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={MayoVideos}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay
        volume={0.0}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
