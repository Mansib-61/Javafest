package com.backend.buddy.service;
import com.backend.buddy.dto.PaperRequest;
import com.backend.buddy.model.Paper;
import com.backend.buddy.repository.PaperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaperService {

    @Autowired
    private PaperRepository paperRepository;

    public Paper savePaper(PaperRequest paperRequest) {
        Paper paper = new Paper();
        paper.setTitle(paperRequest.getTitle());
        paper.setDescription(paperRequest.getDescription());
        paper.setCategory(paperRequest.getCategory());
        paper.setSubject(paperRequest.getSubject());
        // Logic to save the file to the file system or cloud storage
        return paperRepository.save(paper);
    // Remove the extra closing curly brace
}
}