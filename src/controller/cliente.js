const Cliente = require("../model/cliente");
const status = require("http-status");

exports.buscarCliente = (request, response, next) => {
    const id = request.params.id;

    Cliente.findById()
        .then(cliente => {
            if(cliente){
                response.send(cliente);
                response.status(status.OK).send();
            }else{
                response.status(status.NOT_FOUND).send();
            }
        }).catch(error => next(error));
};

exports.buscaTodosCliente = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);

    if (!Number.isInteger(limite) || !Number.isInteger(pagina)){
        response.status(status.NOT_FOUND).send();
    }

    const ITENS_POR_PAGINA = 10;
    
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    Cliente.findAll({ limit: limite, offset: pagina})
        .then(cliente => {
            response.send(cliente);
        }).catch(error => next(error));
}

exports.criarCliente = (request, response, next) => {
    const nome = request.body.nome;
    const email = request.body.email;

    Cliente.create({
        nome: nome,
        email: email
    }).then(() => {
        response.status(status.OK).send();
    }).catch((error) => next(error));
}

exports.atualizaCliente = (request, response, next) => {
    const id = request.params.id;
    const nome = request.body.nome;
    const email = request.body.email;

    Cliente.findById(id)
        .then(cliente => {
            if(cliente){
                Cliente.update(
                    {
                        nome: nome,
                        email: email
                    },
                    {where: {id: id}}
                )
                .then(() => {
                    response.send();
                }).catch(error => next(error));
            } else {
                response.status(status.NOT_FOUND).send();
            }
        }).catch(error => next(error));    
}

exports.excluirCliente = (request, response, next) => {
    const id = request.params.id;
    
    Cliente.findById(id)
        .then(cliente => {
            if(cliente){
                Cliente.destroy({
                    where: {id: id}
                })
                .then(() => {
                    response.send();
                }).catch(error => next(error));
            } else {
                response.status(status.NOT_FOUND).send();
            }           
        }).catch(error => next(error));
}

