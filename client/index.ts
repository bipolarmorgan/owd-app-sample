import {ModuleApp} from "@owd-client/core/index";
import {OwdModuleAppLoadSseEventsContext, OwdModuleAppLoadCommandsContext, OwdModuleAppLoadStoreContext} from "@owd-client/types";

// window components
import WindowSample from "./windows/WindowSample.vue";

export default class SampleModule extends ModuleApp {
  loadModule() {
    return {
      name: "sample",
      singleton: true,
      windows: [
        {
          component: WindowSample,
          name: "WindowSample",
          title: "OWD Sample Module",
          titleMenu: "Sample",
          icon: {
            name: "mdi-application",
            size: "25px",
            offset: {
              y: -1
            }
          },
          menu: true,
          resizable: false,
          size: {
            width: 448,
            height: 240
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          }
        }
      ]
    }
  }

  loadAssets() {
    // import additional assets
  }

  loadStore() {
    // define store structure for your module
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  loadStoreInstance({store, terminal}: OwdModuleAppLoadStoreContext) {
    // define store structure for your window instance
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  loadCommands({store, terminal}: OwdModuleAppLoadCommandsContext) {
    // define terminal command callbacks
    return {
      'sample': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowSample'
        });
      }
    }
  }

  loadSseEvent({store}: OwdModuleAppLoadSseEventsContext) {
    // define SSE event callbacks
    return {
      'open-sample': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowSample'
        });
      }
    }
  }
}