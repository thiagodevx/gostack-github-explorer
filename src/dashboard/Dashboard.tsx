import React from 'react'
import { Title, Form, RepositoriesLinks } from './Dashboard.style'
import logoImage from '../assets/logo.svg'

export default () => (
  <section>
    <img src={logoImage} alt='Github Explorer'></img>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder='Digite o nome do repositório' />
      <button type='submit'>Pesquisar</button>
    </Form>
    <RepositoriesLinks>
      <a href='teste'>
        <img
          src='https://avatars1.githubusercontent.com/u/59992056?s=460&u=ea4ba7b4460a1b6fe0b27b9b31273f464e6cb990&v=4'
          alt='thiagodevx'
        ></img>
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
        </div>
      </a>
    </RepositoriesLinks>
  </section>
)
