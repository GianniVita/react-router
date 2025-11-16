
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DafaultLayout'
import HomePage from './pages/HomePages'
import PostsPage from './pages/PostsPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

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
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Route>




        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App