import './style/index.scss';
import './index.html?output=index.html';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import ProjectsPageContainer from './components/ProjectsPageContainer';
import ActivityPage from './components/ActivityPage';
import MessagesPage from './components/ActivityPage';
import TasksPageContainer from './components/TasksPageContainer';
import SettingPageContainer from './components/SettingPageContainer';

const routes = {
  '/': ProjectsPageContainer,
  '/activity': ActivityPage,
  '/messages': MessagesPage,
  '/tasks': TasksPageContainer,
  '/setting': SettingPageContainer,
};

m.route(document.body, '/', routes);
