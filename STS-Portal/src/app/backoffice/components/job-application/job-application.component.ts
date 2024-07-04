import { Component } from '@angular/core';
import { JobApplication } from '../../interfaces/job-application';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobApplicationService } from '../../services/job-application.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent {

jobApplicationForm! : FormGroup;

constructor(
  private fb: FormBuilder,
  private jobApplicationService: JobApplicationService
) {}

ngOnInit(): void {
  this.jobApplicationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    city: ['', Validators.required],
    jobTitle: ['', Validators.required],
    jobDescription: ['', Validators.required],
  });
}

apply() {
  if (this.jobApplicationForm.invalid) {
    return;
  }

  const jobApplication: JobApplication = {
    id:0,
    firstName: this.jobApplicationForm.value.firstName,
    lastName: this.jobApplicationForm.value.lastName,
    email: this.jobApplicationForm.value.email,
    country: this.jobApplicationForm.value.country,
    city: this.jobApplicationForm.value.city,
    jobTitle: this.jobApplicationForm.value.title,
    jobDescription: this.jobApplicationForm.value.description
  };

  const jobId = 1; 

  this.jobApplicationService.applyForJob(jobId, jobApplication).subscribe(
    response => {
      console.log('Job application submitted successfully, ID:', response);
        this.jobApplicationForm.reset();
    },
    error => {
      console.error('Error submitting job application', error);
    }
  );
}
resetForm() {
  this.jobApplicationForm.reset();
 }

}
