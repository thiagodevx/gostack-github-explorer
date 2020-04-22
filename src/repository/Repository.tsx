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
          <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map(issue => (
          <Link to=''>
            <div key={issue.id}>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Issues>
    </React.Fragment>
  )
}
