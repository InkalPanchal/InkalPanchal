const pool = require('../DB/db');
pool.connect();

class CustomerDomain {
    async getAllCutomers(req, res) {
        // let result = (await pool.query('SELECT * FROM Customer')).rows;
        // res.status(200).json(result);
        pool.query('SELECT customerid, customername, emailaddress, phonenumber, gender, birthdate, streetaddress, city, state, country, pincode, addresstype FROM Customer', (err, result)=>{
            if(err) throw err;
            if(result.rowCount > 0){
                console.log('result', result.rows);
                res.status(200).json(result.rows);
            }else {
                res.status(404).json("Data is empty.")
            }
        })  
    };

    async addCustomer(customer, res) {
        var customers ;
        pool.query('SELECT * FROM Customer', (err, result)=>{
            if(err) throw err;
            console.log(result.rows);
            customers = result.rows

        // console.log("customerssss", customers);
        const text = `
          INSERT INTO Customer (customername, emailaddress, phonenumber, gender, birthdate, streetaddress, city, state, country, pincode, addresstype)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          RETURNING *
        `;
        const values = [customer.customername, customer.emailaddress, customer.phonenumber, customer.gender, customer.birthdate, customer.streetaddress, customer.city, customer.state, customer.country, customer.pincode, customer.addresstype ];
        let checkExists = customers.find(x => x.emailaddress === customer.emailaddress || customers.phonenumber === customer.phonenumber)
        // console.log("checkExists", checkExists);
        if(checkExists === undefined){

            pool.query(text, values, (err, results)=>{
                if(err) console.log(err.message);
                else if(results){
                    res.status(200).json({message: `Customer with id ${results.rows[0].customerid} is added.`});
                }else{
                    console.log("error");
                    res.status(404).json({message: "Something wrong!"})
                }
            });
        }else {
            res.status(422).json("Data already exists.")
        }
    });
        
    }

    async getCustomerById(id, res){
        const text = `SELECT * FROM Customer WHERE customerid = ${id}`;
        pool.query(text, (err, result)=>{
            if(err) throw err;
            let data = result.rows[0];
            if(data !== undefined) {
                console.log("in if", data);
                res.status(200).json(data);
            } else {
                console.log(`in else ${data}`);
                res.status(404).json({message: `Customer is not available.`});
            }
        })
    }

    async updateCustomer(customer, id, res) {
        const text = `UPDATE Customer SET customername = $1, emailaddress = $2, gender = $3, phonenumber = $4, birthdate = $5, streetaddress = $6, city =$7, state = $8, country = $9, pincode = $10, addresstype = $11 WHERE customerid = $12`;
        const values = [customer.customername, customer.emailaddress, customer.gender, customer.phonenumber, customer.birthdate, customer.streetaddress, customer.city, customer.state, customer.country, customer.pincode, customer.addresstype, id];

        pool.query(text, values, (err, results)=>{
            if(err) console.log(err.message);
            if(results.rowCount > 0){
                console.log('results', results);
                res.status(200).json({message: `Customer with id ${id} is modified.`});
            }else {
                res.status(404).json({message:`Data is not available.`})
            }
        })
    }

    async deleteCustomer(id, res){
        const text = `DELETE FROM Customer WHERE customerid = $1`;
        const values = [id];

        pool.query(text, values, (err, result)=>{
            if(err) throw err;
           if(result.rowCount === 0){
                res.status(404).json({message: `Customer is not available!`})
           }else {
               res.status(200).json({message: `Customer with id ${id} is deleted successfully!`});
           }
        })
    }
}
module.exports = CustomerDomain;