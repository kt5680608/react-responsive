import './App.css';
import { useMediaQuery } from 'react-responsive'

function App() {

  const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Laptop = ({ children }) => {
    const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isLaptop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  } 

  const Example = () => (
    <div>
      <Desktop>Desktop</Desktop>
      <Laptop>Laptop</Laptop>
      <Mobile>Mobile</Mobile>
      <Default> ( It's Not Mobile ) </Default>
    </div>
  )
  return (
    <Example />
  );
}

export default App;
