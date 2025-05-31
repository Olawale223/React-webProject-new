import './CardComponent.css'
import phonee from '../../Assets/FoodCourt/phonee.png';
import DownloadPrompt from './DownloadPrompts';

export default function FloatingImage() {
  return (
    <div className="floating-cont">
      <div className="fl-cont-arr">
        <div className="fl-text-cont">
          <h1>Hungry?</h1>
          <p>Order now!</p>
          
        </div>
        <DownloadPrompt />
      </div>
      <div className="fl-img-cont">
        
        <img
          src={phonee}
          alt="Mobile app interface preview"
          // className="phone-mockup"
          
        />
      </div>
      
    </div>
  )
}

