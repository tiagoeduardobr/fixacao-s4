# Exercício 04 — O cadastro com Zod

## Zod · 20 minutos

1. Instale `zod` e `@hookform/resolvers`.

2. Crie o `cadastroSchema` com os campos:
   - `nome`.
   - `email`.
   - `idade`: 16 anos ou mais; use `z.coerce.number`.
   - `senha`: 6 caracteres ou mais.
   - `confirmarSenha`.

3. Use `refine` para verificar se as senhas são iguais, com o erro em `confirmarSenha`.

4. Configure o `useForm` com `zodResolver`, `mode: 'onBlur'` e os `defaultValues`. Remova os `rules`.

5. Configure o campo de idade com `keyboardType="numeric"`. Quando tudo estiver correto, mostre a mensagem: "✅ Ana, 20 anos: conta criada!".

**Desafio extra:** crie um componente `Campo` (`Controller` + `TextInput` + erro) e use nos 5 campos.

## Exercício 3 (desafio)

O caça ao bug do próximo slide.
