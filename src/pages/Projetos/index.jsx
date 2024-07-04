import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos() {
    const [ repositories, setRepositories ] = useState([])
    
    useEffect(() => {
        const buscarRepositorios = async () => {
            const resposta = await fetch('https://api.github.com/users/sldagama/repos?page=1&per_page=50')
            const dados = await resposta.json()
            setRepositories(dados)
        }
        buscarRepositorios()
    },[])

    
    
    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {   
                            repositories.map((repo) => (
                                <Card 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} 
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando Repositórios...</p>
                )
            }
        </section>
    )
}

export default Projetos
