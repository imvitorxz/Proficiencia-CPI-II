import styles from './MainForm.module.css'

import { useState } from 'react';


export default function MainForm() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formValidado, setFormValidado] = useState(false);

    function validateData(event) {

        event.preventDefault(); 
        
        if (name.length < 3) {
            alert('Nome inválido!');
            return;
        }
        if (email.length < 6) {
            alert('Email inválido!');
            return;
        }
        if (password.length < 6) {
            alert('Senha inválida!');
            return;
        }

        setFormValidado(true);
    }

    return (
        <form className={styles.form}>
            <h2>Formulário</h2>
            <p>
                Seja bem-vindo ao nosso formulário! Aqui você pode se cadastrar e aproveitar todas as nossas funcionalidades. Preencha os campos abaixo para começar sua jornada conosco.
            </p>
            <div className={styles.formOneModule}>
                <label className={styles.label} name="nome" id="nome">Nome</label>
                <input onChange={(e) => setName(e.target.value)} className={styles.input} id="inputName" name="inputName" type="text" placeholder='Insira seu nome' min={3} required/>
            </div>
            <div className={styles.formOneModule}>
                <label className={styles.label} name="email" id="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className={styles.input} id="email" input="email" type="email" placeholder='Insira seu e-mail' min={6} required/>
            </div>
            <div className={styles.formOneModule}>
               <label className={styles.label} name="senha" id="senha">Senha</label>
                <input onChange={(e) => setPassword(e.target.value)} className={styles.input} name="password" id="password" type="password" placeholder='Insira sua senha' min={6} required/>
            </div>
            <button className={styles.button} onClick={validateData}>
                Exibir cadastro
            </button>

            <div className={styles.divCadastroSucesso} style={{ display: formValidado ? 'block' : 'none' }}>
                <h2>Cadastro realizado com sucesso!</h2>
                <p>
                    Seus dados foram validados e cadastrados com sucesso, verifique se estão corretos.
                </p>
                <h3>
                    Nome
                </h3>
                <p>{name}</p>
                <h3>
                    Email
                </h3>
                <p>{email}</p>
                <h3>
                    Senha
                </h3>
                <p>não mostrada por questões de segurança.</p>
            </div>
        </form>
    )
}