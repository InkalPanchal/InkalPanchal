var userData = require('../json/user.json');
const fs = require('node:fs');
var allData = userData;
var file = './json/user.json'
class UsersDomain {
    addNewUser(req, res) {
        let newUser = req.body;
        let exists = allData.find((x) => x.userId == newUser.userId);
        
        if (exists === undefined) {
            if (newUser.name !== "") {
                allData.push(newUser);
                console.log("data with added new data", allData);
                fs.writeFile(file, JSON.stringify(allData), (err, data) => {
                    if (err) throw err;
                    res.status(200).json({ message: `New data with id ${newUser.userId} is added successfully!` });
                })
            } else {
                res.status(422).json({ message: `Name is required.` })
            }
        } else {
            res.status(409).json({ message: "Data already exists" })
        }
    }

    getAllUsers(req, res) {
        if (allData.length !== 0) {
            res.status(200).json(allData);
        } else {
            res.status(404).json({ message: "Data not found!" });
        }
    };

    getUserById(req, res) {
        let id = req.params.id
        let user = allData.find((x) => x.userId == id);
        console.log(user);
        if (user !== undefined) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ message: "Data not available!" })
        }
    }

    updateUser(req, res) {
        let id = req.params.id;
        let user = allData.find((x) => x.userId == id);
        console.log("user", user);
        if (user !== undefined) {
            user.name = req.body.name;
            user.age = req.body.age;
            console.log("updated usersdata", allData);
            fs.writeFile(file, JSON.stringify(allData), (err, data) => {
                if (err) throw err;
                res.status(200).json({ message: `Data of id ${user.userId} is updated successfully!` });
            });
        }
        else {
            res.status(404).json({ message: "Data not available!" });
        }
    }

    deleteUser(req, res) {
        let id = req.params.id;
        let user = allData.find((x) => x.userId == id);
        console.log('user', user);

        let index = allData.findIndex(x => x.userId == id);
        console.log('index for deleting user', index);
        if (user !== undefined) {
            allData.splice(index, 1);
            fs.writeFile(file, JSON.stringify(allData), (err, data) => {
                if (err) throw err;
                res.status(200).json({ message: `Data of id ${user.userId} is deleted successfully. ` })
            })
        }
        else {
            res.status(404).json({ message: "Data not available!" });
        }
    }
}

module.exports = UsersDomain