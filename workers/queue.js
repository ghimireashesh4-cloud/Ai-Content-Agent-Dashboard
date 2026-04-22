export class Queue {
  constructor() {
    this.jobs = [];
  }

  add(job) {
    this.jobs.push(job);
  }

  process() {
    // Process jobs
  }
}
