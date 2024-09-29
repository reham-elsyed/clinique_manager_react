import React from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from '../context/AppContext.jsx'
import AuthContextProvider, { AuthContext } from '../context/AuthContext.jsx'
import  CreateUserDatabaseContextProvider from '../context/UserDbContext.jsx'
import DoctorDatabaseContextProvider from '../context/DoctorDatabaseContext.jsx'
import AppointmentContextProvider from '../context/AppointmentContext.jsx'
import AvailableSlotsContextProvider from '../context/AvailableSlotsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <AppContextProvider>
      <AuthContextProvider>
        <DoctorDatabaseContextProvider>
          <AppointmentContextProvider>
            <CreateUserDatabaseContextProvider>
              <AvailableSlotsContextProvider>
              <BrowserRouter>
              <React.StrictMode>
                <App />
                </React.StrictMode>
              </BrowserRouter>
              </AvailableSlotsContextProvider>
            </CreateUserDatabaseContextProvider>
          </AppointmentContextProvider>
        </DoctorDatabaseContextProvider>
      </AuthContextProvider>
    </AppContextProvider>
    
)
