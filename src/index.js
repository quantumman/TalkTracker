import './style/index.scss';
import './index.html?output=index.html';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import ProjectListContainer from './components/ProjectListContainer';
import ActivityPageContainer from './components/ActivityPageContainer';

const routes = {
  '/': ProjectListContainer,
  '/activity': ActivityPageContainer,
};

m.route(document.body, '/', routes);
