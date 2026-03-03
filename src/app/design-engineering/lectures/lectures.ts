import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-design-engineering-lectures',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lectures-content">
      <h2 class="text-3xl font-bold mb-6 text-gray-900">Lectures</h2>
      
      <!-- Lecture Tabs -->
      <div class="flex gap-4 mb-6 border-b border-gray-300 flex-wrap">
        <button 
          *ngFor="let lecture of lectures"
          (click)="selectLecture(lecture)"
          [class.active]="selectedLecture === lecture"
          class="px-6 py-3 font-semibold border-b-2 transition"
          [ngClass]="selectedLecture === lecture ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'">
          {{ lecture.title }}
        </button>
      </div>

      <!-- Lecture Content -->
      <div *ngIf="selectedLecture" class="lecture-detail lecture-html">
        <div [innerHTML]="selectedLecture.content"></div>
      </div>
    </div>
  `,
  styles: [`
    button.active {
      font-weight: bold;
    }
    
    .lecture-detail {
      animation: fadeIn 0.3s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes float-reverse {
      0% {
        transform: translateY(0px) rotate(0deg);
      }

      50% {
        transform: translateY(-8px) rotate(-2deg);
      }

      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }

    :host ::ng-deep .lecture-html {
      /* Import Design 2 CSS variables and styles */
      --accent-color: #2563eb;
      --bg-color: #f9fafb;
      --surface-color: #ffffff;
      --border-color: #e5e7eb;
      --text-primary: #1f2937;
      --text-secondary: #6b7280;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      --radius: 0.5rem;
      --error: #dc2626;
      --success: #16a34a;
      --warning: #f59e0b;
      /* fonts and additional variables from original site */
      --font-body: 'Nunito', 'PT Serif', Georgia, serif;
      --font-heading: 'Fredoka One', 'PT Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --accent-hover: #b02a30;
    }

    :host ::ng-deep .lecture-html * {
      box-sizing: border-box;
    }

    :host ::ng-deep .lecture-html h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      margin-top: 0;
      color: #111827;
    }

    :host ::ng-deep .lecture-html h2 {
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: bold;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      color: #111827;
    }

    :host ::ng-deep .lecture-html h3 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: #1f2937;
    }

    :host ::ng-deep .lecture-html h4 {
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-weight: 600;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      color: #1f2937;
    }

    :host ::ng-deep .lecture-html p {
      margin-bottom: 1rem;
      color: #374151;
      line-height: 1.625;
    }

    :host ::ng-deep .lecture-html ul, 
    :host ::ng-deep .lecture-html ol {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      color: #374151;
    }

    :host ::ng-deep .lecture-html li {
      margin-bottom: 0.5rem;
    }

    :host ::ng-deep .lecture-html .glass-panel {
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    :host ::ng-deep .lecture-html .topic-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    :host ::ng-deep .lecture-html .progress-check {
      cursor: pointer;
      width: 1.25rem;
      height: 1.25rem;
    }

    :host ::ng-deep .lecture-html .joke-box {
      background: #fff8dc;
      border: 4px dashed var(--warning);
      padding: 1.5rem 2rem 1.5rem 2rem;
      border-radius: var(--radius);
      margin: 2rem 0;
      position: relative;
      font-family: var(--font-body);
      font-weight: 700;
      color: #555;
      box-shadow: var(--shadow-sm);
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    :host ::ng-deep .lecture-html .joke-box:hover {
      transform: scale(1.02) rotate(1deg);
    }

    :host ::ng-deep .lecture-html .joke-box::before {
 
    }

    :host ::ng-deep .lecture-html .joke-box::after {
  
    }

    /* dark mode tweaks */
    :host ::ng-deep [data-theme='dark'] .lecture-html .joke-box {
      background: #2d2613;
      color: #ddd;
    }

    :host ::ng-deep [data-theme='dark'] .lecture-html .joke-box::after {
      border-color: #2d2613;
    }

    :host ::ng-deep .lecture-html .exam-angle {
      background-color: #fef3c7;
      border-left: 4px solid #d97706;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 0.375rem;
      color: #374151;
    }

    :host ::ng-deep .lecture-html .mistakes {
      background-color: #fee2e2;
      border-left: 4px solid #dc2626;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 0.375rem;
      color: #374151;
    }

    :host ::ng-deep .lecture-html .code-block {
      background-color: #111827;
      color: #ffffff;
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1rem 0;
      overflow-x: auto;
    }

    :host ::ng-deep .lecture-html .code-block pre {
      margin: 0;
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 0.875rem;
    }

    :host ::ng-deep .lecture-html .code-block code {
      color: #ffffff;
    }

    :host ::ng-deep .lecture-html .card {
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 1.5rem;
    }

    :host ::ng-deep .lecture-html .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    :host ::ng-deep .lecture-html a {
      color: #2563eb;
    }

    :host ::ng-deep .lecture-html a:hover {
      text-decoration: underline;
    }

    :host ::ng-deep .lecture-html img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin: 1rem 0;
    }

    :host ::ng-deep .lecture-html svg {
      width: 100%;
      height: auto;
    }

    :host ::ng-deep .lecture-html .arch-card-container {
      perspective: 1000px;
    }

    :host ::ng-deep .lecture-html .arch-card-inner {
      position: relative;
      width: 100%;
      height: 200px;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    :host ::ng-deep .lecture-html .arch-card-container:hover .arch-card-inner {
      transform: rotateY(180deg);
    }

    :host ::ng-deep .lecture-html .arch-card-front, 
    :host ::ng-deep .lecture-html .arch-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border: 1px solid var(--border-color);
    }

    :host ::ng-deep .lecture-html .arch-card-front {
      background-color: var(--surface-color);
      color: var(--text-primary);
    }

    :host ::ng-deep .lecture-html .arch-card-back {
      background-color: var(--accent-color);
      color: white;
      transform: rotateY(180deg);
    }

    :host ::ng-deep .lecture-html .mascot-container {
      display: flex;
      justify-content: center;
      margin: 2rem 0;
    }

    :host ::ng-deep .lecture-html .mascot-svg {
      max-width: 150px;
      height: auto;
    }

    :host ::ng-deep .lecture-html .caption {
      text-align: center;
      font-size: 0.875rem;
      color: #6b7280;
      font-style: italic;
      margin-top: 0.75rem;
    }

    :host ::ng-deep .lecture-html .svg-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    :host ::ng-deep .lecture-html .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `]
})
export class DesignEngineeringLectures implements OnInit {
  lectures: any[] = [];
  selectedLecture: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.lectures = [
      {
        id: 1,
        title: 'Lecture 10: Foundations of Design Engineering',
        content: this.sanitizer.bypassSecurityTrustHtml(this.getLecture10Content())
      },
      {
        id: 2,
        title: 'Lecture 11: Data & Architectural Design',
        content: this.sanitizer.bypassSecurityTrustHtml(this.getLecture11Content())
      },
      {
        id: 3,
        title: 'Lecture 12: Interfaces, Components, and Quality',
        content: this.sanitizer.bypassSecurityTrustHtml(this.getLecture12Content())
      }
    ];
    
    this.selectedLecture = this.lectures[0];

    setTimeout(() => {
    if (typeof (window as any).Prism !== 'undefined') {
      (window as any).Prism.highlightAll();
    }
  }, 100);

  }

  selectLecture(lecture: any) {
    this.selectedLecture = lecture;
    // Load Prism for syntax highlighting
    setTimeout(() => {
      if (typeof (window as any).Prism !== 'undefined') {
        (window as any).Prism.highlightAll();
      }
    }, 100);
  }

  private getLecture10Content(): string {
    return `<h1>Lecture 10: Foundations of Design Engineering</h1>

            <section id="intro" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>1. Introduction to Design Engineering</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <h3>What it means</h3>
                <p>Software design is the technical kernel of software engineering. It encompasses the set of
                    principles, concepts, and practices that lead to the development of a high-quality system or
                    product. It is the phase where the "what" (requirements) is transformed into the "how"
                    (implementation).</p>

                <h3>Why it matters</h3>
                <p>Without design, you are building an unstable system that will fail under minor changes. It is the
                    only way that we can accurately translate a customer's requirements into a finished software product
                    or system. Design impacts quality, project cost, and risk dramatically.</p>

                <div class="joke-box">
                    Requirements are the destination; code is the vehicle; Design is the bridge that gets you there.
                    Without the bridge, the vehicle falls into the chasm... and we all know what happens when you drive
                    your code into a chasm (Hint: Stack Overflow!).
                </div>

                <h3>How it appears in practice</h3>
                <p>In practice, design engineering manifests as a "modeling activity". Before typing lines of code,
                    teams draw architectural diagrams (like UML), mock interfaces, define database schemas, and
                    establish component contracts.</p>

                <div class="exam-angle">
                    <strong>Exam Angle: Requirements vs Design</strong><br>
                    <p>You may be asked to distinguish between analysis/requirements modeling and design modeling. To
                        earn full marks: state that Requirements focus on the problem domain (WHAT the system must do),
                        whereas Design focuses on the solution domain (HOW the system will be built). Use the phrase
                        "technical kernel."</p>
                    <div class="sr-only">Requirements answer 'what' the system should do. Design answers 'how' the
                        system will accomplish it, serving as the technical kernel of software engineering.</div>
                </div>

                <div class="mistakes">
                    <strong>Common Mistake</strong><br>
                    Students often confuse "design" with just "UI design". While drawing pretty buttons is fun, if the
                    internal architecture is held together with digital duct tape and hope, the app will still crash.
                </div>

                <div style="text-align: center; margin: 3rem 0;">
                    <a href="https://xkcd.com/1425/" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgs.xkcd.com/comics/tasks.png"
                            alt="XKCD: Tasks - When a user takes a photo, the app should check whether they're in a national park (easy, GIS lookup) and whether the photo is of a bird (hard, requires CS research)"
                            style="display: block; margin: 0 auto; max-width: 100%; height: auto; border: 1px solid var(--border-color); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                    </a>
                    <p class="caption">
                        XKCD 1425: This perfectly illustrates why understanding the <em>how</em> (Design) is so critical
                        when presented with the <em>what</em> (Requirements).</p>
                </div>
            </section>

            <section id="concepts" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>2. Design Concepts</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>
                <p>A set of fundamental concepts has evolved over the history of software engineering. These form the
                    bedrock of good design.</p>

                <h3>Abstraction & Refinement</h3>
                <p><strong>Abstraction</strong> allows designers to focus on solving a problem without worrying about
                    low-level details. At the highest level of abstraction, a solution is stated in broad terms using
                    the language of the problem environment. At lower levels, a more detailed description of the
                    solution is provided. For example, "driving a car" is a high-level abstraction, while "depressing
                    the clutch and moving the gear shift" is a lower-level abstraction.</p>
                <div class="joke-box">
                    <strong>Analogy Time!</strong><br> Abstraction is like ordering a pizza. You just say "I want a
                    Pepperoni Pizza!" You don't need to instruct the chef on how to knead the dough or preheat the oven.
                </div>
                <p><strong>Refinement</strong> is the complementary top-down strategy—starting
                    abstract and slowly elaborating on the details. Refinement causes the designer to elaborate on the
                    original statement, providing more and more detail as each refinement occurs. Abstraction and
                    refinement help the designer deal with complexity.</p>

                <h3>Modularity & Separation of Concerns</h3>
                <p>Software is divided into separately named and addressable components (modules) that are integrated to
                    satisfy problem requirements. <strong>Separation of
                        Concerns</strong> suggests that any complex problem can be more easily handled if it is
                    subdivided into
                    distinct pieces that can each be solved independently. This reduces the overall cognitive load and
                    enables parallel development.</p>
                <div class="joke-box">
                    <strong>Modularity Rule of Thumb</strong><br> Don't put all your code in one file. If scrolling
                    through your main class takes longer than reading a Harry Potter book, you desperately need modules!
                </div>

                <div class="code-block" data-title="Bad (Monolithic)">
                    <pre><code class="language-java">// Monolithic function doing everything
    public void processUserOrder(int userId, int itemId) {
   
    Database db = Database.connect();
    User user = db.query("SELECT * FROM users WHERE id=" + userId);
    Item item = db.query("SELECT * FROM items WHERE id=" + itemId);
    
    if (user.getBalance() >= item.getPrice()) {
        user.setBalance(user.getBalance() - item.getPrice());
        EmailService.send(user.getEmail(), "Order placed!");
    }
}</code></pre>
                </div>

                <div class="code-block" data-title="Good (Modularized)">
                    <pre><code class="language-java">// Handled in separate, independent modules
public void processUserOrder(int userId, int itemId) {
    User user = userService.getUser(userId);
    Item item = inventoryService.getItem(itemId);
    
    if (paymentService.charge(user, item.getPrice())) {
        emailService.sendReceipt(user.getEmail());
    }
}</code></pre>
                </div>

                <!-- Modularity SVG Diagram -->
                <div
                    style="text-align: center; margin: 2rem 0; padding: 2rem; background: var(--surface-color); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); border-radius: var(--radius);">
                    <div class="svg-container">
                        <svg width="100%" height="auto" viewBox="0 0 500 200" style="max-width: 500px;"
                            xmlns="http://www.w3.org/2000/svg">
                            <!-- Monolith (Bad) -->
                            <rect x="50" y="50" width="100" height="100" fill="var(--error)"
                                stroke="var(--border-color)" stroke-width="4" rx="10" />
                            <text x="100" y="105" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="white" font-size="16">Monolith</text>

                            <!-- Arrow -->
                            <line x1="170" y1="100" x2="250" y2="100" stroke="var(--text-primary)" stroke-width="4"
                                stroke-dasharray="8" />
                            <path d="M240,90 L255,100 L240,110 Z" fill="var(--text-primary)" />

                            <!-- Modular (Good) -->
                            <rect x="280" y="40" width="60" height="50" fill="var(--success)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="310" y="70" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--border-color)" font-size="12">Mod A</text>

                            <rect x="360" y="40" width="60" height="50" fill="var(--success)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="390" y="70" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--border-color)" font-size="12">Mod B</text>

                            <rect x="280" y="110" width="60" height="50" fill="var(--success)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="310" y="140" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--border-color)" font-size="12">Mod C</text>

                            <rect x="360" y="110" width="60" height="50" fill="var(--success)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="390" y="140" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--border-color)" font-size="12">Mod D</text>
                        </svg>
                    </div>
                    <p class="caption">
                        Breaking a monolith into smaller, manageable modules reduces complexity and makes maintenance
                        easier.</p>
                </div>

                <h3>Information Hiding</h3>
                <p>The principle of information hiding suggests that modules should be characterized by design decisions
                    that hide from all others. Modules should be specified and designed so that their internal data and
                    algorithms are inaccessible to other
                    modules that have no need for such information. This protects the system from ripple effects during
                    changes because local changes remain isolated.</p>

                <h3>Functional Independence, Cohesion & Coupling</h3>
                <p>This is arguably the most critical concept. Functional independence is achieved by developing modules
                    with "single-minded" function and an aversion to excessive interaction with other
                    modules. We measure this through two qualitative criteria: cohesion and coupling.
                    <strong>Cohesion</strong> is an indication of the relative functional strength of a module. A
                    cohesive module performs a single task, requiring little interaction with other components in other
                    parts of a program. <strong>Coupling</strong> is an indication of the relative interdependence among
                    modules. Coupling depends on the interface complexity between modules, the point at which entry or
                    reference is made to a module, and what data pass across the interface.
                </p>
                <div class="joke-box">
                    <strong>Relationship Advice</strong><br> High Cohesion means loving what you do and being
                    complete on your own. Low Coupling means not being overly clingy to your partner modules!
                </div>

                <div class="code-block" data-title="Low Cohesion & High Coupling (Bad)">
                    <pre><code class="language-java">class EmployeeSystem {
    // This class does everything (Low Cohesion) and requires global state (High Coupling)
    private DatabaseConnection globalDbConnection;

    public EmployeeSystem() {
        this.globalDbConnection = DB.connect();
    }
    
    public void calculateTaxesAndPrintPaystub(int id) {
        double salary = this.globalDbConnection.getSalary(id);
        double tax = salary * 0.2;
        System.out.println("Paystub: " + (salary - tax));
    }
}</code></pre>
                </div>

                <div class="code-block" data-title="High Cohesion & Low Coupling (Good)">
                    <pre><code class="language-java">class TaxCalculator {
    // High Cohesion: only calculates taxes. 
    // Low Coupling: takes raw data instead of needing a DB connection.
    public static double calculateTax(double salary) {
        return salary * 0.2;
    }
}

class PrinterService {
    public static void printPaystub(double netPay) {
        System.out.println("Paystub: " + netPay);
    }
}</code></pre>
                </div>

                <div class="exam-angle">
                    <strong>Exam Angle: Cohesion vs Coupling</strong><br>
                    <p>Expect a question asking to define and relate these two. Rule of thumb: We want <strong>High
                            Cohesion</strong> (a module does one thing well) and <strong>Low Coupling</strong> (modules
                        are relatively independent of one another). Explain that this makes the system easier to test,
                        maintain, and extend.</p>
                    <div class="sr-only">High Cohesion means a module performs a single, well-defined task. Low Coupling
                        means modules have minimal dependencies on each other. Both are required for maintainable
                        software.</div>
                </div>

                <h3>Refactoring & Design for Quality</h3>
                <p>Refactoring is the process of changing a software system to improve its internal structure without
                    altering its external behavior. It is how design improves continuously.</p>
            </section>

            <section id="model" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>3. The Design Model</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <div class="mascot-container" aria-hidden="true">
                    <svg class="mascot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="25" width="70" height="50" rx="10" fill="var(--surface-color)"
                            stroke="var(--accent-color)" stroke-width="6" />
                        <circle cx="35" cy="50" r="6" fill="var(--text-primary)" />
                        <circle cx="65" cy="50" r="6" fill="var(--text-primary)" />
                        <line x1="45" y1="65" x2="55" y2="65" stroke="var(--text-primary)" stroke-width="4"
                            stroke-linecap="round" />
                        <path d="M 50 10 L 50 25 M 40 10 L 60 10" stroke="var(--accent-color)" stroke-width="4"
                            stroke-linecap="round" />
                    </svg>
                </div>

                <h3>What it means</h3>
                <p>The Design Model is the equivalent of an architect's blueprints for a house. It requires multiple
                    views to represent the software from different perspectives.</p>

                <!-- Animated SVG representing the translation -->
                <div
                    style="text-align: center; margin: 2rem 0; padding: 2rem; background: var(--surface-color); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); border-radius: var(--radius);">
                    <svg width="200" height="50" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"
                                orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent-color)" />
                            </marker>
                        </defs>
                        <rect x="0" y="50" width="130" height="50" rx="5" fill="var(--surface-color)"
                            stroke="var(--border-color)" stroke-width="4" />
                        <text x="65" y="80" text-anchor="middle" font-family="sans-serif" font-size="14"
                            fill="var(--text-primary)">Requirements</text>

                        <line x1="135" y1="75" x2="160" y2="75" stroke="var(--accent-color)" stroke-width="3"
                            marker-end="url(#arrow)">
                            <animate attributeName="x2" values="135;160;160" dur="2s" repeatCount="indefinite" />
                        </line>

                        <rect x="170" y="40" width="100" height="70" rx="5" fill="var(--bg-color)"
                            stroke="var(--accent-color)" stroke-width="4" />
                        <text x="220" y="80" text-anchor="middle" font-family="sans-serif" font-size="16"
                            font-weight="bold" fill="var(--accent-color)">DESIGN</text>

                        <line x1="280" y1="75" x2="320" y2="75" stroke="var(--accent-color)" stroke-width="3"
                            marker-end="url(#arrow)">
                            <animate attributeName="x2" values="280;320;320" dur="2s" repeatCount="indefinite"
                                begin="1s" />
                        </line>

                        <rect x="330" y="50" width="60" height="50" rx="5" fill="var(--surface-color)"
                            stroke="var(--border-color)" stroke-width="4" />
                        <text x="360" y="80" text-anchor="middle" font-family="sans-serif" font-size="14"
                            fill="var(--text-primary)">Code</text>
                    </svg>
                </div>

                <h3>The Five Design Elements</h3>
                <p>The translation of the requirements model to the design model results in five distinct elements:</p>
                <div class="grid-2" style="margin-top: 2rem; gap: 1.5rem;">
                    <div class="card">
                        <h4 style="margin-top: 0; color: var(--accent-color);">1. Data Design</h4>
                        <p><strong>What it is:</strong> Transforms information domain models into database schemas and
                            physical data structures.</p>
                        <p><strong>Why it matters:</strong> Without structured, normalized data, the rest of the
                            application will struggle with fetching and storing information efficiently.</p>
                        <p><strong>Artifacts:</strong> ER Diagrams, Data Dictionaries.</p>
                    </div>
                    <div class="card">
                        <h4 style="margin-top: 0; color: var(--accent-color);">2. Architectural Design</h4>
                        <p><strong>What it is:</strong> Defines the relationship between the major structural elements
                            of the software.</p>
                        <p><strong>Why it matters:</strong> It provides the big-picture scaffolding (like MVC or
                            Microservices) that dictates how data flows across the system.</p>
                        <p><strong>Artifacts:</strong> Component Diagrams, Layered Logic Models.</p>
                    </div>
                    <div class="card">
                        <h4 style="margin-top: 0; color: var(--accent-color);">3. Interface Design</h4>
                        <p><strong>What it is:</strong> Describes how the software communicates with other systems and
                            humans.</p>
                        <p><strong>Why it matters:</strong> The interface is the ultimate contract. A poorly designed UI
                            frustrates users, and an inconsistent API breaks integrations.</p>
                        <p><strong>Artifacts:</strong> Wireframes, API Specs (OpenAPI/Swagger).</p>
                    </div>
                    <div class="card">
                        <h4 style="margin-top: 0; color: var(--accent-color);">4. Component-Level Design</h4>
                        <p><strong>What it is:</strong> Transforms architectural elements into a procedural description
                            of software components.</p>
                        <p><strong>Why it matters:</strong> This is where the actual algorithms, class structures, and
                            encapsulated logic are strictly defined before coding begins.</p>
                        <p><strong>Artifacts:</strong> Class/Activity Diagrams, Pseudocode.</p>
                    </div>
                    <div class="card" style="grid-column: 1 / -1;">
                        <h4 style="margin-top: 0; color: var(--accent-color);">5. Deployment Design</h4>
                        <p><strong>What it is:</strong> Indicates how software functionality and subsystems will be
                            allocated within the physical computing environment (hardware nodes).</p>
                        <p><strong>Why it matters:</strong> Dictates the scalability and reliability of the system under
                            real-world constraints like network latency, memory limits, and power redundancy.</p>
                        <p><strong>Artifacts:</strong> UML Deployment Diagrams, Network Topology Maps.</p>
                    </div>
                </div>

                <div class="mistakes">
                    <strong>Common Mistake</strong><br>
                    Forgetting deployment! Many modern developers stop at component design, forgetting that deployment
                    topology affects architectural design directly.
                </div>

                <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                    <a href="/design-engineering" class="btn btn-secondary">&larr; Back to Home</a>
                   
                </div>
            </section>`; 
  }

  private getLecture11Content(): string {
    return `<h1>Lecture 11: Data & Architectural Design</h1>

            <section id="data" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>1. Data Design</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <h3>What it means</h3>
                <p>Data design translates data objects defined as part of the analysis model into data structures at the
                    software component level and, when necessary, a database architecture at the application level.</p>

                <h3>Why it matters</h3>
                <p>Bad data design leads to inefficient algorithms and a fragile database. Creating the right data
                    abstractions is essential before you write functions that manipulate that data.</p>

                <h3>How it appears in practice</h3>
                <p>Mapping entity-relationship diagrams (ERDs) or class diagrams created during requirements analysis to
                    relational tables, NoSQL documents, or in-memory arrays and dictionaries. Defining data integrity
                    and constraints.</p>

                <div class="joke-box">
                    <strong>Memory Loss?</strong><br>
                    Remember: "persistent data" is the stuff the database remembers after a power outage. "transient
                    data" is the stuff that vanishes faster than your motivation on a Friday afternoon! Both fall under
                    Data Design.
                </div>

                <div class="exam-angle">
                    <strong>Exam Angle: Analysis vs Design Data</strong><br>
                    <p>You may be asked how data is mapped. State that Analysis-level Data focuses on real-world
                        entities and relationships, whereas Design-level Data translates these into specific databases
                        formats, keys, indexes, and memory-efficient data structures.</p>

                        <div class="sr-only">Data design bridges abstract requirements models into concrete database schemas
                        and localized software data structures, ensuring integrity and efficiency.</div>
                </div>
            </section>

            <section id="architecture" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>2. Architectural Design</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <div class="mascot-container alt" aria-hidden="true">
                    <svg class="mascot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="50,20 80,35 50,50 20,35" fill="var(--accent-color)" />
                        <polygon points="20,35 50,50 50,80 20,65" fill="#a4282c" />
                        <polygon points="80,35 50,50 50,80 80,65" fill="#e95c62" />
                        <circle cx="35" cy="55" r="4" fill="white" />
                        <circle cx="45" cy="60" r="4" fill="white" />
                    </svg>
                </div>

                <h3>What it means</h3>
                <p>Software architecture represents the overarching structure of the software system. It encompasses the
                    components (e.g., databases, middleware, UI), the ways they interact, and the data consumed or
                    produced.</p>

                <h3>Architectural Views</h3>
                <p>Because architecture is complex, it cannot be represented by a single diagram. We use multiple views
                    to describe it to different stakeholders:</p>
                <ul>
                    <li><strong>Logical View:</strong> Represents the abstractions mapping to requirements (e.g.,
                        classes, user entities, and their relationships). This view is primarily for the developers and
                        systems analysts to ensure business requirements are met.</li>
                    <li><strong>Process View:</strong> Focuses on the dynamic aspects of the system—concurrency,
                        threads, and execution behavior. It shows how the system handles multiple users and processes
                        simultaneously, which is critical for performance engineers.</li>
                    <li><strong>Development/Code View:</strong> Shows how modules and files are physically organized
                        within the development environment (e.g., packages, libraries, namespaces). Useful for
                        programmers managing the codebase.</li>
                    <li><strong>Deployment/Physical View:</strong> Describes how the software elements are mapped to
                        physical hardware nodes (servers, devices, cloud containers). This is essential for network and
                        deployment engineers.</li>
                </ul>

                <!-- MVC SVG Diagram -->
                <div
                    style="text-align: center; margin: 2rem 0; padding: 2rem; background: var(--surface-color); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); border-radius: var(--radius);">
                    <div class="svg-container">
                        <svg width="100%" height="auto" viewBox="0 0 500 200" style="max-width: 500px;"
                            xmlns="http://www.w3.org/2000/svg">
                            <!-- Controller -->
                            <rect x="180" y="20" width="140" height="60" fill="var(--warning)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="250" y="55" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--border-color)" font-size="16">Controller</text>

                            <!-- Model -->
                            <rect x="340" y="120" width="140" height="60" fill="var(--success)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="410" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--border-color)" font-size="16">Model</text>

                            <!-- View -->
                            <rect x="20" y="120" width="140" height="60" fill="var(--accent-color)"
                                stroke="var(--border-color)" stroke-width="4" rx="8" />
                            <text x="90" y="155" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="white" font-size="16">View</text>

                            <!-- Arrows -->
                            <!-- User to Controller -->
                            <path d="M250,0 L250,15" stroke="var(--text-primary)" stroke-width="3" />
                            <text x="250" y="-5" text-anchor="middle" font-family="sans-serif" font-size="12"
                                fill="var(--text-primary)">User Action</text>

                            <!-- Controller to Model -->
                            <line x1="280" y1="80" x2="360" y2="120" stroke="var(--border-color)" stroke-width="3"
                                stroke-dasharray="5" />

                            <!-- Model to View -->
                            <line x1="340" y1="150" x2="160" y2="150" stroke="var(--border-color)" stroke-width="3"
                                stroke-dasharray="5" />
                            <text x="250" y="145" text-anchor="middle" font-family="sans-serif" font-size="12"
                                fill="var(--text-secondary)">Updates</text>

                            <!-- Controller to View -->
                            <line x1="220" y1="80" x2="140" y2="120" stroke="var(--border-color)" stroke-width="3"
                                stroke-dasharray="5" />
                        </svg>
                    </div>
                    <p class="caption">
                        The MVC Architecture: The Controller receives input, strictly separating the Model (data) from
                        the View (UI).</p>
                </div>

                <h3>Common Architectural Styles</h3>
                <p>Hover over the cards below to explore different architectural styles.</p>

                <div class="grid-2" style="margin-top: 2rem;">
                    <div class="arch-card-container">
                        <div class="arch-card-inner">
                            <div class="arch-card-front">
                                <h4>Layered (N-tier)</h4>
                                <p>UI &rarr; Business Logic &rarr; Data Access. Clear separation of concerns.</p>
                            </div>
                            <div class="arch-card-back">
                                <p>Components are organized in layers. Each layer provides services to the layer above
                                    it. Best for traditional line-of-business apps.</p>
                            </div>
                        </div>
                    </div>
                    <div class="arch-card-container">
                        <div class="arch-card-inner">
                            <div class="arch-card-front">
                                <h4>Client-Server</h4>
                                <p>Distributed components where one acts as a host and others as requestors.</p>
                            </div>
                            <div class="arch-card-back">
                                <p>Clients request info, servers provide it. High scalability, centralizes data.</p>
                            </div>
                        </div>
                    </div>
                    <div class="arch-card-container">
                        <div class="arch-card-inner">
                            <div class="arch-card-front">
                                <h4>Pipe-and-Filter</h4>
                                <p>Independent components execute data transformations sequentially.</p>
                            </div>
                            <div class="arch-card-back">
                                <p>Data sequentially passes through a series of components (filters). Best for batch
                                    processing or transformations.</p>
                            </div>
                        </div>
                    </div>
                    <div class="arch-card-container">
                        <div class="arch-card-inner">
                            <div class="arch-card-front">
                                <h4>MVC Pattern</h4>
                                <p>Strict separation of presentation code from business logic.</p>
                            </div>
                            <div class="arch-card-back">
                                <p>Separates data (Model), UI (View), and input logic (Controller). Standard for web
                                    apps.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="code-block" data-title="Layered Architecture in Code">
                    <pre><code class="language-java">// 1. Presentation Layer (UI / Controller)
