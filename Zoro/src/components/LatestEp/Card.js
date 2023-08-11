import React from "react";
import { faPlay, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Card = (props) => {

const cardStyle = {
   backgroundImage: "url(/img/isekaiking.jpg)"
}
//  const [cardData, setCardData] = useState([]);
//   useEffect(() => {
//     fetchcardData();
//   }, []);
//    const fetchcardData = () => {
//      fetch("http://localhost:4000/")
//        .then((response) => response.json())
//        .then((data) => {
//          setCardData(data);
//        })
//        .catch((error) => {
//          console.log(error);
//        });
//    };



  return (
    <div className="md:flex flex-wrap flex-shrink space-x-2 grid grid-cols-2  w-full">
      {props.AnimeData.map((anime) => {
        return (
          <div
            className="mb-3 relative  md:w-[220px] w-[190px] card"
            key={anime.id}
          >
            {""}
            <Link to={`anime/${anime.id}`}>
              <div className=" card-pic">
                <div className="image-container">
                  <img src={anime.img} alt="img" className=" w-full md:h-[350px] h-[250px]" />
                  <div className="overlay"></div>
                </div>

                <div className="  pl-2 pt-1">
                  <h1 className="text-white text-[16px] pb-2 capitalize">
                    {anime.name}
                  </h1>
                </div>
              </div>
              <div
                className=" text-white absolute top-0 left-0 flex flex-col pt-2 pl-3 pr-4  card-info pb-2 "
                style={cardStyle}
              >
                <h1 className=" text-[18px] capitalize pb-2 font-bold">
                  {anime.name}
                </h1>
                <span className="text-[#aaa]">1 season</span>
                <span className="text-[#aaa]">24 episodes</span>
                <p className=" pt-3 pb-10 text-[16px]">
                  Idly indulging in baseless paranormal activities with the
                  OCcult club, high Schooler yuuji itadori spend his days at
                  either the clubroom or...
                </p>
                <div className="  space-x-5 text-[20px] absolute bottom-2">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className=" hover:text-[#cae962] "
                  />
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="  hover:text-[#cae962]"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
