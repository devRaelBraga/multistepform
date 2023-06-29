import styled from 'styled-components'
import desktopSidebarBackground from '../../assets/images/bg-sidebar-desktop.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(217, 100%, 97%);
  width: 100vw;
  height: 100vh;
`

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  width: 70vw;
  max-width: 1400px;
  height: 80vh;
  border-radius: 15px;
  padding: 20px;
`

export const Sidebar = styled.div`
  display: flex;
  background-image: url(${desktopSidebarBackground});
  width: 20vw;
  background-repeat: no-repeat;
  justify-content: center;
  padding-top: 40px;
  user-select: none !important;
`

export const StepHolders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  align-items: left;
  margin-left: -6vw;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: red;
  width: 70%;
`