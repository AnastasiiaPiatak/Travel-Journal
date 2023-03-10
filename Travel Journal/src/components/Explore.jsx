import img1 from "./img/lake.jpg";
import img2 from "./img/lake3.jpg";
import img3 from "./img/lake2.jpg";

export default function Explore() {
  return (
    <div className="explore">
      <div className="explore__text">
        <h2 className="explore__text-title">Explore the World</h2>
        <p className="explore__text-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae qui
          cum vitae architecto et eveniet. Porro reiciendis optio enim quia
          cupiditate beatae corrupti harum maiores, tempora, aspernatur maxime.
          Totam, perferendis?
        </p>
      </div>
      <div className="explore__gallery">
        <div className="explore__gallery-card">
          <img src={img1} alt="" />
          <div className="explore__gallery-cardWrapper">
            <h4 className="explore__galery-cardTitle">Mountains</h4>
            <p className="explore__galery-cardText">AUSTRIA</p>
          </div>
        </div>
        <div className="explore__gallery-card">
          <img src={img2} alt="..." />
          <div className="explore__gallery-cardWrapper">
            <h4 className="explore__galery-cardTitle">Lake</h4>
            <p className="explore__galery-cardText">USA</p>
          </div>
        </div>
        <div className="explore__gallery-card">
          <img src={img3} alt="" />
          <div className="explore__gallery-cardWrapper">
            <h4 className="explore__galery-cardTitle">Forest</h4>
            <p className="explore__galery-cardText">Norway</p>
          </div>
        </div>
      </div>
    </div>
  );
}
