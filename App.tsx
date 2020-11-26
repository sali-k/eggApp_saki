import { StatusBar } from "expo-status-bar";
// "react"モジュールからimportすることでReactの記述を使用できる
import React from "react";
// useState = 基本のフック(stateなどのReactの機能をクラスを書かずに使える新機能！)
import { useState } from "react";
// "react-native"モジュールからimportすることで、StyleSheetやTextコンポーネントを使える
import { Image, StyleSheet, Text, View, Pressable, Button } from "react-native";
// 使用するegg画像をimport
import egg1 from "./assets/egg01.png";
import egg2 from "./assets/egg02.png";
import egg3 from "./assets/egg03.png";

// exportとは先ほど出てきたimportの反対の意味
// export内で定義した記述を他の場所で使えるようにするもの
// defaultオプション付きのexportは、そのファイルの中においてデフォルトでexportされるコンポーネントを決めることができ
export default function App() {
  // const [変数a,変数aに値を入れるための関数] = useState(変数aの初期値);
  const [count, setCount] = useState(100);

  //100→0までの間で1ずつカウントダウンするように設定。
  const countDown = () => {
    if (count <= 100 && count > 0) {
      setCount(count - 1);
    }
  };

  //変数num(数値)の定義
  let num: number = count;
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

  //text文字の切り替えの条件分岐(switch文でトライ！)
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
      text = "🎉🤗ニート確定🤗🎉";
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
        <Image source={egg} style={styles.eggs}></Image>
      </Pressable>

      <Text style={styles.text}>{text}</Text>

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

// React は「コンポーネント指向の UI ライブラリ」
// Component とは、React により最終的に出力する JSX を構成する再利用可能な部品のこと
// Component 内部の状態を管理する際に使う仕組み
// Touchable Opacity (昔コンポーネント) → Pressable (新コンポーネント)
