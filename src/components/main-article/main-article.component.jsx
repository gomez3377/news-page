import React from "react";
import Button from "../button/button.component";
import MainArticleImg from '../../assets/images/image-web-3-desktop.jpg'

const MainArticle = () => {
  return (
    <div>
        <img src={MainArticleImg} alt="main-article-img" />
      <h1>The Bright Future of Web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <Button>Read More</Button>
    </div>
  );
};

export default MainArticle;
