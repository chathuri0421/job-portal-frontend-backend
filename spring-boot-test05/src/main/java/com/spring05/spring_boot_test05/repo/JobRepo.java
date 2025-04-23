package com.spring05.spring_boot_test05.repo;

import com.spring05.spring_boot_test05.model.JobPost;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobRepo {
    private List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost(1, "Software Engineer", "Develop and maintain software applications", "Colombo"),
            new JobPost(2, "Data Analyst", "Analyze data and create reports", "Kandy"),
            new JobPost(3, "System Administrator", "Manage IT infrastructure and servers", "Galle"),
            new JobPost(4, "UX Designer", "Design user interfaces and experiences", "Negombo"),
            new JobPost(5, "Project Manager", "Lead software development projects", "Jaffna"),
            new JobPost(6, "DevOps Engineer", "Manage cloud infrastructure", "Matara")
    ));

    public List<JobPost> getAllJobs() {
        return jobs;
    }

    public void addJob(JobPost jobPost) {
        jobs.add(jobPost);
        System.out.println("Added Job: " + jobPost);
    }

    public JobPost getJobById(int postId) {
        return jobs.stream()
                .filter(job -> job.getPostId() == postId)
                .findFirst()
                .orElse(null);
    }

    public void updateJob(JobPost jobPost) {
        for (JobPost existingJob : jobs) {
            if (existingJob.getPostId() == jobPost.getPostId()) {
                existingJob.setTitle(jobPost.getTitle());
                existingJob.setDescription(jobPost.getDescription());
                existingJob.setLocation(jobPost.getLocation());
                return;
            }
        }
    }

    public void deleteJob(int postId) {
        jobs.removeIf(job -> job.getPostId() == postId);
    }
}
