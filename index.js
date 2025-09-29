// Declaração do Enum para representar o status de um pedido
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "Pendente";
    StatusPedido["Pago"] = "Pago";
    StatusPedido["Enviado"] = "Enviado";
})(StatusPedido || (StatusPedido = {}));
// Criando uma variável tipada como StatusPedido
var statusAtual = StatusPedido.Pago;
// Exibindo o valor no console
console.log("Status do pedido:", statusAtual);
// Exemplos adicionais de uso:
console.log("\n--- Exemplos de uso do Enum ---");
// Você pode usar qualquer valor do enum
var pedido1 = StatusPedido.Pendente;
var pedido2 = StatusPedido.Enviado;
console.log("Pedido 1:", pedido1);
console.log("Pedido 2:", pedido2);
// Exemplo prático: função que verifica o status
function verificarStatus(status) {
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
