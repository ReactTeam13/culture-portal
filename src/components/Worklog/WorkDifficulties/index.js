import React from 'react';
import './index.css';

function Difficulties({ data }) {
  return (
    <section className="wrapper">
      <div className="container-fostrap">
        <div>
          <h2 className="heading">
            Team Difficulties
          </h2>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              {
                data.map((item, i) => (
                  <div key={i} className="col-xs-12 col-sm-4">
                    <div className="card-wrapper">
                      <div className="img-card">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="card-content">
                        <h4 className="card-title">
                          {item.title}

                        </h4>
                        <p className="">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Difficulties;
