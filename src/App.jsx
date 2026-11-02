import {BrowserRouter , Routes , Route} from 'react-router-dom'; 

function App() {
  

  return (
    <>
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
