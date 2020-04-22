import React, { useState, FormEvent } from 'react'
import { Title, Form, RepositoriesLinks, Error } from './Dashboard.style'
import logoImage from '../assets/logo.svg'
import RepositoryLink from '../repository/RepositoryLink'
import api from '../app.api'
import RepositoryModel from '../repository/Repository.model'

export default () => {
  const [repositoryName, setRepositoryName] = useState('')
  const [repositories, setRepositories] = useState<RepositoryModel[]>([])
  const [inputError, setInputError] = useState('')

  const addRepositoryToList = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!repositoryName) {
      setInputError('Digite o autor/nome do repositório')
    } else {
      try {
        const { data } = await api.get<RepositoryModel>(`repos/${repositoryName}`)
        setRepositories([...repositories, data])
        setRepositoryName('')
        setInputError('')
      } catch (e) {
        setInputError('Erro na busca pelo repositório')
      }
    }
  }

  return (
    <section>
      <img src={logoImage} alt='Github Explorer'></img>
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={e => addRepositoryToList(e)}>
        <input
          placeholder='Digite o nome do repositório'
          value={repositoryName}
          onChange={e => setRepositoryName(e.target.value)}
        />
        <button type='submit'>Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <RepositoriesLinks>
        {repositories.map(repository => (
          <RepositoryLink key={repository.full_name} repository={repository} />
        ))}
      </RepositoriesLinks>
    </section>
  )
}
