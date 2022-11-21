import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';


export default function Home() {
  return (
    <div>
      <Main />
      <Row ID="1" title="UpComing" fetchURL={requests.requestUpcoming } />
      <Row ID="2" title="Popular" fetchURL={requests.requestPopular } />
      <Row ID="3" title="Trending" fetchURL={requests.requestTrending } />
      <Row ID="4" title="Top Rated" fetchURL={requests.requestTopRated } />
      <Row ID="5" title="Horror" fetchURL={requests.requestHorror } />
    </div>
  ) 
}
