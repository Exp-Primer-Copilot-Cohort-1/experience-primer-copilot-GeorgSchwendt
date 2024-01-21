// Create web server
var express = require('express');
var router = express.Router();

// Create comment model
var Comment = require('../models/comment');

// Create a comment
router.post('/comment', function(req, res, next) {
    var newComment = new Comment({
        comment: req.body.comment,var express = require('express');
var router = express.Router();

// Create comment model
var Comment = require('../models/comment');

// Create a comment
router.post('/comment', function(req, res, next) {
    var newComment = new Comment({
        comment: req.body.comment,