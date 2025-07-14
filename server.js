
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

const dadosEmpresa = {
    nome: "Bela Dona",
    missao: "Oferecer produtos de higiene e beleza com excelência, inovação e responsabilidade social, promovendo bem-estar e autoestima aos nossos clientes.",
    visao: "Ser referência nacional em qualidade, inovação e impacto social no setor de higiene e beleza, expandindo para novos mercados com sustentabilidade.",
    valores: [
        "Compromisso com a qualidade",
        "Valorização dos colaboradores",
        "Responsabilidade social e ambiental",
        "Relacionamento ético com fornecedores e parceiros",
        "Inovação constante",
        "Respeito ao consumidor"
    ]
};

app.get('/', (req, res) => {
    res.render('index', { dados: dadosEmpresa });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
