import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

export default function App() {
  const [count, setCount] = useState(100);

  interface Result {
    num: number;
    egg: Object;
    text: String;
  }

  const result: Result = {
    num: count,
    egg: egg1,
    text: "",
  };

  //100→0までの間で1ずつカウントダウンするように設定。
  const countDown = () => {
    if (count <= 100 && count > 0) {
      setCount(count - 1);
    }
  };

  // const num: number = count;
  const num = count;
  let egg;
  let text;

  //egg画像の切り替えの条件分岐(if文)
  if (num <= 100 && num > 50) {
    result.egg = egg1;
  } else if (num <= 50 && num >= 1) {
    result.egg = egg2;
  } else if (num <= 0) {
    result.egg = egg3;
  }

  //text文字の切り替えの条件分岐
  switch (num) {
    case 100:
      result.text = "何が生まれるのかはお楽しみ！";
      break;
    case 80:
      result.text = "まだまだかかりそう…";
      break;
    case 50:
      result.text = "え？暇人なの？？";
      break;
    case 20:
      result.text = "え？友達いないの？？";
      break;
    case 10:
      result.text = "う…嘘だろ…";
      break;
    case 0:
      result.text = "🎉🤗ニート確定🤗🎉";
      break;
  }

  //リスタートボタンの設定
  const restart = () => {
    setCount(count * 0 + 100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{count}</Text>

      <Pressable onPress={countDown}>
        <Image source={result.egg} style={styles.eggs}></Image>
      </Pressable>

      <Text style={styles.text}>{result.text}</Text>

      <Pressable onPress={restart}>
        <Text style={styles.buttonText}>再チャレンジ</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },

  eggs: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  comment: {
    width: "100%",
    height: "10%",
    backgroundColor: "#000",
    fontSize: 50,
    textAlign: "center",
    color: "#0f0",
    padding: "5%",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#d3d3d3",
    lineHeight: 20,
    borderRadius: 100,
    padding: "5%",
  },
});