class UserView {
    public void handleLogin(String username, String password) {
        // Calls the layer directly below it
        AuthLogic.login(username, password);
    }
}

// 2. Business Logic Layer
class AuthLogic {
    public static String login(String username, String password) {
        // Enforces rules, then calls the layer below it
        User user = DataAccess.getUser(username);
        if (user != null && user.getPassword().equals(hash(password))) {
            return "Success";
        }
        return "Failure";
    }
}

// 3. Data Access Layer
class DataAccess {
    public static User getUser(String username) {
        // The ONLY layer allowed to touch the database
        return db.query("SELECT * FROM users WHERE name=?", username);
    }
}</code></pre>
                </div>

                <div class="exam-angle" style="margin-top: 2rem;">
                    <strong>Exam Angle: Justifying Architecture</strong><br>
                    <p>Exams frequently ask you to choose an architecture for a given scenario. To score well, you MUST
                        mention Trade-offs. E.g., "I choose Client-Server for the banking app because it centralizes
                        security and data consistency, at the cost of requiring a continuous network connection."</p>
                    <div class="sr-only">Choosing an architecture requires balancing quality attributes. Always justify
                        the choice with explicit trade-offs like scalability vs simplicity, or performance vs
                        maintainability.</div>
                </div>

                <div style=" margin: 3rem 0;">
                    <a href="https://xkcd.com/323/" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgs.xkcd.com/comics/ballmer_peak.png"
                            alt="XKCD Ballmer Peak: Software architecture and the delicate balance of productivity"
                            style="display: block; margin: 0 auto; max-width: 100%; height: auto; border: 1px solid var(--border-color); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                    </a>
                    <p class="caption" style="text-align: center;">
                        XKCD 323: A joke about what it takes to actually understand architecture design.</p>
                </div>

                <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                    
                    
                </div>
            </section>`; 
  }

  private getLecture12Content(): string {
    return `<h1>Lecture 12: Interfaces, Components, and Quality</h1>

            <section id="interface" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>1. Interface Design</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <h3>What it means</h3>
                <p>Interface design describes how the software communicates with systems that interoperate with it, and
                    with humans who use it. An interface implies a flow of information and a specific type of behavior.
                </p>

                <h3>Why it matters</h3>
                <p>A brilliant backend is useless if the user cannot understand the UI, or if other systems cannot
                    securely connect to the API. Interfaces act as literal <em>contracts</em>.</p>

                <h3>Core Interface Principles in Practice</h3>
                <p>An interface is a contract. Applying good principles ensures that the developers or users interacting
                    with your contract aren't constantly frustrated.</p>

                <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 2rem;">
                    <div>
                        <h4>1. Consistency</h4>
                        <p>The same action should yield the same result. If one API endpoint uses <code>getUser()</code>, another
                            shouldn't use <code>fetchAccount()</code>. This reduces the cognitive load on the consumer.</p>
                        <div class="code-block" data-title="Inconsistent vs Consistent API">
                            <pre><code class="language-java">// Bad: Inconsistent verbs/nouns
