import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfo, Issues } from './Repository.style'
import logoImage from '../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../app.api'
interface RepositoryParams {
  repositoryName: string
}
interface RepositoryInterface {
  full_name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}
const initialStateRepository: RepositoryInterface = {
  full_name: '',
  description: '',
  stargazers_count: 0,
  forks_count: 0,
  open_issues_count: 0,
  owner: {
    login: '',
    avatar_url: ''
  }
}
interface IssueInterface {
  title: string
  id: string
  user: {
    login: string
  }
}
export default () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repository, setRepository] = useState<RepositoryInterface>(initialStateRepository)
  const [issues, setIssues] = useState<IssueInterface[]>([])

  useEffect(() => {
    api.get(`repos/${params.repositoryName}`).then(response => setRepository(response.data))
    api.get(`repos/${params.repositoryName}/issues`).then(response => setIssues(response.data))
  }, [params.repositoryName])

  return (
    <React.Fragment>
      <Header>
        <img src={logoImage} alt='Github Explorer'></img>
        <Link to='/dashboard'>
          <FiChevronLeft size={16}></FiChevronLeft>
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src='https://avatars0.githubusercontent.com/u/28929274?v=4' alt='imagem do repositório'></img>
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to=''>
          <div>
            <strong>asassadasdsa</strong>
            <p>asfsadasd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </React.Fragment>
  )
}
