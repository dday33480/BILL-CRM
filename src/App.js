import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import JobPage from './pages/JobPage'
import CreateJobPage from './pages/CreateJobPage'
import QuotePage from './pages/QuotePage'
import CreateQuotePage from './pages/CreateQuotePage'
import Nav from './components/Nav'

function App() {
  return (
    <div className="app">
<BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/jobs' element={<JobPage/>}/>
        <Route path='jobs/create' element={<CreateJobPage/>}/>
        <Route path='/quotes' element={<QuotePage/>}/>
        <Route path='quotes/create' element={<CreateQuotePage/>}/>
        <Route path='/jobs/:id' element={<JobPage editMode={true}/>}/>
    </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
