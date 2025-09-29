// Declaração do Enum para representar o status de um pedido
enum StatusPedido {
  Pendente = "Pendente",
  Pago = "Pago",
  Enviado = "Enviado"
}

// Criando uma variável tipada como StatusPedido
const statusAtual: StatusPedido = StatusPedido.Pago;

// Exibindo o valor no console
console.log("Status do pedido:", statusAtual);

// Exemplos adicionais de uso:
console.log("\n--- Exemplos de uso do Enum ---");

// Você pode usar qualquer valor do enum
const pedido1: StatusPedido = StatusPedido.Pendente;
const pedido2: StatusPedido = StatusPedido.Enviado;

console.log("Pedido 1:", pedido1);
console.log("Pedido 2:", pedido2);

// Exemplo prático: função que verifica o status
function verificarStatus(status: StatusPedido): void {
  switch (status) {
    case StatusPedido.Pendente:
      console.log("⏳ Aguardando pagamento...");
      break;
    case StatusPedido.Pago:
      console.log("✅ Pagamento confirmado!");
      break;
    case StatusPedido.Enviado:
      console.log("📦 Pedido a caminho!");
      break;
  }
}

console.log("\n--- Verificando status ---");
verificarStatus(statusAtual);