import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-paper-plane",
    title: "Online Learning",
    des: "Access high-quality educational resources interactively and be a catalyst for personal growth.",
  },
  {
    id: 2,
    icon: "fi fi-rr-user",
    title: "Experienced Instructors",
    des: "Learn from world-class experts who are passionate about helping you succeed.",
  },
  {
    id: 3,
    icon: "fi fi-rr-document",
    title: "Earn Certificates",
    des: "Get recognized for your achievements with certificates upon course completion.",
  },
  {
    id: 4,
    icon: "fi fi-rr-calendar",
    title: "Lifetime Access",
    des: "Enjoy lifetime access to course materials and updates to support your ongoing learning journey.",
  },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">What We Offer</span>
                <h2 className="tp-section-title">For Your Future Learning.</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
