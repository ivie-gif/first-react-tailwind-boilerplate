import React from 'react';
import Header from '../Header/header'; //import the component as it appears o your file structure
import Footer from '../Footer/footer'; //import the component as it appears o your file structure

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
