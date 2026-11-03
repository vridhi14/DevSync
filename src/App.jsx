import {BrowserRouter , Routes , Route} from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>

    <div>
      <Toaster/>
    </div>

    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/editor/:id' element={<EditorPage/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
