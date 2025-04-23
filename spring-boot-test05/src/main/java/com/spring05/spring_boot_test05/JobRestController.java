package com.spring05.spring_boot_test05;

import com.spring05.spring_boot_test05.model.JobPost;
import com.spring05.spring_boot_test05.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
}
