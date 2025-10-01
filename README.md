# 📦 Exercício - Usando Enums em TypeScript

Projeto desenvolvido para praticar o uso de **Enums** em **TypeScript**, representando um conjunto fixo de valores nomeados para deixar o código mais legível e organizado.

## 🎯 Objetivo

Reforçar o entendimento sobre como usar **Enums em TypeScript** para representar valores fixos de forma clara e segura, aplicando conceitos de:

- Criação de enums
- Definição de valores fixos
- Tipagem de variáveis com enums
- Exibição de valores no console

## 📋 Descrição do Exercício

O desafio consiste em criar um enum para representar o **status de um pedido** e exibir um desses valores no console.

### Requisitos implementados:

✅ Enum declarado com a palavra-chave `enum`  
✅ Valores definidos: `Pendente`, `Pago` e `Enviado` (como strings)  
✅ Variável tipada como `StatusPedido`  
✅ Exibição do valor no console com `console.log`

## 🚀 Como executar

### Pré-requisitos

- Node.js instalado
- TypeScript instalado globalmente

```bash
npm install -g typescript
```

### Opção 1: Compilar e executar

```bash
# Compilar o arquivo TypeScript
tsc index.ts

# Executar o arquivo JavaScript gerado
node index.js
```

### Opção 2: Executar diretamente com ts-node

```bash
# Instalar ts-node (se não tiver)
npm install -g ts-node

# Executar diretamente
ts-node index.ts
```

## 📝 Código

```typescript
// Criando o Enum StatusPedido
enum StatusPedido {
  Pendente = "Pendente",
  Pago = "Pago",
  Enviado = "Enviado"
}

// Criando uma variável do tipo StatusPedido
const meuPedido: StatusPedido = StatusPedido.Pago;

// Exibindo o valor no console
console.log(meuPedido);
```

## 🎓 Conceitos aprendidos

- **Enums**: Estrutura que permite definir um conjunto de constantes nomeadas
- **Type Safety**: Garantir que apenas valores válidos sejam atribuídos
- **Legibilidade**: Código mais claro e auto-documentado
- **Manutenibilidade**: Facilita alterações futuras em valores fixos

## 📊 Saída esperada

```
Pago
```

## 🛠️ Tecnologias utilizadas

- TypeScript
- Node.js

## 👨‍💻 Autor

**DevAlex**

- GitHub: [@DevAlex-full](https://github.com/DevAlex-full)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
