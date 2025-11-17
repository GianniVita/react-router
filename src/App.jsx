
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePages'
import PostsPage from './pages/PostsPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import AdminLayout from './layouts/AdminLayout'


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
            {/* All the routes here will share the DefaultLayout */}
            <Route path='/' element={<HomePage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Route>

          <Route element={<AdminLayout />}>
            {/* All the routes here will share the AdminLayout */}
            <Route path="/admin" element={<h1>Admin dashboard</h1>} />

          </Route>




        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App