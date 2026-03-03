import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design-engineering-tools',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tools-content">
      <h2 class="text-3xl font-bold mb-6 text-gray-900">Interactive Tools & Quizzes</h2>

      <div class="flex gap-4 mb-8 flex-wrap">
        <button 
          *ngFor="let tab of tabs"
          (click)="selectedTab = tab"
          [class.active]="selectedTab === tab"
          class="px-6 py-2 rounded-lg font-semibold transition"
          [ngClass]="selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'">
          {{ tab }}
        </button>
      </div>

      <!-- Quiz Section -->
      <div *ngIf="selectedTab === 'Quiz'">
        <h3 class="text-2xl font-bold mb-4 text-gray-900">Design Engineering Quiz</h3>
        
        <div *ngFor="let q of quizQuestions; let i = index" class="mb-8 p-6 bg-white border border-gray-300 rounded-lg">
          <h4 class="font-bold text-lg text-gray-900 mb-4">Question {{ i + 1 }}: {{ q.q }}</h4>
          
          <div class="space-y-3 mb-4">
            <button 
              *ngFor="let opt of q.options; let j = index"
              (click)="answerQuestion(i, j)"
              [class]="getOptionClass(i, j)"
              class="w-full text-left p-4 border-2 rounded-lg transition font-medium">
              {{ getOptionLabel(j) }}. {{ opt }}
            </button>
          </div>

          <div *ngIf="answered[i]" class="mt-4 p-4 rounded-lg" [ngClass]="answered[i] === q.answer ? 'bg-green-100 border border-green-600' : 'bg-red-100 border border-red-600'">
            <p class="font-semibold" [ngClass]="answered[i] === q.answer ? 'text-green-900' : 'text-red-900'">
              {{ answered[i] === q.answer ? '✓ Correct!' : '✗ Incorrect' }}
            </p>
            <p class="text-gray-700 mt-2"><strong>Explanation:</strong> {{ q.explanation }}</p>
          </div>
        </div>
      </div>

      <!-- Flashcards Section -->
      <div *ngIf="selectedTab === 'Flashcards'">
        <h3 class="text-2xl font-bold mb-4 text-gray-900">Study Flashcards</h3>
        
        <div *ngFor="let card of flashcards; let i = index" class="mb-6">
          <div 
            (click)="toggleFlip(i)"
            class="cursor-pointer p-8 rounded-lg transition transform hover:shadow-lg"
            [ngClass]="flipped[i] ? 'bg-blue-600 text-white' : 'bg-blue-100 border-2 border-blue-600'">
            <div class="text-center min-h-24 flex items-center justify-center">
              <p *ngIf="!flipped[i]" class="text-xl font-bold">{{ card.front }}</p>
              <p *ngIf="flipped[i]" class="text-lg">{{ card.back }}</p>
            </div>
          </div>
          <p class="text-center text-gray-600 mt-2 text-sm">Click to {{ flipped[i] ? 'flip back' : 'reveal answer' }}</p>
        </div>
      </div>

      <!-- Concepts Section -->
      <div *ngIf="selectedTab === 'Concepts'">
        <h3 class="text-2xl font-bold mb-4 text-gray-900">Key Concepts</h3>
        
        <div *ngFor="let concept of concepts" class="mb-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600">
          <h4 class="text-lg font-bold text-gray-900 mb-2">{{ concept.title }}</h4>
          <p class="text-gray-700 mb-3">{{ concept.definition }}</p>
          <p class="text-gray-600 text-sm"><strong>Example:</strong> {{ concept.example }}</p>
        </div>
      </div>
    </div>
  `
})
export class DesignEngineeringTools implements OnInit {
  tabs = ['Quiz', 'Flashcards', 'Concepts'];
  selectedTab = 'Quiz';
  answered: { [key: number]: number | null } = {};
  flipped: { [key: number]: boolean } = {};

  getOptionLabel(index: number): string {
    return String.fromCharCode(65 + index);
  }

  quizQuestions = [
    {
      q: 'What is the primary purpose of Design Engineering?',
      options: [
        'To write code as quickly as possible',
        'To translate requirements into architectural and component-level specifications',
        'To test software for bugs',
        'To deploy software to production'
      ],
      answer: 1,
      explanation: 'Design Engineering bridges abstract requirements and concrete implementations by creating architectural and component specifications.'
    },
    {
      q: 'Which of the following is NOT one of the five Design Model elements?',
      options: [
        'Data Design',
        'Architectural Design',
        'Testing Design',
        'Deployment Design'
      ],
      answer: 2,
      explanation: 'The five Design Model elements are: Data, Architectural, Interface, Component, and Deployment Design. Testing is a separate phase.'
    },
    {
      q: 'What does "high cohesion" mean in software design?',
      options: [
        'Modules are tightly dependent on each other',
        'Functions within a module are closely related and serve a single purpose',
        'The code is difficult to understand',
        'The system has many external dependencies'
      ],
      answer: 1,
      explanation: 'High cohesion means that elements within a module are strongly related and work toward a single well-defined purpose.'
    }
  ];

  flashcards = [
    {
      front: 'Abstraction',
      back: 'Hiding unnecessary complexity and exposing only essential features'
    },
    {
      front: 'Modularity',
      back: 'Decomposing a system into independent, interchangeable components'
    },
    {
      front: 'Coupling',
      back: 'The degree of interdependence between modules (we want LOW coupling)'
    },
    {
      front: 'Cohesion',
      back: 'How closely related and focused the responsibilities of a module are (we want HIGH cohesion)'
    }
  ];

  concepts = [
    {
      title: 'Separation of Concerns',
      definition: 'Each module should have a single, well-defined responsibility.',
      example: 'A user authentication module should only handle login/logout, not database operations or UI rendering.'
    },
    {
      title: 'Information Hiding',
      definition: 'Internal implementation details should be hidden; only necessary interfaces exposed.',
      example: 'A class exposes getter methods but hides the internal data structure implementation.'
    },
    {
      title: 'DRY (Don\'t Repeat Yourself)',
      definition: 'Avoid code duplication by extracting common logic into reusable components.',
      example: 'Instead of writing validation logic in multiple places, create a shared validation module.'
    },
    {
      title: 'SOLID Principles',
      definition: 'Five principles for maintainable and scalable object-oriented design.',
      example: 'Single Responsibility: Each class should have one reason to change.'
    }
  ];

  ngOnInit() {}

  toggleFlip(index: number) {
    this.flipped[index] = !this.flipped[index];
  }

  answerQuestion(questionIndex: number, answerIndex: number) {
    if (!this.answered[questionIndex]) {
      this.answered[questionIndex] = answerIndex;
    }
  }

  getOptionClass(questionIndex: number, optionIndex: number): string {
    if (!this.answered[questionIndex]) {
      return 'border-gray-300 hover:border-blue-600 bg-white';
    }
    
    const correct = this.quizQuestions[questionIndex].answer;
    if (optionIndex === correct) {
      return 'border-green-600 bg-green-100';
    }
    if (optionIndex === this.answered[questionIndex]) {
      return 'border-red-600 bg-red-100';
    }
    return 'border-gray-300 bg-gray-50';
  }
}
