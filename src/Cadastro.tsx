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

export default function CadastroPage() {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmarSenha, setConfirmarSenha] = React.useState("");

  function singIn() {
    //save .. <> null senha = confirma senha = ok
    if (
      name != null &&
      username != null &&
      password != null &&
      confirmarSenha != null
    ) {
      if (password === confirmarSenha) {
        Alert.alert("Cadastro realizado com sucesso");
      } else {
        Alert.alert("Senha e confirmar senha são diferentes!");
      }
    } else {
      Alert.alert("Todos os campos são obrigatórios!");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Página de cadastro</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} onChangeText={setName} />

      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} onChangeText={setUsername} />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={setConfirmarSenha}
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
