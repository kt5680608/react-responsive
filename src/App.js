import './App.css';
import { useMediaQuery } from 'react-responsive'

function App() {

  const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
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
      <Desktop>
        <div className = "Desktop__container">
          <h1 className = "Desktop__h1">Desktop</h1>
        </div>
      </Desktop>
      <Tablet>
      <div className = "Tablet__container">
          <h1 className = "Tablet__h1">Tablet</h1>
        </div>
      </Tablet>
      <Mobile>
      <div className = "Mobile__container">
          <h1 className = "Mobile__h1">Mobile</h1>
        </div>
      </Mobile>
      <Default> ( It's Not Mobile ) </Default>
    </div>
  )
  return (
    <Example />
  );
}

export default App;
