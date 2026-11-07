# Exercício 02 — Validação na mão

## Objeto de erros · 20 minutos

Continue a tela de cadastro do Exercício 1 e valide os dados antes de exibir o resultado.

1. Crie um estado `erros`, iniciado com um objeto vazio.
2. Crie a função `validar`, que devolve um objeto com uma mensagem para cada campo inválido:
   - nome com menos de dois caracteres;
   - e-mail em formato inválido;
   - telefone diferente de 11 dígitos;
   - senha com menos de seis caracteres.
3. Ao pressionar **Cadastrar**, guarde o resultado de `validar` no estado `erros`.
4. Se `Object.keys(novosErros).length` for maior que zero, interrompa o cadastro com `return`.
5. Para cada campo com erro, aplique uma borda vermelha e apresente uma mensagem clara logo abaixo dele.
6. Ao alterar um campo, remova apenas o erro daquele campo.

### Resultado esperado

- Um formulário vazio exibe as quatro mensagens de erro.
- Um campo inválido mostra borda vermelha e uma mensagem que explica como corrigi-lo.
- O resultado com `✅ Nome | e-mail | telefone` só aparece quando não há erros.
