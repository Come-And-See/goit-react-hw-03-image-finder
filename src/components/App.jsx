import React, { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";
import * as css from './App.styled'
import axios from "axios";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    query: '',
    img: [],
    isModalOpen: false,
    largeImageURL: '',
    isLoading: false,
    page: 1,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      return;
    }

    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);

  }


  upQuery = (e) => {
    const value = e.currentTarget.value;
    this.setState({ query: value, page: 1, img: [] });

  }




  fetchData = () => {

    this.setState({ isLoading: true })
    const { query, page } = this.state;
    axios.defaults.baseURL = 'https://pixabay.com/api/'
    const KEY = '11680265-49a2c7c2ef17772c90d3b7b54'

    // setTimeout(() => {
    axios.get(`?key=${KEY}&q=${query}&image_type=photo&page=${page}&per_page=12`).then(response => {
      this.setState(prevState => ({ img: [...prevState.img, ...response.data.hits], isLoading: false }));
    })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
    // }, 1000);
  }

  LoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))


  }


  openModal = (e) => {
    this.setState({ isModalOpen: true, largeImageURL: e.target.dataset.img })
  }

  closeModal = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.setState({
        isModalOpen: false
      })
    }
  }

  render() {
    const { upQuery, fetchData, openModal, closeModal, LoadMore } = this;
    const { img, largeImageURL, isLoading, isModalOpen } = this.state;
    return (
      <css.App>
        <Searchbar upQuery={upQuery} fetchData={fetchData} />

        <ImageGallery data={img} openModal={openModal}
          isModalOpen={isModalOpen} largeImageURL={largeImageURL} closeModal={closeModal} />
        {isLoading && <Loader />}
        {img.length > 0 && <Button LoadMore={LoadMore} />}

      </css.App>
    );
  }
};



