import React from 'react'

import styles from './header.module.css'

import { IoReorderThree } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { CiUser } from "react-icons/ci";

export default function Header() {
    return (
        <header className={styles.header}>
            <IoReorderThree className={styles.icons} size={28}/>
            <h1>Cadastro de usuários</h1>
            <div>
                <MdOutlineSearch className={styles.icons}size={28}/>
                <CiUser className={styles.icons}size={28}/>
            </div>
        </header>
    )
}