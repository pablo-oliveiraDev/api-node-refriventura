const express = require('express');
const cors = require('cors');
const Users = require('./dataBases/users');
const Serv = require('./dataBases/users');


const app = express();
app.use(express.json());
app.use(cors());

app.post(`/users`, async (req, res) => {

    const data = req.body;

    const snapshot = await Users.Users.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const usuario = usuarios.filter((u) => {
        return u.email === data.email;
    });
    
    if (usuario === undefined || usuario.length === 0) {
        await Users.Users.add(data);
        try {
            res.status(201).send({ msg: 'Usuario cadastrado com sucesso!' });
        } catch (error) {
            res.send({ msg: 'Erro ao cadastrar usuario!' })
        }
    } else {
        res.send({ msg: 'email ja cadastrado' });
    }

});



app.get(`/users`, async (req, res) => {

    const snapshot = await Users.Users.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    try {
        res.send(usuarios);
    } catch (error) {
        res.send(error);
    }


});

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const snapshot = await Users.Users.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const usuario = usuarios.filter((u) => {
        return u.id == id;

    });
    res.send(usuario);

});
app.put('/users/:id', async (req, res) => {

    const id = req.params.id;
    await Users.Users.doc(id).update(req.body);

    res.send({ msg: "Usuario atualizado com sucesso!" });
});

app.delete('/users/:id', async (req, res) => {

    const id = req.params.id;
    await Users.Users.doc(id).delete();

    res.send({ msg: "Usuário deletado com sucesso!" })
});

//servicos


app.post(`/servicos`, async (req, res) => {

    const data = req.body;
    await Serv.Serv.add(data);
    try {
        res.status(201).send({ msg: 'Servico cadastrado com sucesso!' });
    } catch (error) {
        res.send({ msg: 'Erro ao cadastrar serviço!' })
    }


});



app.get(`/servicos`, async (req, res) => {

    const snapshot = await Serv.Serv.get();
    const servicos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    try {
        res.send(servicos);
    } catch (error) {
        res.send(error);
    }


});

app.get('/servicos/:id', async (req, res) => {
    const id = req.params.id;
    const snapshot = await Serv.Serv.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const servicos = servicos.filter((u) => {
        return u.id == id;

    });
    res.send(usuario);

});
app.put('/servicos/:id', async (req, res) => {

    const id = req.params.id;
    await Serv.Serv.doc(id).update(req.body);

    res.send({ msg: "serviços atualizado com sucesso!" });
});

app.delete('/servicos/:id', async (req, res) => {

    const id = req.params.id;
    await Serv.Serv.doc(id).delete();

    res.send({ msg: "Servico deletado com sucesso!" })
});

//login

app.get('/logeed', async (req, res) => {

    const email = req.query.user;
    const senha = req.query.password;
    
    const snapshot = await Users.Users.get();
    const usuarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const usuario = usuarios.filter((u) => {
        return u.email === email && u.senha === senha;

    });
    if(!!usuario){
        res.send(usuario);
    }else{
        res.send({msg:'Emal e senha nao econtrados!😥'});
    }
    

});




app.listen(process.env.PORT || 5080, () => {
    console.log('Voce esta conectado em http://localhost:5080')
});