package com.spring05.spring_boot_test05.service;

import com.spring05.spring_boot_test05.model.JobPost;
import com.spring05.spring_boot_test05.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo repo;

    public void addJob(JobPost jobPost) {
        repo.addJob(jobPost);
    }

    public List<JobPost> getAllJobs() {
        return repo.getAllJobs();
    }

    public JobPost getJobById(int postId) {
        return repo.getJobById(postId); // ✅ Correct method call
    }
}
