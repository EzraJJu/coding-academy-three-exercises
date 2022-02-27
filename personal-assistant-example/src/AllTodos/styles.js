import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  margin: auto;
`

export const Input = styled.input.attrs(({ theme }) => ({
  placeholderColor: theme.colors.fonts.placeholder,
}))`
  flex: 1;
  max-width: 250px;
  height: 24px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 14px;
  border: none;
  background: ${({ theme }) => theme.colors.layout.secondary};
  border-radius: 2px;
  margin-right: 10px;
  padding-left: 5px;
`

export const Button = styled.button`
  height: 24px;
  width: 110px;
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

export const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fonts.header};
`

export const TodosList = styled.ul`
  list-style: none;
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const NoTodos = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fonts.header};
`
