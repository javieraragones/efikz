import './App.css'
import { BookmarksBox } from './components/Bookmarks/Bookmarks'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { NewsBox } from './components/News/News'
import { TodoBox } from './components/Todo/Todo'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <div className='left-side'>
          <BookmarksBox />
        </div>
        <div className='right-side'>
          <div className='todo-container'>
            <TodoBox />
          </div>
          <div className='news-info-container'>
            <NewsBox />
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default App
