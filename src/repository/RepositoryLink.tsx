import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import RepositoryModel from './Repository.model'

type RepositoryLinkProps = {
  repository: RepositoryModel
}
export default (props: RepositoryLinkProps) => (
  <a href={props.repository.owner.avatar_url}>
    <img src={props.repository.owner.avatar_url} alt={props.repository.full_name}></img>
    <div>
      <strong>{props.repository.full_name}</strong>
      <p>{props.repository.description}</p>
    </div>
    <FiChevronRight size={20} />
  </a>
)
