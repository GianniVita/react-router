
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePages'
import PostsPage from './pages/PostsPage'
import DefaultLayout from './layouts/DafaultLayout'


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


          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/contacts' element={<h1>Contacs Page</h1>} />
            <Route path='/about' element={<h1>About Page</h1>} />
          </Route>




        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App