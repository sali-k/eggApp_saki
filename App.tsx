import { StatusBar } from "expo-status-bar";
import React from "react";
// useState = 基本のフック(stateなどのReactの機能をクラスを書かずに使える新機能！)
import { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

export default function App() {
  // 定数or変数 [変数a,変数aに値を入れるための関数] = useState(変数aの初期値);
  const [count, setCount] = useState(100);

  const countDown = () => {
    //eggを押すと、100→0までの間で1つずつカウントダウンする。
    if (count <= 100 && count > 0) {
      setCount(count - 1);
    }
  };

  //変数numの定義 (今回、使用する型は文字列と数値)
  let num: string | number = count;
  //変数egg(画像データ)の定義
  let egg;
  //変数text(文字列)の定義
  let text;

  //egg画像の切り替えの条件分岐(if文)
  if (num <= 100 && num > 50) {
    egg = egg1;
  } else if (num <= 50 && num >= 1) {
    egg = egg2;
  } else if (num <= 0) {
    egg = egg3;
  }

  //textの切り替えの条件分岐(switch文)
  switch (num) {
    case 100:
      text = "何が生まれるのかはお楽しみ！";
      break;
    case 80:
      text = "まだまだかかりそう…";
      break;
    case 50:
      text = "え？暇人なの？？";
      break;
    case 20:
      text = "え？友達いないの？？";
      break;
    case 10:
      text = "う…嘘だろ…";
      break;
    case 0:
      text = "ニート確定🤗";
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{count}</Text>
      <Pressable onPress={countDown}>
        <Image source={egg} style={styles.logo}></Image>
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginBottom: 50,
    resizeMode: "contain",
  },

  comment: {
    width: 400,
    height: 100,
    backgroundColor: "#000",
    marginBottom: 50,
    fontSize: 50,
    textAlign: "center",
    color: "#0f0",
    paddingTop: 25,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 100,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    backgroundColor: "blue",
    width: 40,
    height: 40,
    lineHeight: 40,
  },
});

// React は「コンポーネント指向の UI ライブラリ」
// Component 内部の状態を管理する際に使う仕組み
// Component とは、React により最終的に出力する JSX を構成する再利用可能な部品のこと
// Touchable Opacity (昔コンポーネント)↓
// Pressable (新コンポーネント)
