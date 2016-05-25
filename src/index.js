import './style/index.scss';
import './index.html?output=index.html';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import ProjectsPage from './components/ProjectsPage';
import ActivityPage from './components/ActivityPage';
import MessagesPage from './components/MessagesPage';
import MessageDetailPage from './components/MessageDetailPage';
import TasksPage from './components/TasksPage';
import SettingPage from './components/SettingPage';

const routes = {
  '/': ProjectsPage,
  '/:project_id/activity': ActivityPage,
  '/:project_id/messages': MessagesPage,
  '/:project_id/messages/:id': MessageDetailPage,
  '/:project_id/tasks': TasksPage,
  '/:project_id/setting': SettingPage,
};

m.route(document.body, '/', routes);
