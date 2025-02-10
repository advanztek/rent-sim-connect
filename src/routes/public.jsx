import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Public'
import Layout from '../layout/Layout'

export default function PublicRoutes () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Layout>
  )
}
