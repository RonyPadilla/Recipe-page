import "../Style/info.css";

function Info() {
  return (
    <>
      <section className="info">
        <h1 className="title">Classic Cheesecake Recipe</h1>
        <div className="paragraph-div">
          <div className="svg-paragraph">
            <svg
            className="svg-img"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
            >
              <g clip-path="url(#clip0_1_207)">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
                <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4" />
                <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4" />
                <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4" />
                <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4" />
                <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4" />
              </g>
              <defs>
                <clipPath id="clip0_1_207">
                  <rect width="13" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="paragraph-cake">
            <i>
              Look no further for a creamy and ultra smooth classic cheesecake
              recipe! Paired with a buttery graham cracker crust, no one can
              deny its simple decadence. For the best results, bake in a water
              bath.
            </i>
          </p>
        </div>
      </section>

      <img
        className="img-cake"
        src="https://github.com/RonyPadilla/Recipe-page/blob/main/img/photo1.png?raw=true"
        alt="Cake"
      />
    </>
  );
}

export default Info;
