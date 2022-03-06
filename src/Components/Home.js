import React from 'react';
import '../Styles/Home.css';
export default function Home() {
  return (
    <div>
      <h1>Welcome to Dinner Bell</h1>
      <p>
        <h2>
          {' '}
          Dinner Bell is your one stop website for all the delicious recipes!
        </h2>
        <h3 className="post-description">
          We love new food to share around the globe, post your own culinary
          masterpiece in our share your dish section! Users world wide have
          their love of cooking with us and it is our pleasure to share it with
          you!
        </h3>
        <h3 className="search-description">
          Looking for something new? Simply select Recipes to have a look
          through our collection! We here at Dinner Bell like to experience the
          world through out taste buds, enjoying a meal with others is one of
          the simplest way to truly emeers yourself in not only the art of
          cooking but culture from which the meal came.
        </h3>
      </p>
      <img src="https://t3.ftcdn.net/jpg/03/07/25/60/400_F_307256093_I8qlofSMsp8E9qK1MO7lwmB5ejd01t19.jpg" />
    </div>
  );
}
