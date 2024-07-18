import { useEffect, useState } from "react";
import axios from "axios";

async function getUser(page) {
  try {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
}
//https://picsum.photos/v2/list?page=2&limit=100

const Photo = () => {

  const [randomImg, setRandomImg] = useState([]);
  const [nextPage ,setNextPage] = useState(1);

  const handleLoad = () =>
  {
   
    getUser(nextPage).then((img) => {
        // setRandomImg(img);
       
        const newPhoto = [...randomImg,img] ;
        setRandomImg(newPhoto)
        setNextPage(nextPage +1)
      }).catch((error) => {
        console.error('Error in useEffect:', error);
      });
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
        <div>
            {randomImg.length > 0 ? (
        <div className="grid grid-cols-4 gap-5 p-5">
          {randomImg.map((item) => (
            <div
            key={item.id} 
            className="p-3 bg-white shadow-md rounded-lg h-[200px]">
                <img src={item.download_url} alt={item.author}></img>
               
          </div>
            
          ))}
        </div>
      ) : (
        <p>No img</p>
      )}
        </div>
      
      <div className="text-center">
      <button 
      onClick={handleLoad}
      className="inline-block px-8 py-4 bg-gray-800  text-white">Load more </button>
      </div>
    </div>
  );
}

export default Photo;
