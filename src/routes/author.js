/**
 * Created by jeremy on 16-05-19.
 */

/**
 * Ceci contiendra toutels les modèles de sequelize
 * @typedef {{author : sequelize.Model, document: sequelize.Model}} modelObjects
 */

/**
 *
 * @param {modelObjects} modelsObject la collection de modèles à utiliser
 * @return {Router} le routeur généré
 */
module.exports = function(modelsObject) {
  var model = modelsObject;
  var express = require('express');
  var router = new express.Router();

  router.get('/new', function(req, res) {
    res.render("createAuthor", {
      title: "Créer Auteur",
      author: {
        firstName: "",
        lastName: "",
        nickname: ""
      }
    });
  });

  router.put('/:authId', function(req, res) {
    model.author.findById(req.params.authId).then(function(author) {
      author.update({
        firstName: req.body.authorFirstName,
        lastName: req.body.authorLastName,
        nickname: req.body.authorNickname
      }).then(function() {
        res.redirect("/authors");
      });
    });
  });

  router.delete('/:authId', function(req, res) {
    model.author.findById(req.params.authId).then(function(author) {
      author.destroy().then(function() {
        res.redirect("/authors");
      });
    });
  });

  router.get('/:authId', function(req, res) {
    model.author.findById(req.params.authId).then(function(doc) {
      res.render("author", {title: "auteur", author: doc});
    }).catch(function(err) {
      res.sendStatus(500).send(err).end();
    });
  });

  router.get('/:authId/edit', function(req, res) {
    model.author.findById(req.params.authId).then(function(doc) {
      res.render("modifyAuthor", {title: "Modifier Auteur", author: doc});
    }).catch(function(err) {
      res.sendStatus(500).send(err).end();
    });
  });

  router.post('/', function(req, res) {
    model.author.create({
      firstName: req.body.authorFirstName,
      lastName: req.body.authorLastName,
      nickname: req.body.authorNickname
    }).then(function() {
      res.redirect("/authors");
    });
  });

  return router;
};
