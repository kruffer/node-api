const {Router} = require('express');
const { usercontroller } = require('../user.controller');

const userRounter = Router();

userRounter.use(
    '/users',
    userRouter.get('/all', usercontroller.getUsers),
    userRouter.post('/', usercontroller.createUser),
    userRounter.delete('/:id', userController.deleteUser)
);

module.exports = {
    userRouter, 
};