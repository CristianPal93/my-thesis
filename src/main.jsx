import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login, Dashboard, My_Thesis, Topics, My_Student, Coodinator_Topic, Combiner, My_Topics} from './components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <BrowserRouter>
              <Routes>
                  <Route index element={<App />} />
                  <Route path="login" element={<Login />} />
                  <Route path="dashboard" element={<Dashboard/>} />
                  <Route path="my-thesis" element={<My_Thesis />} />
                  <Route path="my-student" element={<My_Student />} />
                  <Route path="topics" element={<Topics/>} />
                  <Route path='coordinator-topics' element={<Coodinator_Topic/>}/>
                  <Route path='work-thesis' element={<Combiner/>}/>
                  <Route path='my-topics' element={<My_Topics/>}/>
              </Routes>
          </BrowserRouter>
  </React.StrictMode>,
)
