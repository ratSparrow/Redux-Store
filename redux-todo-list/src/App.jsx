
import './App.css'
import TodoList from './components/main/TodoList'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Navbar from './components/shared/Navbar'

function App() {


  return (
    <>

      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        {/* <!-- navbar --> */}

        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header />

          <hr className="mt-4" />

          {/* todo list */}
          <TodoList />

          <hr className="mt-4" />

          <Footer />

        </div>
      </div>
    </>
  )
}

export default App
