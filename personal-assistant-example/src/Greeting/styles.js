import styled from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
`

export const Hello = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.fonts.header};
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.fonts.body};
`
