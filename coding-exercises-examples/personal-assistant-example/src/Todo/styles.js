import styled from 'styled-components'

export const DeleteButton = styled.button`
  position: absolute;
  left: 0;
  top: 3px;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.layout.accent};
  border: none;
  display: none;

  &::before, &::after {
    content: '';
    left: 1px;
    position: absolute;
    width: 18px;
    height: 2px;
    background: white;
    transform: rotate(45deg)
  }
  &::after {
    transform: rotate(-45deg)
  }

  &:hover {
    background: ${({ theme }) => theme.colors.layout.darkAccent};
  }
`

export const Container = styled.div`
  position: relative;
  padding-left: 25px;
  height: 20px;
  width: 100%;

  &:hover {
    ${DeleteButton} {
      display: block;
      cursor: pointer;
    }
  }
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: ${({ theme }) => theme.fonts.body.weight};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.fonts.body};

  &:hover {
    cursor: pointer;
  }
`
