import React from 'react';
import './About.css';  // Import a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className='text'>About Ashwanth Maths</h1>
        <p  className='text'>Welcome to Ashwanth Maths, where learning math becomes an exciting and engaging journey!</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Our Mission</h2>
          <p className='text'>
            Our mission is to provide high-quality mathematics tutoring to students of all levels. Whether you're
            preparing for exams, need help with homework, or simply want to master math, Ashwanth Maths is here to help you
            achieve your academic goals.
          </p>
        </section>

        <section>
          <h2>Who We Are</h2>
          <p className='text'>
            Ashwanth is a passionate educator with a strong background in mathematics and years of teaching experience.
            Our team consists of qualified tutors dedicated to helping students understand the concepts and build confidence.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced and qualified tutors.</li>
            <li>Personalized lesson plans tailored to individual needs.</li>
            <li>Interactive learning to make math fun and interesting.</li>
            <li>Flexible scheduling and online classes available.</li>
          </ul>
        </section>

        <section>
          <h2>Our Approach</h2>
          <p className='text'>
            We focus on building strong foundational knowledge and gradually advancing to more complex concepts. Our
            approach is to make learning math less intimidating, encouraging critical thinking, and ensuring practical
            applications in real life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
