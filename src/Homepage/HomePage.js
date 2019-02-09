import React, { Component } from 'react';
import '../css/daycare.css';

class HomePage extends Component {

  render() {
    return(
      <div>
        <ul className="header">
          <li>Home</li>
          <li>Lessons</li>
          <li>Menus</li>
          <li>Upcoming Events</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Pay Your Bill Online</li>
        </ul>
        <div>
        
        </div>
        <div>
          <section className="about-us">
            <h3>About Us</h3>
            Experts in early childhood development note that children often learn at the level of someone considered a genius from ages 0-5 years.  It is so important to support that level of learning by teaching children at these ages the foundation for life's success enabling them to excel not only in their physical development but also academically and spiritually.  At Jubilee Christian Academy, your child will learn basic academic skills that will prepare them for kindergarten and allow them to perform with academic excellence as they journey into their educational career.  In a caring environment, your child will begin to develop spiritually as they learn, through basic Bible stories, about the love of Jesus Christ and what his love for them means for their lives.  We also work with our children to help them grow and stay on track as they develop physically.  One of the ways we do this is by providing healthy meals and snacks throughout each day, teaching the children the proper way to feed their bodies to create and maintain good health.

            <p>If you would like your child to learn and grow in a safe, loving, caring, Christian environment, then Jubilee Christian Academy is the right place for you.  Contact us to find out how to get your child enrolled today!
            </p>
          </section>
        </div>
      </div>


    );
  }
}

export default HomePage;
