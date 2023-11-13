import EventPlanningController from './controller/EventPlanningController.js';

class App {
  async run() {
    const eventPlanning = new EventPlanningController();
    await eventPlanning.runPlanning();
  }
}

export default App;
