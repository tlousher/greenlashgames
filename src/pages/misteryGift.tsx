import React from 'react';
import './misteryGift.css';
import MainLayout from "../layouts/mainLayout";

function MisteryGift() {
  return (
      <MainLayout>
        <div className="App">
            <a className={"Link"} href="https://www.youtube.com/embed/WMrJBmWK0IM?autoplay=1">
                <img
                    src={'https://th.bing.com/th/id/R.848ca8118dc7b2908734550b02ed567d?rik=MWdg05gXQ7Tqqw&riu=http%3a%2f%2fimg.desmotivaciones.es%2f201106%2ftumblr_lmur29tmSL1qea223o1_500_large.jpg&ehk=tLnH1jDGz9PjP2PsftMLdeqL0kd%2bXsI8TG7U%2fcEu79c%3d&risl=&pid=ImgRaw&r=0'}
                    alt="cat"
                    className={"image"}
                />
            </a>
        </div>
      </MainLayout>
  );
}

export default MisteryGift;
