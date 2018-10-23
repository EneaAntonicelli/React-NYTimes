import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  saveArticle: function(Data) {
    return axios.post("/api/articles", Data);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  findArticles: function(topic, startYear, endYear) {
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    let queryParams = {
      "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
    };
    return axios.get(
      queryURL +
        queryParams +
        "&q=" +
        topic +
        "&begin_date=" +
        startYear +
        "0101&end_date=" +
        endYear +
        "1231"
    );
  }
};
