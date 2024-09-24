package com.backend.buddy.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "papers")
public class Paper {

    @Id
    private String id;
    private String title;
    private String description;
    private String category;
    private String subject;
    private String filePath;

    // Constructors
    public Paper() {}

    public Paper(String title, String description, String category, String subject, String filePath) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.subject = subject;
        this.filePath = filePath;
    }

    // Getter and Setter methods

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
}
