import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import chef from '../Assets/FoodCourt/chef.jpg';
import boss from '../Assets/FoodCourt/boss.jpg';
import rider from '../Assets/FoodCourt/rider.jpg';
import meeting from '../Assets/FoodCourt/meeting.jpg';
import career from '../Assets/FoodCourt/career.png';
import monitor from '../Assets/FoodCourt/monitor.svg';
import people from '../Assets/FoodCourt/people.svg';
import scale from '../Assets/FoodCourt/scale.svg';
import medal from '../Assets/FoodCourt/medal.svg';
import FormComponent from '../Components/Minor Components/FormComonent';

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <main className="career-main">
        <section className="career-hero">
          <div className="career-heroContent">
            <h1>Choose your forte</h1>
            <p>
              Become a part of something extraordinary. A workplace where you can discover yourself in a distinctly
              unique food ecosystem that's built on innovation and collaboration.
            </p>
          </div>
          <div className="career-heroImage">
            <img
              src={career}
              alt="Team collaboration"
              width={400}
              height={400}
            />
          </div>
        </section>

        <section className="howWeWork">
          <h2>How we work</h2>
          <p>A food tech ecosystem that thrives when innovation meets collaboration.</p>

          <div className="workGrid">
            <div className="workItem">
              <div className="iconn">
              <img
              src={monitor}
              alt="Workplace scene 5"
              />
              </div>
              <h3>Security & Protection</h3>
              <p>
                We prioritize a culture that respects individual privacy and ensures confidentiality across operations.
              </p>
            </div>
            <div className="workItem">
              <div className="iconn">
              <img
              src={people}
              alt="Workplace scene 6"
             />
              </div>
              <h3>Actual work - No bureaucracy</h3>
              <p>Work that matters in a charged part of a growing ecosystem with minimal bureaucracy.</p>
            </div>
            <div className="workItem">
              <div className="iconn">
              <img
              src={scale}
              alt="Workplace scene 7"
             />
              </div>
              <h3>Everyone is a contributor</h3>
              <p>All voices are valid and everyone plays a part in our success story, regardless of experience.</p>
            </div>
            <div className="workItem">
              <div className="iconn">
              <img
              src={medal}
              alt="Workplace scene 7"
             />
              </div>
              <h3>Defined reward system</h3>
              <p>We recognize the importance of appreciation and ensure rewards match productivity.</p>
            </div>
          </div>
        </section>

        <section className="imageGrid">
          <div className="gridImage-1">
            <img
              src={chef}
              alt="Workplace scene 1"
            />
          </div>
          <div className="gridImage-2">
            <img
              src={rider}
              alt="Workplace scene 2"
            />
          </div>
          <div className="gridImage-3">
            <img
              src={boss}
              alt="Workplace scene 3"
            />
          </div>
          <div className="gridImage-4">
            <img
              src={meeting}
              alt="Workplace scene 4"
            />
          </div>
        </section>

        <section className="joinUs">
          <h2>Join us</h2>
          <p>
            Looking for a place to put all those epic ideas into action? Join the team. We'll help you do what you love
            with opportunities.
          </p>
        </section>
        <FormComponent />
      </main>
      <Footer />
    </>
  );
};

export default CareerPage;
