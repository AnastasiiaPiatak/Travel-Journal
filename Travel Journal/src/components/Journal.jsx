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
          <img src="" alt="" />
          <div className="journal__gallery-text">
            <p className="journal__gallery-textData">02.11.2022</p>
            <h4 className="journal__gallery-textTitle">
              The interesting place
            </h4>
            <p className="journal__gallery-textInfo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              maiores, possimus ipsum voluptates accusantium cum libero rerum
              provident suscipit. Eius ipsa explicabo praesentium doloribus
              aliquam quia unde, mollitia ducimus quos.
            </p>
          </div>
        </div>
        <div className="journal__gallery-card">
          <img src="" alt="" />
          <div className="journal__gallery-text">
            <p className="journal__gallery-textData">27.08.2020</p>
            <h4 className="journal__gallery-textTitle">
              The interesting place
            </h4>
            <p className="journal__gallery-textInfo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              maiores, possimus ipsum voluptates accusantium cum libero rerum
              provident suscipit. Eius ipsa explicabo praesentium doloribus
              aliquam quia unde, mollitia ducimus quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
