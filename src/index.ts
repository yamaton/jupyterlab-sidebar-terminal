import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-sidebar-terminal extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-sidebar-terminal:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-sidebar-terminal is activated!');
  }
};

export default plugin;
