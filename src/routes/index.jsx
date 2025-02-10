import { useLocation } from 'react-router-dom'
import DashboardRoutes from './dashbaord'
import PublicRoutes from './public'

export default function Router () {
  const { pathname } = useLocation()

  return pathname.startsWith('/dashboard') ? (
    <DashboardRoutes />
  ) : (
    <PublicRoutes />
  )
}
