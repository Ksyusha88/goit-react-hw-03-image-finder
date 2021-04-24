import { Component } from 'react';
import ImageGallery from './ImageGallery/';
import Searchbar from './Searchbar/';
import imgApi from './services/img-api';
import Button from './Button/';
import LoadMoreComponent from './Loader/Loader';
import Modal from './Modal/';

class App extends Component {
  state ={
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: "",
    alt: "",
  };


componentDidUpdate(prevProps, prevState, snapshot){
  if (prevState.searchQuery !== this.state.searchQuery ){
    this.fetchImg();
  }
  if (snapshot !== null){
    window.scrollTo({
      top: snapshot - 250,
      behavior: 'smooth',
    });
  }
}

onChangeQuery = (query) => {
  this.setState({
    searchQuery: query, 
    currentPage: 1, 
    hits: [],
    error: null, 
  }); 
};

toggleModal =() => {
  this.setState(({showModal}) => ({showModal: !showModal }));
};

setLargeImg = (event)=>{
  this.setState({
    largeImage : event.currentTarget.srcset,
    alt: event.currentTarget.alt,
  });
  this.toggleModal();
}

fetchImg =() => {
  const {currentPage,searchQuery} = this.state;
  const options ={searchQuery,currentPage};

  this.setState({isLoading: true});

    imgApi
    .fetchImg(options)
    .then(({hits}) =>{
      this.setState (prevState =>({
        hits: [...prevState.hits, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
    })
    .catch(error => this.setState({error}))
    .finally(() => this.setState({isLoading: false}));
};




render() {
  const {hits, isLoading, error, showModal, largeImage, alt} = this.state;
  const shouldRenderLoadMoreBtn = hits.length > 0 && !isLoading;

  return(
    <div>
  {error && <h1>Oops, something went wrong, please reload the page again!</h1>}
  <Searchbar onSubmit={this.onChangeQuery}/>
  <ImageGallery hits ={hits} onClickModal ={this.setLargeImg} />

    {showModal && (
      <Modal onClose ={this.toggleModal} largeImage = {largeImage} alt ={alt}/>)}

      {isLoading && <LoadMoreComponent />}

      {shouldRenderLoadMoreBtn && <Button loadMore ={this.fetchImg}/>} 
      </div>
      );
  }
}


export default App;
