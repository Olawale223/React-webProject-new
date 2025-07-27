import './CardComponent.css'
import phonee from '../../Assets/FoodCourt/phonee.png';
import DownloadPrompt from './DownloadPrompts';

export default function FloatingImage() {
  return (
    <>
      <div className="floating-cont">
        <div className="fl-cont-arr">
          <div className="fl-text-cont">
            <h1>Hungry?</h1>
            <p>Order now!</p>
          </div>
          <DownloadPrompt />
        </div>
        <div className="fl-img-cont">
          <img src={phonee} alt="Mobile app interface preview" />
        </div>
      </div>
      <div className="floating-cont-responsive">
        <img src={phonee} alt="App preview" className="floating-img-responsive" />
        <h1 className="floating-title-responsive">Order food, fast!</h1>
        <p className="floating-desc-responsive">Get your favorite meals delivered to your door.</p>
        <div className="floating-download-responsive">
          <DownloadPrompt />
        </div>
      </div>
    </>
  )
}

