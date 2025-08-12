import React, { Component } from "react";
import api from './services/api';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  }

  async componentDidMount(){
    this.setState({isLoading: true});
    try{
      const articles=await api.fetchArticles("react");
      this.setState({articles});
    } catch (error){
      this.setState({
        error: error.message
      })
    } finally{
      this.setState({isLoading: false})
    }
  }

  render(){
    const {articles, isLoading, error} = this.state;

    return(
      <div>
       {isLoading && <p>Loading...</p>}
       {error && <p style={{color: "red"}}>{error}</p>}
       {!isLoading && !error && <ArticleList articles={articles}/>}
      </div>
    )
  }
}

export default App;
