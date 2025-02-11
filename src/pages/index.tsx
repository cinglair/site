import {
  Page,
  Initial,
  Actuation,
  Members,
  About,
  SectionFooter,
  Marquee
} from '@/styles/pages/Home'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import { Footer } from '@/components'

import SEO from '@/components/SEO'
import Header from '@/components/Header'
import Member from '@/components/MembersHome/index'

import Link from '@/components/Link'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'

  return (
    <>
      <SEO title="Home" description={description} image="/occam.png" />
      <Page>
        <Initial>
          <Header />
          <main>
            <h1>Soluções Simples, Resultados Inovadores</h1>
            <div>
              <img src="animacao.gif" alt="logo animada OCCAM" />

              <div>
                <FaCaretLeft />
                <span>O novo site da OCCAM está aqui!</span>
                <FaCaretRight />
              </div>
            </div>
          </main>
        </Initial>
        <Actuation>
          <main>
            <h3>Áreas de Atuação</h3>
            <section>
              <img
                src="Smartphone.svg"
                alt="Imagem de uma mão segurando um telefone"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown{' '}
              </p>
            </section>
            <section>
              <img
                src="Computador.svg"
                alt="Imagem de um monitor e um tablet representando desenvolvimento web"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown{' '}
              </p>
            </section>
            <section>
              <img
                src="/Engrenagem.svg"
                alt="Imagem de uma engrenagem com um botão de reproduzir no centro"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown{' '}
              </p>
            </section>

            <Link icon={BsFillQuestionCircleFill} href="" text="Saiba mais" />
          </main>
        </Actuation>

        <Members>
          <div>Nossa Equipe</div>
          <Member />
          <div>Histórico de Membros</div>
        </Members>

        <About>
          <div>
            <h4>Sobre Nós</h4>
            <span>
              Desde 2014 trabalhando para desenvolver atividades que possam
              ampliar e melhorar a qualidade de vida da comunidade ao seu redor.
            </span>
            <h5>Saiba Mais</h5>
          </div>
          <img src="/Computer_and_hands.png" alt="mãos sobre um computador" />
        </About>

        <SectionFooter id="footer">
          <Marquee>
            <div>
              <h1>Nossos parceiros</h1>

              <button>
                Torne-se nosso parceiro <FaCaretRight />
              </button>
            </div>

            <aside>
              <section>
                <img src="parceiros/7keyframes.svg" alt="7keyframes" />
                <img src="parceiros/conectar.svg" alt="conectar" />
                <img src="parceiros/coca-cola.svg" alt="coca cola" />
              </section>
            </aside>
          </Marquee>
          <Footer />
        </SectionFooter>
      </Page>
    </>
  )
}

export default Home