api.getUser();
api.deleteClient();
api.fetchOrder();

// Good: Consistent naming conventions
api.getUser();
api.deleteUser();
api.getOrder();</code></pre>
                        </div>
                    </div>
                    <div>
                        <h4>2. Feedback</h4>
                        <p>Every action must have a clear, observable reaction. A silent failure in an API or a frozen
                            button in a GUI leaves the user guessing if their action succeeded.</p>
                        <div class="code-block" data-title="Providing Clear Feedback">
                            <pre><code class="language-java">// Good: Always return status
public ApiResponse processPayment() {
    if (success) {
        return new ApiResponse(200, "Payment processed");
    }
    return new ApiResponse(400, "Insufficient funds");
}</code></pre>
                        </div>
                    </div>
                    <div>
                        <h4>3. Error Handling</h4>
                        <p>Errors should be forgiving, informative, and prevent the system from crashing. Instead of
                            throwing a raw database exception, translate it into something the caller can understand.
                        </p>
                        <div class="code-block" data-title="Informative Errors">
                            <pre><code class="language-java">// Bad: Leaking system internals
throw new SQLException("Table 'users' not found");

// Good: Informative and safe
throw new UserException("Unable to load profile. Please try again later.");</code></pre>
                        </div>
                    </div>
                    <div>
                        <h4>4. User-Centricity</h4>
                        <p>Place the user in control and reduce memory load. Provide sensible defaults so the caller
                            doesn't have to memorize a 10-argument constructor just to create a basic object.</p>
                        <div class="code-block" data-title="Sensible Defaults (Builder)">
                            <pre><code class="language-java">// Good: Reducing memory load
