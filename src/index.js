import './style/index.scss';
import './index.html?output=index.html';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import ProjectsPage from './components/ProjectsPage';
import ActivityPage from './components/ActivityPage';
import MessagesPage from './components/ActivityPage';
import TasksPage from './components/TasksPage';
import SettingPage from './components/SettingPage';

const routes = {
  '/': ProjectsPage,
  '/activity': ActivityPage,
  '/messages': MessagesPage,
  '/tasks': TasksPage,
  '/setting': SettingPage,
};

m.route(document.body, '/', routes);
