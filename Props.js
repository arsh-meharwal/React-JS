import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

//----------List----------------//

const books = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/818LCPpmyWL._AC_UL900_SR900,600_.jpg',
    title: 'First Book',
    author: 'RamboJatt'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Second Book',
    author: 'RamboJatt 2'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Third Book',
    author: 'RamboJatt 2'
  }
]

//----------List----------------//

const Booklist = () => {
  return( 
    <section className = 'booklist'>
      {books.map((a)=>{
        const {image,title,author} = a;
        return(
          <Book img = {image} titl = {title} auth = {author}/>
        );
      })}
    </section>
  );
};

//Working of props, You can name it anything if u want other than props like shake, bake etc.

const Book = ({img,auth,titl,children})=> {
    return (
        <section className = 'book'>
            <img src = {img} alt = {auth}/>
            <h2>{titl}</h2>
            <p>{auth}</p>
            {children}
        </section> 
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
