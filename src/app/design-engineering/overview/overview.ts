import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-design-engineering-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="overview-content">
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4 text-gray-900">What is Design Engineering?</h2>
        <p class="text-gray-700 mb-4">
          Design Engineering is the bridge between abstract requirements and concrete solutions. It's where we transform what clients think they want into what they actually need to build.
        </p>
        <p class="text-gray-700 mb-4">
          This comprehensive course covers the Design Model, including Data Design, Architectural Design, Interface Design, Component Design, and Deployment Design.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-4 text-gray-900">Quick Reference</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-gray-400">
            <h3 class="font-bold text-blue-900 mb-3">Key Concepts</h3>
            <ul class="text-gray-700 space-y-2">
              <li><strong>Abstraction:</strong> Hiding underlying complexity</li>
              <li><strong>Modularity:</strong> Breaking systems into manageable parts</li>
              <li><strong>Coupling:</strong> Dependencies between modules (keep low)</li>
              <li><strong>Cohesion:</strong> Clarity of purpose within a module (keep high)</li>
            </ul>
          </div>
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-gray-400">
            <h3 class="font-bold text-green-900 mb-3">Design Model Elements</h3>
            <ol class="text-gray-700 space-y-2 ml-4">
              <li><strong>Data Design:</strong> Information structures</li>
              <li><strong>Architectural Design:</strong> System structure</li>
              <li><strong>Interface Design:</strong> User and system interaction</li>
              <li><strong>Component Design:</strong> Module internals</li>
              <li><strong>Deployment Design:</strong> Hardware mapping</li>
            </ol>
          </div>
        </div>
      </section>

  
    </div>
  `
})
export class DesignEngineeringOverview {}
