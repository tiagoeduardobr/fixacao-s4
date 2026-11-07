# Exercício 01 — Tela de cadastro

## TextInput · 15 minutos

1. Crie o projeto da semana com o comando `npx create-expo-app fixacao-s4 --template blank` ou utilize o arquivo `app/index.js` do projeto `fixacao-s3`.

2. Crie um estado `form` com os campos `nome`, `email`, `telefone` e `senha`, além da função `atualizar`.

3. Adicione quatro componentes `TextInput`, cada um com a configuração adequada:
   - Nome: capitalização por palavras (`words`).
   - E-mail: sem letras maiúsculas.
   - Telefone: teclado `phone-pad` e `maxLength={11}`.
   - Senha: conteúdo escondido.

4. Adicione um botão "Cadastrar" que mostre, abaixo do formulário, os dados preenchidos no seguinte formato:

       ✅ Ana | ana@email.com | 48999990000

**Desafio extra:** adicione um `Switch` com o rótulo "Mostrar senha" para alternar o valor de `secureTextEntry`.
