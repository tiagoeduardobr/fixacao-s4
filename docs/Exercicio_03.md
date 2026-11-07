# Exercício 1 — O cadastro com React Hook Form

## React Hook Form · 15 minutos

1. Instale o `react-hook-form` no projeto `fixacao-s4`.

2. Refaça o cadastro da quarta com `useForm` e `defaultValues` para os campos `nome`, `email` e `senha`.

3. Adicione um `Controller` para cada campo, com as seguintes regras:
   - Nome obrigatório, com pelo menos 2 letras.
   - E-mail validado com `pattern`.
   - Senha com 6 caracteres ou mais.

4. Exiba uma mensagem de erro embaixo de cada campo.

5. Configure o botão "Cadastrar" com `handleSubmit`: mostre a mensagem "✅ Conta criada para Ana" e limpe o formulário com `reset()`.

**Compare:** sumiram o `form`, o `atualizar`, o `erros` e o `validar`.
