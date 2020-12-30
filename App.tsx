import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import egg01 from "./assets/egg01.png";
import egg02 from "./assets/egg02.png";
import egg03 from "./assets/egg03.png";
const { width } = Dimensions.get("screen");

export default function App() {
  //画像を入れた配列、表示する文章の配列を準備
  const messages = [
    "まだまだ余裕",
    "思ったよりやるな",
    "もう少し！",
    "おめでとう！！",
  ];
  const changeMessage = (count: number) => {
    let message = "";
    //型推論でstringを推察してくれる
    switch (count) {
      case 75:
        return messages[0];
        break;
      case 50:
        return messages[1];
        break;
      case 25:
        return messages[2];
        break;
      case 0:
        return messages[3];
        break;
      default:
        break;
    }
  };

  //初期値は１００
  const [count, setCount] = React.useState(100);
  const onPressCount = () => setCount(count - 1);

  const changeEggImage = (count: number) => {
    if (count > 50) {
      return egg01;
    } else if (count <= 50 && count > 0) {
      return egg02;
    } else {
      return egg03;
    }
  };

  return (
    /* 画面最上部の表示と重ならないためにSafeAreaView使用(iOSのみ機能する) */
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.countText}>
          {
            /* countがマイナスになっても表示を０で止めるため */
            count >= 0 ? count : "0"
          }
        </Text>
      </View>
      <Pressable onPress={onPressCount} style={styles.eggButtton}>
        <Image
          source={
            /* countの数字に合わせた画像の表示 */
            changeEggImage(count)
          }
          style={styles.eggImg}
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.messageText}>
          {
            /* countの数字に合わせた文字の表示 */
            changeMessage(count)
          }
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    //AndroidではSafeAreaViewの機能が使えないのでAndroidのときだけpaddingTop使用
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    textAlign: "center",
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    width: width * 0.9,
    //画面サイズの横幅 * 0.9
    fontSize: 50,
    fontWeight: "600",
    color: "lime",
    justifyContent: "center",
    overflow: "hidden",
  },
  messageText: {
    textAlign: "center",
    width: width * 0.9,
    //画面サイズの横幅 * 0.9
    fontSize: 30,
    justifyContent: "center",
    fontWeight: "600",
  },

  eggImg: {
    width: 300,
    height: 300,
  },
  eggButtton: {
    flex: 3,
    width: width * 0.9,
    //画面サイズの横幅 * 0.9
    alignItems: "center",
    justifyContent: "center",
  },
});
