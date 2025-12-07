import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {

  patients: any[] = [];

  newPatient: any = { name: '' };
  editPatientData: any = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
  this.api.getPatients().subscribe({
    next: (res: any) => {
      this.patients = res.data;
      console.log('Patients:', this.patients);
    },
    error: (err: HttpErrorResponse) => {
      console.error(err);
    }
  });
}


 
  addPatient() {
    this.api.createPatient(this.newPatient).subscribe(() => {
      this.newPatient = { name: '' }; 
      this.loadPatients();
    });
  }

  
  editPatient(patient: any) {
    this.editPatientData = { ...patient }; 
  }


  updatePatient() {
    this.api.updatePatient(this.editPatientData.id, this.editPatientData).subscribe(() => {
      this.editPatientData = null;
      this.loadPatients();
    });
  }

  deletePatient(id: number) {
    if (confirm("Biztos törlöd?")) {
      this.api.deletePatient(id).subscribe(() => {
        this.loadPatients();
      });
    }
  }
}
