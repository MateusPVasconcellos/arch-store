ArcH Store
Desafio - Front End - Janeiro/2023

rocket Começando
Baixe ou clone o projeto para sua maquina.
Projeto desenvolvido em OS Linux Ubuntu 20.4.

wrench
Insira na raiz do projeto para subir containers com db, app, e realizar migrations:

docker-compose up
gear Testar End Points no Postman
Va na sua Workspace do Postman e importe a collection via link.
Link:
https://www.getpostman.com/collections/f38b69e5a08a0880af75
gear Executando os testes
Realizar testes automatizados, insira na raiz do projeto:

docker container exec prova-estagio-backend_app_1 npm test
gear Executando os desafios
Na raiz do projeto entre com:

Primeiro instale dependências:
npm install axios --save
Rode os desafios:
npm run desafios
Desafios serao impressos em sequência.
Ou:

node <nome do arquivo>
hammer_and_wrench Construído com
Express - O framework web usado.
Sequelize - ORM.
Postgres - Banco de dados relacional.
black_nib Autor
Desenvolvedor - Mateus de Paula Vasconcellos
gift Expressões de gratidão
Muito feliz por participar do processo de seleção para a Smart NX, foi um grande desafio, que com certeza contribuiu para o meu sonho de me tornar um grande desenvolvedor! Obrigado !!
