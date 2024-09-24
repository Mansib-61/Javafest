package com.backend.buddy.dto;

public class ReviewRequest {
    private String paperId;
    private int rating;
    private String comment;

    // Constructors, Getters, and Setters
    public ReviewRequest() {}

    public ReviewRequest(String paperId, int rating, String comment) {
        this.paperId = paperId;
        this.rating = rating;
        this.comment = comment;
    }

    public String getPaperId() {
        return paperId;
    }

    public void setPaperId(String paperId) {
        this.paperId = paperId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
