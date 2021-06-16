const request = require('supertest')('http://localhost:3000');
const expect = require('chai').expect;
const generador = require('../src/faker/products');
const app = require('../src/index') 

describe('Test de api rest full', () => {
    describe('Metodo GET', () => {
        it('Deberia retornar un status 200', async () => {
            let response = await request.get('/products');
            expect(response.status).to.eql(200);
        });

        it('Deberia retornar un objeto', async () => {
            let response = await request.get('/products');
            expect(typeof(response.body)).to.eql('object');
        })
    });

    describe('Metodo POST', () => {
        it ('Deberia retornar un status 201 ', async () => {
            let product = generador.randomProfucts();
            let response = await request.post('/products').send(product);
            expect(response.status).to.eql(201);
        });

        it('Deberia incorporar un nuevo producto', async () => {
            let product = generador.randomProfucts();
            let response = await request.post('/products').send(product);
            const prod = response.body;
            expect(prod).to.eql('product added successfully');
        });
    });

    describe('Metodo GET By Id', () => {
        it('Deberia retornar un status 200', async () => {
            let response = await request.get('/products/1');
            expect(response.status).to.eql(200);
        });

        it('Deberia devolver un producto por su Id', async () => {
            let id = 1
            let response = await request.get('/products/'+id);
            expect(response.body.id).to.eql(id);
        });

        it('Deberia devolver un objeto', async () => {
            let response = await request.get('/products/1');
            expect(typeof(response.body)).to.eql('object');
        });
    });

    describe('Metodo PUT', () => {
        it ('Deberia retornar un status 200 ', async () => {
            let product = generador.randomProfucts();
            let response = await request.put('/products/2').send(product);
            expect(response.status).to.eql(200);
        });

        it('Deberia actializar un producto', async () => {
            let product = generador.randomProfucts();
            let response = await request.put('/products/2').send(product);
            const prod = response.body;
            expect(prod).to.eql('Product updated successfully'); 
        });
    });    

    describe('Metodo DELETE', () => {
        it('Deberia retornar un status 200', async () => {       
            let response = await request.delete('/products/2')
            expect(response.status).to.eql(200);
        });

        it('Deberia eliminar un producto', async () => {
            let response = await request.delete('/products/2')
            expect(response.body).to.eql('Product deleted successfully');
        });
    });
});
