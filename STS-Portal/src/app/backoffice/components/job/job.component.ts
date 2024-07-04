import { Component, inject } from '@angular/core';
import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  
  private joService = inject(JobService)
  
  jobs: Job[] = [];
  selectedJob: Job | undefined;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadAllJobs();
  }

  loadAllJobs(): void {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }

  loadJobById(id: number): void {
    this.jobService.getJobById(id).subscribe((job) => {
      this.selectedJob = job;
    });
  }

}
