import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Buttons from "./Buttons";
import { useThemeColor } from "@/hooks/useThemeColor";

const KeyBoard = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState<string | number | null>(null);
  const backgroundColor = useThemeColor({ light: "#151718", dark: "#fff" }, 'background');

  const handleNumberPress = (number: string) => {
    if (operator) {
      setSecondNumber((prev) => prev + number);
    } else {
      setFirstNumber((prev) => prev + number);
    }
  };

  const handleOperatorPress = (op: string) => {
    if (firstNumber) {
      setOperator(op);
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let res = null;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "X":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error";
        break;
      case "%":
        res = num1 % num2;
        break;
      default:
        res = "Error";
    }
    setResult(res);
    clearInputs();
  };

  const clearInputs = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
  };

  const handleClear = () => {
    clearInputs();
    setResult(null);
  };

  return (
    <View>
      <View style={styles.resultContainer}>
        <Text style={[styles.resultText, { color: backgroundColor }]}>
          {result !== null
            ? result
            : `${firstNumber} ${operator} ${secondNumber}`}
        </Text>
      </View>
      <View style={styles.OneLineContainer}>
        <Buttons text="AC" onPress={handleClear} />
        <Buttons text="%" onPress={() => handleOperatorPress("%")} />
        <Buttons
          text="←"
          onPress={() => {
            if (secondNumber) {
              setSecondNumber((prev) => prev.slice(0, -1));
            } else if (operator) {
              setOperator("");
            } else {
              setFirstNumber((prev) => prev.slice(0, -1));
            }
          }}
        />
        <Buttons text="/" onPress={() => handleOperatorPress("/")} />
      </View>
      <View style={styles.OneLineContainer}>
        <Buttons text="7" onPress={() => handleNumberPress("7")} />
        <Buttons text="8" onPress={() => handleNumberPress("8")} />
        <Buttons text="9" onPress={() => handleNumberPress("9")} />
        <Buttons text="X" onPress={() => handleOperatorPress("X")} />
      </View>
      <View style={styles.OneLineContainer}>
        <Buttons text="4" onPress={() => handleNumberPress("4")} />
        <Buttons text="5" onPress={() => handleNumberPress("5")} />
        <Buttons text="6" onPress={() => handleNumberPress("6")} />
        <Buttons text="-" onPress={() => handleOperatorPress("-")} />
      </View>
      <View style={styles.OneLineContainer}>
        <Buttons text="1" onPress={() => handleNumberPress("1")} />
        <Buttons text="2" onPress={() => handleNumberPress("2")} />
        <Buttons text="3" onPress={() => handleNumberPress("3")} />
        <Buttons text="+" onPress={() => handleOperatorPress("+")} />
      </View>
      <View style={styles.OneLineContainer}>
        <Buttons text="00" onPress={() => handleNumberPress("00")} />
        <Buttons text="0" onPress={() => handleNumberPress("0")} />
        <Buttons text="." onPress={() => handleNumberPress(".")} />
        <Buttons text="=" onPress={calculateResult} isOrange={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    height: 300,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 40,
    borderColor: "#ccc",
  },
  resultText: {
    fontSize: 50,
  },
  OneLineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default KeyBoard;
