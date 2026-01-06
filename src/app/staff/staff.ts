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
      name: 'Mr. Vedaj J Padman',
      role: 'Course Coordinator',
      email: 'abc.xyz@univ.edu',
      photoUrl: '/staff/staff.jpg',
      sectionCodes: ['CSE D']
    },
    // add more coordinators if needed
  ];

  // 🔹 Faculty (responsible for specific sections/classrooms)
  faculty: StaffMember[] = [
    {
      name: 'Ms. P. Malathi',
      role: 'Faculty',
      email: 'p_malathy@cb.amrita.edu',
      photoUrl: '/staff/malathi_p.jpg',
      sectionCodes: ['CSE A']
    },
    {
      name: 'Ms. G. Krishna Priya',
      role: 'Faculty',
      email: 'g_krishnapriya@cb.amrita.edu',
      photoUrl: '/staff/krishnapriya_g.jpg',
      sectionCodes: ['CSE B', 'CSE F']
    },
    {
      name: 'Ms.Anisha Radhakrishnan',
      role: 'Faculty',
      email: 'r_anisha@cb.amrita.edu',
      photoUrl: '/staff/anisha.jpg',
      sectionCodes: ['CSE C', 'CSE H']
    },
    {
      name: 'Dr. Suchithra M',
      role: 'Faculty',
      email: 'm_suchithra@cb.amrita.edu',
      photoUrl: '/staff/suchitra_m.jpg',
      sectionCodes: ['CSE E']
    },

    {
      name: 'Dr. Senthil Kumar.T',
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
      name: 'Mr Sanyam Bhardwaj',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22044@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    {
      name: 'Mr E Aadithyaa',
      role: 'Teaching Assistant',
      email: 'cb.en.u4cse22114@cb.students.amrita.edu',
      photoUrl: '/staff/staff.jpg'
    },
    // add more TAs
  ];

  // 🔹 8 Sections this course is taken for
  sections: SectionInfo[] = [
    { code: 'CSE A', classroom: 'AB3-A204', faculty: 'Ms. P. Malathi', slot: 'asmk' },
    { code: 'CSE B', classroom: 'AB3-A205', faculty: 'Ms. G. Krishna Priya', slot: 'A1/L1' },
    { code: 'CSE C', classroom: 'AB3-C203', faculty: 'Ms.Anisha Radhakrishnan', slot: 'B1/L2' },
    { code: 'CSE D', classroom: 'AB3-C204', faculty: 'Mr. Vedaj J Padman', slot: 'B1/L2' },
    { code: 'CSE E', classroom: 'AB3-C205', faculty: 'Dr. Suchithra M', slot: 'C1/L3' },
    { code: 'CSE F', classroom: 'AB3-A204,C204', faculty: 'Ms. G. Krishna Priya', slot: 'C1/L3' },
    { code: 'CSE G', classroom: 'AB3-C302', faculty: 'Dr. Senthil Kumar.T', slot: 'D1/L4' },
    { code: 'CSE H', classroom: 'AB3-F401', faculty: 'Ms.Anisha Radhakrishnan', slot: 'D1/L4' },
  ];
}
