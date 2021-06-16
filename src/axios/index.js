const axios = require('axios');

const url = 'http://localhost:3000/products';

async function getByAxios() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    };
};

const data = {
    title: 'remera',
    price: '100',
    stock: '50',
    code: 'AKD123',
    thumbnail: 'fotoDeRemera.png',
    timestamp: 'fechaDeHoy',
    description: 'una remera para salir'
};

async function postByAxios() {
    try {
        const response = await axios.post(url, data);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    };
};

async function deleteByAxios(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/products/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    };
};


if(process.argv[2] == 'get') {
    getByAxios();
} else if (process.argv[2] == 'post') {
    postByAxios();
} else if (process.argv[2] == 'delete') {
    deleteByAxios(process.argv[3]);
} else {
    console.log('Error: no se pudo ejecutar Axios')
}