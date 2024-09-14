import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Complete React Course',
      summary:
        'Finish the React course and understand hooks, state management, and routing.',
      dueDate: '2024-08-15',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Develop API Documentation',
      summary:
        'Create comprehensive API documentation for the current project.',
      dueDate: '2024-10-01',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Implement Authentication',
      summary:
        'Integrate OAuth and JWT-based authentication for the mobile app.',
      dueDate: '2025-01-20',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Optimize Website Performance',
      summary:
        'Improve load time and optimize asset management for the web app.',
      dueDate: '2024-09-30',
    },
    {
      id: 't8',
      userId: 'u1',
      title: 'Refactor Backend Code',
      summary:
        'Refactor the current backend code to improve maintainability and performance.',
      dueDate: '2024-11-20',
    },
    {
      id: 't9',
      userId: 'u4',
      title: 'Design User Onboarding Flow',
      summary:
        'Design and implement an intuitive onboarding process for new users.',
      dueDate: '2024-12-10',
    },
    {
      id: 't10',
      userId: 'u2',
      title: 'Launch Beta Version',
      summary:
        'Prepare and launch the beta version of the new app for testing.',
      dueDate: '2024-07-15',
    },
    {
      id: 't11',
      userId: 'u6',
      title: 'Create Marketing Plan',
      summary:
        'Develop a marketing strategy to promote the new features of the app.',
      dueDate: '2024-08-30',
    },
    {
      id: 't12',
      userId: 'u5',
      title: 'Run Unit Tests',
      summary:
        'Write and run unit tests for critical features of the application.',
      dueDate: '2024-09-20',
    },
    {
      id: 't13',
      userId: 'u3',
      title: 'Setup Continuous Integration',
      summary: 'Configure CI pipelines for automated builds and testing.',
      dueDate: '2024-10-05',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
