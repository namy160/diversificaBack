let usuarios = [
    {userID: 1, name: "Teste1", email: "teste1@teste.com"},
    {userID: 2, name: "Teste2", email: "teste2@teste.com"},
    {userID: 3, name: "Teste3", email: "teste3@teste.com"}
]

class UserController {
    static getAll(req, res) {
        if (usuarios.length === 0) {
            return res.status(404).json({message: "No users found"});
        }
        res.status(200).json(usuarios);
    }

    static getById(req, res) {
        const usuarioId = parseInt(req.params.id);
        if (isNaN(usuarioId)) { //verifica se o ID é um número
            return res.status(400).json({message: "Invalid ID format"});
        }

        const usuario = usuarios.find(u => u.userID === usuarioId);
        
        if (!usuario) {
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(usuario);
    }
    
    static createUser(req, res) {       
        const newUser = {
            userID: usuarios.length + 1,
            name: req.body.name,
            email: req.body.email
        }
        usuarios.push(newUser);
        return res.status(201).json(newUser);
    }

    static deleteUser(req, res) {
        const usuarioId = parseInt(req.params.id);
        const usuarioIndex = usuarios.findIndex(u => u.userID === usuarioId);

        if (usuarioIndex === -1) {
            return res.status(404).json({message: "User not found"});
        }

        usuarios.splice(usuarioIndex, 1);
        return res.status(200).json({message: "User deleted successfully"});
    }

}

module.exports = UserController;