Notification notif = new Notification.Builder()
    .setTo("user@example.com")
    // Subject and Priority have sensible defaults automatically!
    .build();</code></pre>
                        </div>
                    </div>
                </div>

                <div class="code-block" data-title="Interfaces as a Contract (Java)">
                    <pre><code class="language-java">// The Interface (Contract)
interface PaymentProcessor {
    boolean process(double amount);
}

// The Implementations (Must follow the Contract)
class StripeProcessor implements PaymentProcessor {
    @Override
    public boolean process(double amount) {
        // Stripe specific API logic here
        return true;
    }
}

class PayPalProcessor implements PaymentProcessor {
    @Override
    public boolean process(double amount) {
        // PayPal specific API logic here
        return true;
    }
}</code></pre>
                </div>

                <div class="joke-box">
                    <strong>It's not just buttons!</strong><br>
                    "Interface" in Software Engineering isn't just GUI. If you think it's all about making buttons
                    rounder, wait until you meet an API that requires a 300-page manual just to authenticate!
                </div>

                <div style="text-align: center; margin: 3rem 0;">
                    <a href="https://xkcd.com/1195/" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgs.xkcd.com/comics/flowchart.png"
                            alt="XKCD Flowchart: How to use any new poorly designed UI"
                            style="display: block; margin: 0 auto; max-width: 100%; height: auto; border: 1px solid var(--border-color); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                    </a>
                    <p class="caption">
                        XKCD 1195: A surprisingly accurate flowchart of how users actually figure out bad interface
                        design. Good interface design means they never have to use this chart!</p>
                </div>
            </section>

            <section id="component" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>2. Component-Level Design</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <div class="mascot-container" aria-hidden="true">
                    <svg class="mascot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="30" fill="var(--surface-color)" stroke="var(--warning)"
                            stroke-width="6" />
                        <circle cx="50" cy="50" r="12" fill="var(--bg-color)" stroke="var(--warning)"
                            stroke-width="4" />
                        <circle cx="42" cy="40" r="4" fill="var(--text-primary)" />
                        <circle cx="58" cy="40" r="4" fill="var(--text-primary)" />
                        <path d="M 42 60 Q 50 65 58 60" fill="none" stroke="var(--text-primary)" stroke-width="3"
                            stroke-linecap="round" />
                    </svg>
                </div>

                <h3>What is a Component?</h3>
                <p>A component is a modular, deployable, and replaceable unit of software. While <strong>Architecture
                        Design</strong> decides that a "Billing System" should exist, <strong>Component-Level
                        Design</strong> decides <em>exactly</em> how the Billing System is built internally.</p>

                <p>Think of a component as a black box. It exposes a strict public <strong>Interface</strong> for other
                    parts of the system to use, but severely hides its internal <strong>Implementation</strong> (the
                    algorithms, data structures, and helper classes it uses to do its job).</p>

                <h3>Component Design in Practice</h3>
                <p>Designing a good component relies heavily on two metrics:</p>
                <ul>
                    <li><strong>High Cohesion:</strong> The component should do exactly <em>one</em> thing very well. A
                        <code>BillingComponent</code> should not also handle sending promotional marketing emails.</li>
                    <li><strong>Low Coupling:</strong> The component should not rely on the internal details of other
                        components. It should only interact through defined interfaces.</li>
                </ul>

                <div class="code-block" data-title="Anatomy of a Well-Designed Component (Java)">
                    <pre><code class="language-java">// --- THE INTERFACE (Public Contract) ---
