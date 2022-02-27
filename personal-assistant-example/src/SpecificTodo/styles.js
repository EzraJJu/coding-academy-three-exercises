import styled from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
`

export const DescriptionInput = styled.textarea`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.layout.secondary};
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.fonts.body};
`

export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fonts.header};
`

export const SaveTodo = styled.button`
  height: 24px;
  width: 110px;
  align-self: center;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.layout.accent};
  color: ${({ theme }) => theme.colors.fonts.button};
  border: none;
  border-radius: 2px;

  &:hover {
    background: ${({ theme }) => theme.colors.layout.darkAccent};
    cursor: pointer;
  }
`
