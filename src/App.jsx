import { Footer, Header } from "./component"
import { AppRouter } from "./routes/AppRouter"

const App = () => {
  return(
    <>
      <Header/>
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App