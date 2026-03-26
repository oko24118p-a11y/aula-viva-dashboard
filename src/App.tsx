/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import CourseDetail from './pages/CourseDetail';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import ClassroomDetail from './pages/ClassroomDetail';
import Resources from './pages/Resources';
import Grades from './pages/Grades';
import Attendance from './pages/Attendance';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/horario" element={<Schedule />} />
          <Route path="/cursos" element={<CourseDetail />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/calificaciones" element={<Grades />} />
          <Route path="/asistencia" element={<Attendance />} />
          <Route path="/notificaciones" element={<Notifications />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/aula" element={<ClassroomDetail />} />
          <Route path="/configuracion" element={<Settings />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
