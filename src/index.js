import './style/index.scss';
import './index.html?output=index.html';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import ProjectListContainer from './components/ProjectListContainer';
import ActivityPageContainer from './components/ActivityPageContainer';
import MessagesPageContainer from './components/ActivityPageContainer';
import TasksPageContainer from './components/TasksPageContainer';

const routes = {
  '/': ProjectListContainer,
  '/activity': ActivityPageContainer,
  '/messages': MessagesPageContainer,
  '/tasks': TasksPageContainer,
};

m.route(document.body, '/', routes);
