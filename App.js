import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const formularioInicial = {
  nome: '',
  email: '',
  telefone: '',
  senha: '',
};

export default function App() {
  const [form, setForm] = useState(formularioInicial);
  const [erros, setErros] = useState({});
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [cadastro, setCadastro] = useState(null);

  function atualizar(campo, valor) {
    setForm((formularioAtual) => ({
      ...formularioAtual,
      [campo]: valor,
    }));

    setErros((errosAtuais) => {
      const outrosErros = { ...errosAtuais };
      delete outrosErros[campo];
      return outrosErros;
    });
  }

  function validar() {
    const novosErros = {};

    if (form.nome.trim().length < 2) {
      novosErros.nome = 'Digite seu nome completo.';
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      novosErros.email = 'Digite um e-mail válido.';
    }

    if (form.telefone.replace(/\D/g, '').length !== 11) {
      novosErros.telefone = 'Digite um telefone com 11 números.';
    }

    if (form.senha.length < 6) {
      novosErros.senha = 'A senha deve ter ao menos 6 caracteres.';
    }

    return novosErros;
  }

  function cadastrar() {
    const novosErros = validar();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setCadastro(null);
      return;
    }

    setCadastro(form);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subtitle}>Preencha seus dados para continuar.</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              autoCapitalize="words"
              autoComplete="name"
              onChangeText={(texto) => atualizar('nome', texto)}
              placeholder="Seu nome"
              style={[styles.input, erros.nome && styles.inputError]}
              value={form.nome}
            />
            {erros.nome && <Text style={styles.errorText}>{erros.nome}</Text>}

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={(texto) => atualizar('email', texto)}
              placeholder="voce@email.com"
              style={[styles.input, erros.email && styles.inputError]}
              value={form.email}
            />
            {erros.email && <Text style={styles.errorText}>{erros.email}</Text>}

            <Text style={styles.label}>Telefone</Text>
            <TextInput
              autoComplete="tel"
              keyboardType="phone-pad"
              maxLength={11}
              onChangeText={(texto) => atualizar('telefone', texto)}
              placeholder="48999990000"
              style={[styles.input, erros.telefone && styles.inputError]}
              value={form.telefone}
            />
            {erros.telefone && <Text style={styles.errorText}>{erros.telefone}</Text>}

            <Text style={styles.label}>Senha</Text>
            <TextInput
              autoComplete="new-password"
              onChangeText={(texto) => atualizar('senha', texto)}
              placeholder="Sua senha"
              secureTextEntry={!mostrarSenha}
              style={[styles.input, erros.senha && styles.inputError]}
              value={form.senha}
            />
            {erros.senha && <Text style={styles.errorText}>{erros.senha}</Text>}

            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>Mostrar senha</Text>
              <Switch onValueChange={setMostrarSenha} value={mostrarSenha} />
            </View>

            <View style={styles.button}>
              <Button onPress={cadastrar} title="Cadastrar" />
            </View>
          </View>

          {cadastro && (
            <Text style={styles.result}>
              ✅ {cadastro.nome} | {cadastro.email} | {cadastro.telefone}
            </Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9FC',
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#1F2937',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 16,
    marginTop: 6,
  },
  form: {
    marginTop: 28,
  },
  label: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D1D5DB',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputError: {
    borderColor: '#DC2626',
  },
  errorText: {
    color: '#B91C1C',
    fontSize: 13,
    marginTop: 6,
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  switchLabel: {
    color: '#374151',
    fontSize: 16,
  },
  button: {
    marginTop: 24,
  },
  result: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    color: '#166534',
    fontSize: 16,
    marginTop: 28,
    padding: 16,
  },
});
