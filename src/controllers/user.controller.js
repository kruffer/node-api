let users = [];

class Usercontroller {
    getUsers(request,reponse){
        return response.json(users);
    }

    createUsers(request, response){
        const{ name } = request.body;
        const nemUsers = {
            id: `${users.length +1}`, 
            name,
        }

        users.push(nemUsers);

        return response.json(newUser); 
    }
    deleteUser(request, response){
        const{ id } = request.params;
        users = users.filter((u)=> u.id !== id);

        return response.jason();
    }
}

const usercontroller = new Usercontroller();

module.exports = {
    usercontroller,
};