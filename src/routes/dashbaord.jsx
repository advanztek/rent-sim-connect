import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </DashboardLayout>
  )
}

export default DashboardRoutes
