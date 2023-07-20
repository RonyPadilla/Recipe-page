import "../Style/info.css";

function Info() {
  return (
    <>
      <section className="info">
        <h1 className="title">Classic Cheesecake Recipe</h1>
        <div className="paragraph-div">
          <p className="paragraph-cake">
            <i>Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.</i>
            
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
