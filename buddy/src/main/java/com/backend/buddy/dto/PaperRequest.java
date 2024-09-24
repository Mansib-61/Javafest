package com.backend.buddy.dto;

import org.springframework.web.multipart.MultipartFile;
public class PaperRequest {
    private String title;
    private String description;
    private String category;
    private String subject;
    private MultipartFile file;

    public PaperRequest() {}
    public PaperRequest (String title,String description,String category,String subject,MultipartFile file)   {
        this.title = title;
        this.description = description;
        this.category = category;
        this.subject = subject;
        this.file = file;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public MultipartFile getFile() {
        return file;
    }
    public void setFile(MultipartFile file) {
        this.file = file;
    }
}