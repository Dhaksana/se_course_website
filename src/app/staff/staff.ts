import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
interface StaffMember {
  name: string;
  role: string;
  photoUrl: string;
  email?: string;
  sectionCodes?: string[];   // for faculty / coordinators
}

interface SectionInfo {
  code: string;       // e.g. "CSE A"
  classroom: string;  // e.g. "AB-101"
  faculty: string;    // faculty name
  slot?: string;      // optional: timetable slot
}

@Component({
  selector: 'app-staff',
  imports: [CommonModule],
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff {

    // 🔹 Course Coordinators
  coordinators: StaffMember[] = [
    {
      name: 'Prof. Vedaj J Padman',
      role: 'Course Coordinator',
      email: 'jp_vedaj@cb.amrita.edu',
      photoUrl: '/staff/vedaj_jp.jpeg',
      sectionCodes: ['CSE D']
    },
    {
      name: 'Prof. G. Krishna Priya',
      role: 'Co Mentor',
      email: 'g_krishnapriya@cb.amrita.edu',
      photoUrl: '/staff/krishnapriya_g.jpg',
      sectionCodes: ['CSE B', 'CSE F']
    },
  ];

  // 🔹 Faculty (responsible for specific sections/classrooms)
  faculty: StaffMember[] = [
    {
      name: 'Prof. P. Malathi',
      role: 'Faculty',
      email: 'p_malathy@cb.amrita.edu',
      photoUrl: '/staff/malathi_p.jpg',
      sectionCodes: ['CSE A']
    },
    {
      name: 'Prof. Anisha Radhakrishnan',
      role: 'Faculty',
      email: 'r_anisha@cb.amrita.edu',
      photoUrl: '/staff/anisha_r.jpg',
      sectionCodes: ['CSE C', 'CSE H']
    },
    {
      name: 'Prof. Suchithra M',
      role: 'Faculty',
      email: 'm_suchithra@cb.amrita.edu',
      photoUrl: '/staff/suchitra_m.jpg',
      sectionCodes: ['CSE E']
    },

    {
      name: 'Prof. Senthil Kumar.T',
      role: 'Faculty',
      email: 't_senthilkumar@cb.amrita.edu',
      photoUrl: '/staff/senthilkumar_t.jpg',
      sectionCodes: ['CSE G']
    },

    // add more as needed
  ];

  // 🔹 TAs (no classrooms assigned)
  teachingAssistants: StaffMember[] = [
    
    {
      name: 'E Aadithyaa',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22114@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    {
      name: 'Shaun Joseph Sunny',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22443@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    {
      name: 'Sanyam Bhardwaj',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22044@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    {
      name: 'Sudharsan Vanamali',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22049@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    {
      name: 'R Dhaksana',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22037@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    
    {
      name: 'Revanth Singothu',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22149@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    // add more TAs
  ];

  // 🔹 8 Sections this course is taken for
  sections: SectionInfo[] = [
    { code: 'CSE A', classroom: 'AB3-A204', faculty: 'Prof. P. Malathi' },
    { code: 'CSE B', classroom: 'AB3-A205', faculty: 'Prof. G. Krishna Priya'},
    { code: 'CSE C', classroom: 'AB3-C203', faculty: 'Prof. Anisha Radhakrishnan'},
    { code: 'CSE D', classroom: 'AB3-C204', faculty: 'Prof. Vedaj J Padman'},
    { code: 'CSE E', classroom: 'AB3-C205', faculty: 'Prof. Suchithra M' },
    { code: 'CSE F', classroom: 'AB3-A204,C204', faculty: 'Prof. G. Krishna Priya' },
    { code: 'CSE G', classroom: 'AB3-C302', faculty: 'Prof. Senthil Kumar.T'},
    { code: 'CSE H', classroom: 'AB3-F401', faculty: 'Prof. Anisha Radhakrishnan' },
  ];
}
