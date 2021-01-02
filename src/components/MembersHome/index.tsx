import { useState } from 'react'
import { MemberStyle, Links } from './styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Member() {
  const [name, setName] = useState([])
  const [job, setJob] = useState([])
  async function ChangeMember() {}

  return (
    <MemberStyle>
      <img src="/banner.png"></img>
      <section>
        <div>Gabriel Prando</div>
        <label>Diretor de Projetos</label>
        <Links>
          <FaGithub />
          <FaLinkedin />
        </Links>
      </section>
    </MemberStyle>
  )
}
