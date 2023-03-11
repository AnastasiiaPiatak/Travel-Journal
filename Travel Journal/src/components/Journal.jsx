import beachImg from "./img/beach.jpg";
import waterfallImg from "./img/waterfall.jpg";

export default function Journal() {
  return (
    <div className="journal">
      <div className="journal__text">
        <div className="journal__text-title">The Journal</div>
        <div className="journal__text-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          alias voluptatem dignissimos aspernatur quisquam dolorum, architecto
          fugiat facere quidem voluptatibus fugit, eveniet perspiciatis quasi
          libero molestiae! Dicta illum adipisci aut.
        </div>
      </div>
      <div className="journal__gallery">
        <div className="journal__gallery-card">
          <img src={beachImg} alt="" />
          <div className="journal__gallery-text">
            <p className="journal__gallery-textData">02.11.2022</p>
            <h4 className="journal__gallery-textTitle">Pfeiffer Beach</h4>
            <p className="journal__gallery-textInfo">
              Pfeiffer Beach is located in the Big Sur region of California. It
              is one of the most popular beaches on the Central Coast and is
              well known for Keyhole Rock, a popular photography subject. On a
              limited number of days in December and January each year,
              photographers crowd the beach to obtain pictures of the setting
              sun visible through the arch. Due to the steep terrain prevalent
              along the Big Sur coast, it is one of the few ocean access points
              within Big Sur.
            </p>
          </div>
        </div>
        <div className="journal__gallery-card">
          <img src={waterfallImg} alt="" />
          <div className="journal__gallery-text">
            <p className="journal__gallery-textData">27.08.2020</p>
            <h4 className="journal__gallery-textTitle">Snoqualmie Falls </h4>
            <p className="journal__gallery-textInfo">
              Snoqualmie Falls is a 82 m waterfall in the northwest
              United States, located east of Seattle on the Snoqualmie River
              between Snoqualmie and Fall City, Washington. It is one of
              Washington's most popular scenic attractions and is known
              internationally for its appearance in the television series Twin
              Peaks. More than 1.5 million visitors come to the Falls every
              year, where there is a 0.8 ha park, an observation
              deck, and a gift shop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
