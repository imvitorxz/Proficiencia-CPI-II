import styles from './MainForm.module.css'

export default function MainForm() {
    return (
        <form className={styles.form}>
            <h2>Formulário</h2>
            <p>
                Seja bem-vindo ao nosso formulário! Aqui você pode se cadastrar e aproveitar todas as nossas funcionalidades. Preencha os campos abaixo para começar sua jornada conosco.
            </p>
            <div className={styles.formOneModule}>
                <label className={styles.label} name="nome" id="nome">Nome:</label>
                <input type="text"/>
            </div>
            <div className={styles.formOneModule}>
                <label className={styles.label} name="email" id="email">Email:</label>
                <input type="email"/>
            </div>
            <div className={styles.formOneModule}>
               <label className={styles.label} name="senha" id="senha">Senha:</label>
                <input type="password"/>
            </div>
        </form>
    )
}