import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fonts.header};
`


export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.fonts.body};
`
