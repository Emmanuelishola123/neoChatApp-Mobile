import { BlurView } from "expo-blur";
import { styled } from "nativewind";
import {
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const _Text = styled(Text);
const _View = styled(View);
const _SafeAreaView = styled(SafeAreaView);
const _Pressable = styled(Pressable);
const _Image = styled(Image);
const _TextInput = styled(TextInput);
const _TouchacleOpacity = styled(TouchableOpacity);
const _ScrollView = styled(ScrollView);
const _BlurView = styled(BlurView);

export { _SafeAreaView as SafeAreaView };
export { _Text as Text };
export { _View as View };
export { _Pressable as Pressable };
export { _Image as Image };
export { _TextInput as TextInput };
export { _TouchacleOpacity as TouchableOpacity };
export { _ScrollView as ScrollView };
export { _BlurView as BlurView };

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
