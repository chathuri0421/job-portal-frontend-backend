package com.spring05.spring_boot_test05;

import com.spring05.spring_boot_test05.model.JobPost;
import com.spring05.spring_boot_test05.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobRestController {

    @Autowired
    private JobService service;

    @GetMapping("/jobPosts")
    public List<JobPost> getAllJobs() {
        return service.getAllJobs();
    }

    @GetMapping("/jobPosts/{postId}")
    public JobPost getJob(@PathVariable("postId") int postId) {
        return service.getJobById(postId);
    }

    @PostMapping("/jobPosts")
    public JobPost addJob(@RequestBody JobPost jobPost) {
        service.addJob(jobPost);
        return service.getJobById(jobPost.getPostId());
    }
    @PutMapping("/jobPosts/{postId}")
    public JobPost updateJob(@PathVariable("postId") int postId, @RequestBody JobPost updatedJob) {
        JobPost existingJob = service.getJobById(postId);
        if (existingJob == null) {
            throw new RuntimeException("Job with ID " + postId + " not found");
        }
        updatedJob.setPostId(postId); // Ensure the ID in the body matches the path
        service.updateJob(updatedJob);
        return service.getJobById(postId);
    }

    @DeleteMapping("/jobPost/{postId}")
    public String deleteJob(@PathVariable int postId) {
        service.deleteJob(postId);
        return "Deleted";
    }
}