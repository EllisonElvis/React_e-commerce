const Hero = () => {
  return (
    <>
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="hero"
      />

      <div className="hero-overlay">
        <h1>Wildly Comfortable. Super Natural.</h1>

        <div className="hero-buttons">
          <button>SHOP MEN</button>
          <button>SHOP WOMEN</button>
        </div>
      </div>
    </section>

    {/* <section>
        <div>
            <img src="#" alt="#" />
        </div>
    </section> */}
    </>
  );
};

export default Hero;