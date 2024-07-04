import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br/>
            <span>sLdaGama</span> <br />
            Desenvolvedor Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Know More
          </Link>
        </div>
        <figure>
          <img className={styles.img_home} src="/homeimg.svg" alt="Imagem de Home"/>
        </figure>
      </section>
    )
}

export default Home