// This is the ONLY part exposed to the rest of the application.
public interface BillingComponent {
    Receipt chargeCustomer(String customerId, double amount);
}

// --- THE IMPLEMENTATION (Hidden Internals) ---
// These classes are package-private. The rest of the app doesn't know they exist!
class StripeBillingImpl implements BillingComponent {
    private TaxCalculator taxCalc = new TaxCalculator(); // Internal helper

    @Override
    public Receipt chargeCustomer(String customerId, double amount) {
        double total = amount + taxCalc.calculate(amount);
        // Execute complicated internal logic...
        return new Receipt(total, "Paid");
    }
}

// Internal helper class, completely hidden from the outside world.
class TaxCalculator {
    double calculate(double baseAmount) { return baseAmount * 0.08; }
}</code></pre>
                </div>
                <p class="caption"><em>Notice how the implementation details (like the <code>TaxCalculator</code> and the decision
                        to use Stripe) are completely hidden behind the <code>BillingComponent</code> interface. This allows us to
                        replace <code>StripeBillingImpl</code> with <code>PayPalBillingImpl</code> later without breaking the rest of the
                        app!</em></p>

                <div class="exam-angle">
                    <strong>Exam Angle: OO vs Traditional Component Design</strong><br>
                    <p>If asked to compare: OO components focus on collaborating classes containing encapsulated state
                        and behavior. Traditional logic focuses on processing functions and data structures passing
                        sequentially.</p>
                        <div class="sr-only">OO design focuses on encapsulated objects messaging each other, whereas
                        traditional design focuses on sequential functions passing data structures.</div>
                </div>
            </section>

            <section id="deployment" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>3. Deployment Design</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <h3>What it means</h3>
                <p>Deployment design is the absolute final blueprint for where your code runs in the real world. You
                    have designed the logic, but now you must map those software subsystems (components) to physical or
                    virtual hardware (nodes).</p>

                <h3>Why it matters: The Real-World Constraints</h3>
                <p>In architectural design, it's easy to assume infinite memory and instantaneous communication.
                    Deployment design forces you to face reality:</p>
                <ul>
                    <li><strong>Bandwidth &amp; Latency:</strong> If your Web Server component talks to your Database
                        component inside a <code>for</code> loop, and they are deployed on servers thousands of miles apart, the
                        network latency will cripple your application.</li>
                    <li><strong>Scalability vs Hardware:</strong> If your software is built as one giant monolith, it
                        requires an equally giant, expensive server to run. By designing smaller components (like
                        microservices), you can map them across dozens of smaller, cheaper deployment nodes.</li>
                    <li><strong>Reliability:</strong> If your Login Service is deployed to exactly one physical server
                        node, a simple power outage takes down your application. Good deployment design maps multiple
                        identical components across redundant nodes.</li>
                </ul>

                <div
                    style="text-align: center; margin: 2rem 0; padding: 2rem; background: var(--surface-color); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); border-radius: var(--radius);">
                    <div class="svg-container">
                        <svg width="100%" height="auto" viewBox="0 0 600 200" style="max-width: 600px;"
                            xmlns="http://www.w3.org/2000/svg">
                            <!-- Node 1: App Server -->
                            <rect x="10" y="50" width="220" height="120" fill="var(--bg-color)"
                                stroke="var(--accent-color)" stroke-width="4" rx="4" />
                            <text x="120" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--text-primary)">App Server Node</text>
                            <rect x="30" y="110" width="180" height="40" fill="var(--surface-color)" rx="2"
                                stroke="var(--border-color)" stroke-width="2" />
                            <text x="120" y="135" text-anchor="middle" font-size="12" font-family="sans-serif"
                                fill="var(--text-secondary)">&lt;&lt;component&gt;&gt; WebApp</text>

                            <!-- Connection -->
                            <line x1="235" y1="110" x2="350" y2="110" stroke="var(--text-primary)" stroke-width="2"
                                stroke-dasharray="4" />
                            <text x="290" y="100" text-anchor="middle" font-size="12" font-family="sans-serif"
                                fill="var(--text-primary)">TCP/IP</text>

                            <!-- Node 2: DB Server -->
                            <rect x="360" y="50" width="220" height="120" fill="var(--bg-color)"
                                stroke="var(--accent-color)" stroke-width="4" rx="4" />
                            <text x="470" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold"
                                fill="var(--text-primary)">DB Server Node</text>
                            <rect x="380" y="110" width="180" height="40" fill="var(--surface-color)" rx="2"
                                stroke="var(--border-color)" stroke-width="2" />
                            <text x="470" y="135" text-anchor="middle" font-size="12" font-family="sans-serif"
                                fill="var(--text-secondary)">&lt;&lt;component&gt;&gt; MySQL</text>
                        </svg>
                    </div>
                </div>
            </section>

            <section id="patterns" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>4. Pattern-Based Design</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <p>Design patterns are proven, documented solutions to recurring design problems. Just as civil
                    engineers use established patterns to build bridges (suspension vs. truss), software engineers use
                    patterns to build software components.</p>
                <p>You don't need to invent a new way to notify users of a state change—the <strong>Observer
                        Pattern</strong> already solves this beautifully. You don't need to invent a new way to restrict
                    a database connection to a single instance—the <strong>Singleton Pattern</strong> handles it.</p>

                <h3>The Three Levels of Patterns</h3>
                <ul>
                    <li><strong>Architectural Patterns (High-Level):</strong> Structures the entire application.
                        <em>Example: Model-View-Controller (MVC).</em>
                    </li>
                    <li><strong>Design Patterns (Mid-Level):</strong> Defines how specific components collaborate.
                        <em>Example: The Observer pattern for event handling, or the Strategy pattern for swappable
                            algorithms.</em>
                    </li>
                    <li><strong>Idioms (Low-Level):</strong> Language-specific tricks and best practices. <em>Example:
                            Using Python's list comprehensions instead of manual loops.</em></li>
                </ul>

                <div class="joke-box" style="margin-top: 2rem; border-color: var(--accent-color);">
                    <h4 style="color: var(--accent-color); margin-top: 0;">Highly Recommended Resource</h4>
                    <p>To truly master Design Patterns (and impress your tech lead), you must visit <a
                            href="https://refactoring.guru/design-patterns" target="_blank" rel="noopener noreferrer"
                            style="color: var(--accent-color); font-weight: bold; text-decoration: underline;">Refactoring.Guru</a>.
                        It is widely considered the best modern, visual guide to software design patterns—because
                        learning from massive dry textbooks is so 1999!
                    </p>
                </div>
            </section>

            <section id="quality" class="glass-panel reveal">
                <div class="topic-header">
                    <h2>5. Design Quality & Evaluation</h2>
                    <input type="checkbox" class="progress-check" aria-label="Mark complete">
                </div>

                <h3>Evaluating the Design</h3>
                <p>We evaluate designs through formal technical reviews. A design review is not about finding fault with
                    the designer; it's about finding flaws in the logic, missing requirements, or overly complex
                    implementations before they are committed to code. The attributes of a good design include:</p>
                <ul>
                    <li><strong>Correctness:</strong> Does it fulfill the requirements? A design might be elegant, but
                        if it doesn't solve the user's problem, it is incorrect.</li>
                    <li><strong>Completeness:</strong> Are all elements modeled? Every feature requested in the
                        requirements document must have a corresponding component or module in the design.</li>
                    <li><strong>Consistency:</strong> Do the views agree with each other? For example, if the Logical
                        View shows a <code>User</code> class with a <code>DateOfBirth</code> attribute, the Data Design must have a
                        corresponding database schema to store that <code>DateOfBirth</code>.</li>
                    <li><strong>Traceability:</strong> Can every design choice be traced back to a specific requirement?
                        If a component exists in the design but maps to no requirement, it is either "gold-plating"
                        (unnecessary extra work) or a sign of a poorly written requirement document.</li>
                </ul>

                <!-- Design Quality SVG Diagram -->
                <div
                    style="text-align: center; margin: 2rem 0; padding: 2rem; background: var(--surface-color); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); border-radius: var(--radius);">
                    <div class="svg-container">
                        <svg width="100%" height="auto" viewBox="0 0 700 320" style="max-width: 700px;"
                            xmlns="http://www.w3.org/2000/svg">
                            <!-- Background definitions -->
                            <defs>
                                <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6"
                                    markerHeight="6" orient="auto">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--success)" />
                                </marker>
                                <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6"
                                    markerHeight="6" orient="auto">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--error)" />
                                </marker>
                            </defs>

                            <!-- Headers -->
                            <text x="150" y="30" text-anchor="middle" font-family="var(--font-heading)"
                                font-weight="bold" fill="var(--text-primary)" font-size="18">Requirements
                                Specification</text>
                            <text x="550" y="30" text-anchor="middle" font-family="var(--font-heading)"
                                font-weight="bold" fill="var(--text-primary)" font-size="18">Design Model</text>

                            <!-- Valid Trace 1 -->
                            <rect x="50" y="60" width="200" height="40" fill="var(--bg-color)"
                                stroke="var(--border-color)" stroke-width="2" rx="4" />
                            <text x="150" y="85" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--text-primary)" font-size="14">Req 1: User Login</text>

                            <rect x="450" y="60" width="200" height="40" fill="var(--bg-color)"
                                stroke="var(--border-color)" stroke-width="2" rx="4" />
                            <text x="550" y="85" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--text-primary)" font-size="14">Component: AuthLogic</text>

                            <line x1="260" y1="80" x2="435" y2="80" stroke="var(--success)" stroke-width="3"
                                marker-end="url(#arrow-green)" stroke-dasharray="4" />
                            <text x="350" y="70" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--success)" font-size="12" font-weight="bold">Valid Trace</text>

                            <!-- Valid Trace 2 -->
                            <rect x="50" y="120" width="200" height="40" fill="var(--bg-color)"
                                stroke="var(--border-color)" stroke-width="2" rx="4" />
                            <text x="150" y="145" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--text-primary)" font-size="14">Req 2: Process Payments</text>

                            <rect x="450" y="120" width="200" height="40" fill="var(--bg-color)"
                                stroke="var(--border-color)" stroke-width="2" rx="4" />
                            <text x="550" y="145" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--text-primary)" font-size="14">Component: PaymentService</text>

                            <line x1="260" y1="140" x2="435" y2="140" stroke="var(--success)" stroke-width="3"
                                marker-end="url(#arrow-green)" stroke-dasharray="4" />

                            <!-- Orphaned Component (Untraceable) -->
                            <text x="150" y="205" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--text-secondary)" font-size="14" font-style="italic">(No Requirement
                                Exists)</text>

                            <rect x="450" y="180" width="200" height="40" fill="rgba(220, 53, 69, 0.1)"
                                stroke="var(--error)" stroke-width="2" rx="4" />
                            <text x="550" y="205" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--error)" font-size="14" font-weight="bold">Component: CryptoMiner</text>

                            <line x1="260" y1="200" x2="435" y2="200" stroke="var(--error)" stroke-width="3"
                                marker-end="url(#arrow-red)" />
                            <text x="350" y="190" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--error)" font-size="12" font-weight="bold">Untraceable (Delete!)</text>

                            <!-- Missing Design (Unfulfilled Req) -->
                            <rect x="50" y="240" width="200" height="40" fill="rgba(245, 158, 11, 0.1)"
                                stroke="var(--warning)" stroke-width="2" rx="4" />
                            <text x="150" y="265" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--warning)" font-size="14" font-weight="bold">Req 3: Email Receipts</text>

                            <text x="550" y="265" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--text-secondary)" font-size="14" font-style="italic">(Missing
                                Component)</text>

                            <line x1="260" y1="260" x2="435" y2="260" stroke="var(--warning)" stroke-width="3"
                                stroke-dasharray="4" />
                            <text x="350" y="250" text-anchor="middle" font-family="var(--font-body)"
                                fill="var(--warning)" font-size="12" font-weight="bold">Unfulfilled Req</text>
                        </svg>
                    </div>
                    <p class="caption">
                        Traceability means every design component must link back a specific requirement. If it doesn't,
                        it shouldn't exist!</p>
                </div>

                <div class="mistakes">
                    <strong>Common Mistake</strong><br>
                    Skipping traceable design reviews. If you jump straight to code without verifying the design,
                    congratulations! You just successfully built the completely wrong system, but hey, at least the code
                    compiles!
                </div>

                <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                   
                </div>
            </section>`; 
  }
}
