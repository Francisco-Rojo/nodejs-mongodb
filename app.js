const mongoCliente=require('mongodb').MongoClient;
const url="mongodb://127.0.0.1:27017/";
const mydatabase = 'mydb';
const readLine = require('readline');
const f = require('fs');

var contador  = 0;
var file = './files/https.txt';

var rl = readLine.createInterface({
    input : f.createReadStream(file),
    output : process.stdout,
    terminal: false
});

rl.on('line', function (text) {
    console.log(text + " - " + contador++ )
});


mongoCliente.connect(url, (err, db) => {
    if(err){console.log('error: ', err);}
    var dbo = db.db(mydatabase);
    dbo.collection("file_saaf_assets").find({}, {projection: {_id:0, barcodeUrl:1, qrUrl:1}}).toArray((err, res)=>{
        if (err) {console.log('err: '+err);}
        console.log(res);
        db.close();
    });
});






// crear una base de datos
/*mongoCliente.connect(url, (err, db)=>{
    if (err) {
        console.log("err: " + err);
    }
    console.log("database created!!");
    db.close();
});*/

//crear una colección coleccion = tabla
/*mongoCliente.connect(url, (err, db)=>{
    if(err) throw err;
    var dbo=db.db('mydb');

    dbo.createCollection('customers', (err, res)=>{
        if(err) throw err;
        console.log("Collection created !");
        db.close();
    });
});*/

// insertar en una coleccion
/*mongoCliente.connect(url, (err, db)=>{
    if(err) throw err;
    var dbo = db.db('mydb');
    var myobj = {name:"Company Inc", address:"Highway 37"};

    dbo.collection("customers").insertOne(myobj, (err, res) =>{
        if(err) throw err;
        console.log("one document inseted");
        db.close();
    });
});*/

//insertar varios documentos
/*mongoCliente.connect(url, (err, db)=>{
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobjs = [
        { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
    ];

    dbo.collection("customers").insertMany(myobjs, (err, res) =>{
        if(err) throw err;
        console.log("Numbers of documets inserted: " + res.insertedCount);
        db.close()
    });
});
*/

//encontrar el primer elemento
/*mongoCliente.connect(url, (err, db) => {
    if(err) throw err;
    var dbo=db.db("mydb");
    dbo.collection("customers").find({}).toArray((err, res) =>{
        if(err) throw err;
        console.log(res);
        db.close();
    });
}); */

// encontrar algo
/*mongoCliente.connect(url, (err, db) => {
    if(err) throw err;
    var dbo=db.db("mydb");
   
    dbo.collection("customers").find({}, {projection: {_id:0, address:1}}).toArray((err, res)=>{
        if(err) throw err;

        console.log(res);
        db.close();
    })

});

//--------------

mongoCliente.connect(url, (err, db) => {
    if(err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("customers").find({address: 'Mountain 21'}).toArray((err, res)=>{
        if(err) throw err;
        console.log(res);
        db.close();
    })
});


*/
// se pude filtrar la informacion con una expresion regular

//eliminar 
/*mongoCliente.connect(url, (err, db) => {
    if(err) throw err;
    var dbo=db.db("mydb");
    var myquery={ address: 'Mountain 21'};

    dbo.collection("customers").deleteOne(myquery, (err, res)  => {
        if (err) throw err;
        console.log("one document deleted! ");
        db.close();
    });
});*/

// eliminar una coleccion
/*mongoCliente.connect(url, (err, db) =>{
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.dropCollection("cutomers", (err, res) => {
        if(err) throw err;
        if(res) {
            console.log("Collection deleted! ");
        }
        db.close();
    })
})*/




