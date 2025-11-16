
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/pages/HomePages'
import PostsPage from './assets/pages/PostsPage'


/* Routes list:
- / HomePage
- /posts PostPage
- /contacts ContactsPage 
- /about AboutPage
*/


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/posts' element={<PostsPage />}></Route>
          <Route path='/contacts' element={<h1>Contacs Page</h1>}></Route>
          <Route path='/about' element={<h1>About Page</h1>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App