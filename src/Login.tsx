import React from "react";

import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function singIn() {
    if (username === "marcelo" && password === "123") {
      Alert.alert("Usuário logado com sucesso!");
    } else {
      Alert.alert("Usuário ou senha inválido!");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Página de acesso</Text>

      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} onChangeText={setUsername} />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.button}>
        <Button title="Entrar" onPress={singIn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 40,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: Dimensions.get("screen").width - 40,
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 18,
    width: Dimensions.get("screen").width - 40,
  },
  button: {
    marginTop: 40,
    width: Dimensions.get("screen").width - 40,
  },
});
