## instalar dependencis

pg, cors, express, dotenv, sequelize, sequelize-cli, nodemon, mysql2

## iniciar o projeto com sequelize-cli

npx sequelize-cli init

## configurar o arquivo config.json, transforma-lo em js e usar o dotenv

## usar o comando para criar a model com migrate

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

## configurar a model e deixa a tabela igual na migration e na model

## criou o banco de dados com o comando abaixo

npx sequelize-cli db:create

## enviamos as migrations para o banco criado

npx sequelize-cli db:migrate

## criamos as pastas controller e routes para configurar a logica e as rotas de usuarios

