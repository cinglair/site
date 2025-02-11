import styled from 'styled-components'

export const Container = styled.footer`
  max-width: 120rem;
  padding: 0 1.6rem;

  height: 48rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    min-height: 51.2rem;
    margin: 0 auto;
  }
`
export const InternalLinks = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 4.8rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
    margin-top: 6.4rem;
  }
`

export const SectionImage = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  span {
    margin-top: 1.6rem;
    max-width: 36rem;
    color: ${props => props.theme.colors.text2};

    p {
      font-size: 1.2rem;
      color: ${props => props.theme.colors.text2};
    }
  }

  img {
    margin: 0 auto;
    width: 20.8rem;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 4.8rem;
      max-width: 24rem;
    }
  }
`
export const SocialLinks = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 5.2rem 0 4.8rem;

  span {
    margin-top: 2.4rem;
    color: ${props => props.theme.colors.text2};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
    flex-direction: row;
    justify-content: space-between;

    padding-top: 2.4rem;
    margin: 16rem 0 4.8rem;

    border-top: 1px solid ${props => props.theme.colors.text2};

    span {
      margin-top: 0;
    }
  }
`

export const SocialLinksIcons = styled.section`
  a {
    svg {
      color: ${props => props.theme.colors.text2};
      font-size: 2.4rem;
    }
  }
  a + a {
    margin-left: 1.6rem;
  }
`
