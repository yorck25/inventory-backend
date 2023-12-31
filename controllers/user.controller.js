const express = require('express');



exports.userBoard = (req, res) => {
    res.render('user', {})
};

exports.adminBoard = (req, res) => {
    res.render('admin')
}