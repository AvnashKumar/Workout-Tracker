import React from 'react';

const CarouselComponent = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Fitness & Diet Tips</h2>

      <div
        id="carouselExample"
        className="carousel slide mx-auto"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ maxWidth: '800px' }}
      >
        <div className="carousel-inner border rounded shadow-sm">
          <div className="carousel-item active">
            <img src="/gym1.jpg" className="d-block w-100 carousel-img" alt="Workout 1" />
          </div>
          <div className="carousel-item">
            <img src="/gym2.jpg" className="d-block w-100 carousel-img" alt="Workout 2" />
          </div>
          <div className="carousel-item">
            <img src="/gym3.jpg" className="d-block w-100 carousel-img" alt="Diet 1" />
          </div>
          <div className="carousel-item">
            <img src="/gym4.jpg" className="d-block w-100 carousel-img" alt="Diet 2" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
