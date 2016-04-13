import './style/index.scss';
import './index.html?output=index.html';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import ProjectsPageContainer from './components/ProjectsPageContainer';
import ActivityPage from './components/ActivityPage';
import MessagesPage from './components/ActivityPage';
import TasksPage from './components/TasksPage';
import SettingPageContainer from './components/SettingPageContainer';

const routes = {
  '/': ProjectsPageContainer,
  '/activity': ActivityPage,
  '/messages': MessagesPage,
  '/tasks': TasksPage,
  '/setting': SettingPageContainer,
};

m.route(document.body, '/', routes);
