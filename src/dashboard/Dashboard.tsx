import React from 'react'
import { Title, Form, RepositoriesLinks } from './Dashboard.style'
import logoImage from '../assets/logo.svg'
import RepositoryLink from '../repository/RepositoryLink'

export default () => (
  <section>
    <img src={logoImage} alt='Github Explorer'></img>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder='Digite o nome do repositório' />
      <button type='submit'>Pesquisar</button>
    </Form>
    <RepositoriesLinks>
      <RepositoryLink></RepositoryLink>
      <RepositoryLink></RepositoryLink>
      <RepositoryLink></RepositoryLink>
    </RepositoriesLinks>
  </section>
)
