import {BrowserRouter , Routes , Route, BrowserRouter} from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0)

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
