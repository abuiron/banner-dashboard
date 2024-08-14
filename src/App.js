import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Importing global styles

function App() {
  const [bannerData, setBannerData] = useState({
    description: '',
    link: '',
    countdownTime: 0,
    visible: false,
  });

  useEffect(() => {
    // Fetch initial banner data
    fetch('http://localhost:5000/api/banner')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBannerData({
          description: data.description,
          link: data.link,
          countdownTime: data.countdown_time,
          visible: data.visible,
        });
      })
      .catch((error) => {
        console.error('Failed to fetch banner data:', error);
      });
  }, []);

  const updateBannerData = () => {
    // Fetch updated banner data
    fetch('http://localhost:5000/api/banner')
      .then((response) => response.json())
      .then((data) => {
        setBannerData({
          description: data.description,
          link: data.link,
          countdownTime: data.countdown_time,
          visible: data.visible,
        });
      })
      .catch((error) => {
        console.error('Failed to update banner data:', error);
      });
  };

  return (
    <div className="App">
      <Header />
      {bannerData.visible && (
        <Banner
          description={bannerData.description}
          link={bannerData.link}
          countdownTime={bannerData.countdownTime}
        />
      )}
      <Dashboard updateBannerData={updateBannerData} />
      <Footer />
    </div>
  );
}

export default App;
