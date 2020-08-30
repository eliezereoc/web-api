const express = require("express");
const controller = require("../controller/cliente");

const router = express.Router();

router.get("cliente/:id", controller.buscarCliente);
router.get("/clientes", controller.buscaTodosCliente);
router.post("/cliente", controller.criarCliente);
router.put("/cliente/:id", controller.atualizaCliente);
router.delete("/cliente/:id", controller.excluirCliente);

module.exports = router;
