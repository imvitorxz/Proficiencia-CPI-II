import styles from './MainForm.module.css'

export default function MainForm() {
    return (
        <form className={styles.form}>
            <h2>Formulário</h2>
            <p>
                Seja bem-vindo ao nosso formulário! Aqui você pode se cadastrar e aproveitar todas as nossas funcionalidades. Preencha os campos abaixo para começar sua jornada conosco.
            </p>
            <div className={styles.formOneModule}>
                <label className={styles.label} name="nome" id="nome">Nome</label>
                <input className={styles.input} id="inputName" name="inputName" type="text" placeholder='Insira seu nome'/>
            </div>
            <div className={styles.formOneModule}>
                <label className={styles.label} name="email" id="email">Email</label>
                <input className={styles.input} id="email" input="email" type="email" placeholder='Insira seu e-mail'/>
            </div>
            <div className={styles.formOneModule}>
               <label className={styles.label} name="senha" id="senha">Senha</label>
                <input className={styles.input} name="password" id="password" type="password" placeholder='Insira sua senha'/>
            </div>
        </form>
    )
}