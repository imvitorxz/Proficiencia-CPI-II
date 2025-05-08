import React from 'react'

import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 - Todos os direitos reservados</p>
            <p>Desenvolvido por <a href="https://github.com/imvitorxz">imvitorxz</a></p>
        </footer>
    )
}