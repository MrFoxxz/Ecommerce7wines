const server = require('express').Router();
const { Category, Product } = require('../db.js');


//Devuelve un array con las categorias.
server.get('/', (req, res, next) => {
	Category.findAll({
        include: Product
    })
	.then((categorys) => {
		res.send(categorys);
	})
	.catch(err => { console.log(err) });

});

//S18 Crea una categoría nueva.s
server.post('/', (req, res, next) => {
	Category.create({
        name: req.body.name,
        description: req.body.description,
    })
    .then((category) => {
        return res.status(201).send(category);
    })
    .catch(err => { console.log(err) });
});

//S19 Borra una categoria.
server.delete('/:id', (req, res) => {
    Category.destroy({
        where: {id: req.params.id}
    }).then(function (obj){
        if(obj === 1){
            res.json({ message: 'Categoria borrada'});
        }
    }).catch(err => { console.log(err) });
})

//S20 Modifica una categoria 

server.put("/:id" , (req, res) => {
    Category.findOne({
        where: { id: req.params.id}
    }).then(function(obj) {
        if(obj) return obj.update({
            Category: req.params.Category
        })
       return res.send(obj);
    }).catch(err => { console.log(err) });
});


//S22 retorna todos los productos asosociados a una categoria

server.get("/:id" , (req, res) => {
    Category.findOne({
        where: { id: req.params.id },
        include: Product
    }).then( (result) => {
        if(result) {
            res.send(result);
        }
    }).catch(err => { console.log(err) });
})

module.exports = server;