import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>sLdaGama</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}



export default Header
