// App.js - Complete file with all icons imported
import { useState, useEffect } from 'react';
import {
  FiMenu, FiX, FiArrowRight, FiMapPin, FiClock, FiPhone,
  FiBook, FiStar, FiCheck,
  FiMail, FiInstagram, FiFacebook, FiTwitter, FiYoutube,
  FiTrendingUp, FiPieChart, FiBarChart2, FiZap, FiTarget,
  FiBookOpen,
  FiUsers, FiMessageCircle // Added missing icons
} from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './contact';
import HomePersonalTuition from './HomePersonalTuition';

import Navbar from './Navabar';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('home');


  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const [currentAboutSlide, setCurrentAboutSlide] = useState(0);
  const aboutImages = ['./sri.png', './icon.png'];

  // Handle about section image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAboutSlide((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  // Handle scroll effect for navbar and scroll top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'subjects', 'programs', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Scroll to section when nav link is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    useEffect(() => {
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
          }
        });
      };

      window.addEventListener('scroll', animateOnScroll);
      setTimeout(animateOnScroll, 200);

      return () => window.removeEventListener('scroll', animateOnScroll);
    }, []);
  };

  useScrollAnimation();

  // Handle navigation to detail pages
  const handleNavigateToDetails = (page) => {
    navigate(`/${page}`);
  };

  // Open external enrollment link
  const openBookingForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd19a_uY7knGxkNX85GkubGmZGsE0W1lhf66xHU9Ty_MsYBzA/viewform?usp=header', '_blank');
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app">
      {/* Header/Navbar */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <Link to="/" onClick={() => scrollToSection('home')}>
              <h1>SRi Sandhiya<span>Institution</span></h1>
            </Link>
          </div>

          <div className="header-actions">

            <div className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>
          </div>

          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#subjects" className={activeSection === 'subjects' ? 'active' : ''} onClick={() => scrollToSection('subjects')}>Subjects</a></li>
              <li><a href="#programs" className={activeSection === 'programs' ? 'active' : ''} onClick={() => scrollToSection('programs')}>Tutoring Programs</a></li>
              <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
            <div className="navbar-footer">
              <button className="cta-button primary-button mobile-cta" onClick={openBookingForm}>
                Get Started <FiArrowRight />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-particles"></div>
        <div className="container hero-container">
          <div className="hero-content animate-on-scroll">
            <span className="hero-badge">Welcome to Excellence</span>
            <h1 className="hero-title">
              Excellence in <span className="accent-text typing-effect">Mathematics</span> Education
            </h1>
            <p className="hero-subtitle">
              Transform your mathematical abilities with personalized coaching from experienced educators. Join thousands of successful students who have mastered mathematics with us.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary-button" onClick={openBookingForm}>
                Get Started <FiArrowRight className="btn-icon" />
              </button>
              <button className="cta-button secondary-button" onClick={() => scrollToSection('about')}>
                Learn More
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-number">15+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">900+</span>
                <span className="hero-stat-label">Happy Students</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">98%</span>
                <span className="hero-stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Building Strong Mathematical Foundations</h2>
            <p className="section-subtitle">Since 2010, we've been transforming students' relationship with mathematics through personalized attention and proven teaching methods.</p>
          </div>

          <div className="about-content">
            <div className="about-image animate-on-scroll">
              <div className="about-slider">
                {aboutImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`Sri Sandhiya Institution Slide ${index + 1}`}
                    className={`slider-img ${index === currentAboutSlide ? 'active' : ''}`}
                  />
                ))}
                <div className="slider-controls">
                  {aboutImages.map((_, index) => (
                    <button 
                      key={index} 
                      className={`slider-dot ${index === currentAboutSlide ? 'active' : ''}`}
                      onClick={() => setCurrentAboutSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="about-text animate-on-scroll">
              <h3>Why Choose Sri Sandhiya Institution?</h3>
              <p>At Sri Sandhiya Institution, we believe that every student has the potential to excel in mathematics with the right guidance and approach. Our proven methodology combines traditional teaching with modern techniques to ensure comprehensive understanding and application.</p>

              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <FiTarget className="feature-icon" />
                  </div>
                  <div>
                    <h4>Personalized Learning</h4>
                    <p>Tailored plans for individual needs</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <FiUsers className="feature-icon" />
                  </div>
                  <div>
                    <h4>Small Batches</h4>
                    <p>Maximum personal attention</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <FiTrendingUp className="feature-icon" />
                  </div>
                  <div>
                    <h4>Regular Assessments</h4>
                    <p>Track progress effectively</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon-wrapper">
                    <FiZap className="feature-icon" />
                  </div>
                  <div>
                    <h4>Problem-Solving Focus</h4>
                    <p>Build critical thinking skills</p>
                  </div>
                </div>
              </div>

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">900+</span>
                  <span className="stat-label">Students Taught</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Tutoring Programs Section */}
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-title">Premium Tutoring Programs</h2>
            <p className="section-subtitle">Choose the program that fits your educational needs and learning style</p>
          </div>

          <div className="programs-container">
            {/* Home Personal Tuition with Image on Right */}
            <div className="program-card-with-image animate-on-scroll">
              <div className="program-content-left">
                <div className="program-header">
                  <h3>Home Personal Tuition</h3>
                  <div className="program-tag">Doorstep Service</div>
                </div>

                <div className="faculty-section">
                  <h4>Expert Faculty:</h4>
                  <div className="faculty-member">
                    <div className="faculty-avatar">
                      <img src="./photo1.jpg" alt="Sathish Dhanabal - Mathematics Specialist at Sri Sandhiya Institute" />
                    </div>
                    <div className="faculty-info">
                      <h5>Sathish Dhanabal</h5>
                      <p>Mathematics Specialist</p>
                      <span className="experience-badge">15+ years experience</span>
                    </div>
                  </div>
                  <div className="faculty-member">
                    <div className="faculty-avatar">
                      <img src="./f2.jpg" alt="Ramya Sathish - Sri Sandhiya Institute" />
                    </div>
                    <div className="faculty-info">
                      <h5>Ramya Sathish</h5>
                      <p>Physics, Chemistry Specialist & Hindi</p>
                      <span className="experience-badge">13+ years experience</span>
                    </div>
                  </div>
                </div>

                <ul className="program-features">
                  <li><FiCheck className="feature-icon" /> Premium doorstep teaching service</li>
                  <li><FiCheck className="feature-icon" /> All boards (CBSE/State/ICSE) covered</li>
                  <li><FiCheck className="feature-icon" /> Intensive crash courses available</li>
                  <li><FiCheck className="feature-icon" /> Focus on practical applications</li>
                  <li><FiCheck className="feature-icon" /> Special holiday acceleration classes</li>
                  <li><FiCheck className="feature-icon" /> Flexible scheduling options</li>
                  <li><FiCheck className="feature-icon" /> Parent progress reports</li>
                </ul>

                <div className="program-footer">
                  <button
                    className="details-button"
                    onClick={() => handleNavigateToDetails('home-personal')}
                  >
                    View Details <FiArrowRight className="btn-icon" />
                  </button>
                  <button className="enroll-button" onClick={openBookingForm}>
                    Enroll Now
                  </button>
                </div>
              </div>

              <div className="program-image-right">
                <img
                  src="./photo2.jpg"
                  alt="Personalized Home Tuition Session in Tambaram Chennai"
                  className="program-image"
                />
                <div className="image-overlay-content">
                  <span className="image-badge">Personalized Attention</span>
                  <span className="image-badge secondary">Flexible Timing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section with Images for All Cards */}
      <section id="subjects" className="subjects-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Subjects</span>
            <h2 className="section-title">Comprehensive Subject Coverage</h2>
            <p className="section-subtitle">Expert guidance across all mathematical and scientific disciplines</p>
          </div>

          <div className="subjects-grid">
            {/* CBSE Maths - Image on Right */}
            <div className="subject-card-with-image image-right animate-on-scroll">
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiBookOpen className="subject-icon" />
                </div>
                <h3>STATE BOARD / CBSE / ICSE / IGCSE        MATHEMATICS</h3>
                <p className="subject-description">Master equations, functions, and algebraic structures with our specialized approach to this fundamental branch of mathematics.</p>
                <div className="subject-meta">
                  <span className="experience-badge">12+ Years Teaching</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> NCERT Solutions</span>
                  <span><FiCheck /> Board Exam Prep</span>
                  <span><FiCheck /> Sample Papers</span>
                  <span><FiCheck /> Weekly Test</span>

                </div>
              </div>
              <div className="subject-image-wrapper">
                <img
                  src="./p1.jpg"
                  alt="Board Exam Mathematics Tuition for CBSE, ICSE and State Board"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">CBSE Curriculum Specialists</div>
              </div>
            </div>

            {/* Mathematics - Image on Left */}
            <div className="subject-card-with-image image-left animate-on-scroll">
              <div className="subject-image-wrapper">
                <img
                  src="./p2.png"
                  alt="Advanced Mathematics Coaching Classe in Irumbuliyur"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">Advanced Mathematics</div>
              </div>
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiBookOpen className="subject-icon" />
                </div>
                <h3>Mathematics</h3>
                <p className="subject-description">Understand limits, derivatives, and integrals through our intuitive teaching methods that make complex concepts accessible.</p>
                <div className="subject-meta">
                  <span className="experience-badge">15+ Years Teaching</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> Calculus</span>
                  <span><FiCheck /> Algebra</span>
                  <span><FiCheck /> Trigonometry</span>
                </div>
              </div>
            </div>

            {/* Physics - Image on Right */}
            <div className="subject-card-with-image image-right animate-on-scroll">
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiZap className="subject-icon" />
                </div>
                <h3>Physics</h3>
                <p className="subject-description">Explore the fundamental laws of nature with our comprehensive physics program. From mechanics to quantum physics, we make complex concepts clear.</p>
                <div className="subject-meta">
                  <span className="experience-badge">Faculty: Ramya</span>
                  <span className="experience-badge">10+ Years Teaching</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> Mechanics</span>
                  <span><FiCheck /> Electromagnetism</span>
                  <span><FiCheck /> Thermodynamics</span>
                </div>
              </div>
              <div className="subject-image-wrapper">
                <img
                  src="./p3.png"
                  alt="Physics Tuition and Experiments at Sri Sandhiya Institute"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">Physics Lab Experiments</div>
              </div>
            </div>

            {/* JEE - Image on Left */}
            <div className="subject-card-with-image image-left animate-on-scroll">
              <div className="subject-image-wrapper">
                <img
                  src="./p4.png"
                  alt="IIT JEE and NEET Foundation Course Training"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">Advanced Entrance Prep</div>
              </div>
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiTarget className="subject-icon" />
                </div>
                <h3>IIT - JEE / NEET Foundation Course <span style={{ fontSize: '0.7em', fontWeight: '500', display: 'block', marginTop: '5px', opacity: 0.8 }}>(For 8th to 12th)</span></h3>
                <p className="subject-description">Excel in the Joint Entrance Examination with our rigorous training module. We focus on conceptual depth and problem-solving speed required for India's top engineering universities.</p>
                <div className="subject-meta">
                  <span className="experience-badge">10+ Years JEE Experience</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> Conceptual Clarity</span>
                  <span><FiCheck /> Speed & Accuracy</span>
                  <span><FiCheck /> Rank Boosters</span>
                  <span><FiCheck /> Mock Tests</span>
                </div>
              </div>
            </div>

            {/* Chemistry - Image on Right */}
            <div className="subject-card-with-image image-right animate-on-scroll">
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiPieChart className="subject-icon" />
                </div>
                <h3>Chemistry</h3>
                <p className="subject-description">Master the science of matter with our hands-on chemistry program. Learn organic, inorganic, and physical chemistry with real-world applications.</p>
                <div className="subject-meta">
                  <span className="experience-badge">Faculty: Ramya </span>
                  <span className="experience-badge">8+ Years Teaching</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> Organic Chemistry</span>
                  <span><FiCheck /> Physical Chemistry</span>
                  <span><FiCheck /> Lab Techniques</span>
                </div>
              </div>
              <div className="subject-image-wrapper">
                <img
                  src="./p5.png"
                  alt="Chemistry Tuition Classes and Lab Training"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">Chemistry Lab Sessions</div>
              </div>
            </div>

            {/* Business Maths - Image on Left */}
            <div className="subject-card-with-image image-left animate-on-scroll">
              <div className="subject-image-wrapper">
                <img
                  src="./p6.png"
                  alt="Business Mathematics and Statistics Coaching"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">Business Analytics</div>
              </div>
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiBarChart2 className="subject-icon" />
                </div>
                <h3>Business Maths</h3>
                <p className="subject-description">Apply mathematical principles to business scenarios. Master financial mathematics, statistics, and data analysis for business success.</p>
                <div className="subject-meta">
                  <span className="experience-badge">14+ Years Teaching</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> Financial Math</span>
                  <span><FiCheck /> Statistics</span>
                  <span><FiCheck /> Data Analysis</span>
                </div>
              </div>
            </div>

            {/* Hindi - Image on Right */}
            <div className="subject-card-with-image image-right animate-on-scroll">
              <div className="subject-content">
                <div className="subject-icon-wrapper">
                  <FiBook className="subject-icon" />
                </div>
                <h3>Hindi</h3>
                <p className="subject-description">Discover the beauty of Hindi language and literature. From grammar to creative writing, our program covers all aspects of Hindi learning.</p>
                <div className="subject-meta">
                  <span className="experience-badge">9+ Years Teaching</span>
                </div>
                <div className="subject-highlights">
                  <span><FiCheck /> Grammar</span>
                  <span><FiCheck /> Literature</span>
                  <span><FiCheck /> Creative Writing</span>
                </div>
              </div>
              <div className="subject-image-wrapper">
                <img
                  src="./p7.png"
                  alt="Hindi Language and Literature Classes"
                  className="subject-image"
                  loading="lazy"
                />
                <div className="image-caption">Hindi Literature</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">What our students and parents have to say about their learning journey with us</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon filled" />
                ))}
              </div>
              <p className="testimonial-text">
                "Mathematics was really good. I can easily understand every hard problems . Then I achieve above 90 marks in Mathematics thank you sathish sir he is the main reason for my achievementðŸ˜Š"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #0a2463, #1e88e5)' }}>
                  HG
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-name">Harini G</p>
                  <p className="testimonial-position">Engineering Student</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-on-scroll featured">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon filled" />
                ))}
              </div>
              <p className="testimonial-text">
                " The owner who started this tuition is my maths teacher ðŸ¤© He is really a well skilled teacher and one of the best teacher which I ever met in my school life.He will handle all the subjects and supports the students in a hard time not only in studies in all other things.Apart from being a teacher, he is really a friend to all the students..He will guide the students in a very soft manner.He will work hard for the students to get more marks..Thank You sirðŸ˜Š.Really I'm blessed to be one of his student ðŸ™‡ðŸ»â€â™€ï¸."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #1e88e5, #0a2463)' }}>
                  AM
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-name">Aslin Meera</p>
                  <p className="testimonial-position">Engineering Student</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon filled" />
                ))}
              </div>
              <p className="testimonial-text">
                "My son was very back in all subjects in 12 th std past year.i am go to join my son in this tution last 3 months near board exam.now he got 408 marks in public exam.very best tution around tambaram perungalathur area.and also fees was very low.thank you very much satish sir and ramya mam.thank you .my son now join Bsc computerscience with AI."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #0a2463, #1e88e5)' }}>
                  PS
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-name">Parthiban Selvakumar</p>
                  <p className="testimonial-position">Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Contact Us</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Schedule a consultation or learn more about our programs. We're here to help you succeed.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info animate-on-scroll">
              <div className="contact-card">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FiMapPin className="contact-icon" />
                  </div>
                  <div>
                    <h3>Visit Us</h3>
                    <p>Plot no 4, Bhavani street , Balaji Nagar , Irumbuliyar Chennai , Tamil Nadu 600059</p>
                    <p className="contact-note">Free parking available</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FiClock className="contact-icon" />
                  </div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Mon - Fri (Morning): 5:30am - 8:30am</p>
                    <p>Mon - Sat (Evening): 6:00pm - 9:00pm</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FiPhone className="contact-icon" />
                  </div>
                  <div>
                    <h3>Contact Number</h3>
                    <p>+91 9790995747</p>
                    <p>+91 6374621126</p>

                    <p className="contact-note">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <FiMail className="contact-icon" />
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <p>r.ramyadass@gmail.com</p>
                    <p>ramyasathish7822@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#!" className="social-icon" aria-label="Facebook"><FiFacebook /></a>
                  <a href="#!" className="social-icon" aria-label="Instagram"><FiInstagram /></a>
                  <a href="#!" className="social-icon" aria-label="Twitter"><FiTwitter /></a>
                  <a href="#!" className="social-icon" aria-label="YouTube"><FiYoutube /></a>
                </div>
              </div>

              <div className="contact-buttons">
                <a href="tel:+919790995747" className="contact-btn primary">
                  <FiPhone /> Call Now
                </a>
                <a href="https://wa.me/919790995747" className="contact-btn whatsapp">
                  <FiMessageCircle /> WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-map animate-on-scroll" style={{ height: 'auto', background: 'transparent', boxShadow: 'none', overflow: 'visible' }}>
              <div className="map-stack">
                <div className="map-item-wrapper animate-on-scroll">
                  <div className="map-label">
                    <FiMapPin className="label-icon" />
                    <span>Sri Sandhiya Institution (Irumbuliyur Branch)</span>
                  </div>
                  <div className="map-container" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: '350px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.789982185133!2d80.19031537431566!3d12.92121568738955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d65b0cf0bbb%3A0x1c0243810f7ebf57!2sSri%20sandhiya%20institute!5e0!3m2!1sen!2sin!4v1773849564554!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sri Sandhiya Institution Location"
                    ></iframe>
                  </div>
                </div>

                <div className="map-item-wrapper animate-on-scroll" style={{ marginTop: '30px' }}>
                  <div className="map-label">
                    <FiMapPin className="label-icon" />
                    <span>Sri Sandhiya Tuition (Main Branch)</span>
                  </div>
                  <div className="map-container" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: '350px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.939078506173!2d80.1051545!3d12.9116371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5c78c2d399%3A0x7e8d01e4df3dba41!2sSri%20sandhiya%20tution!5e0!3m2!1sen!2sin!4v1773847966100!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sri Sandhiya Tuition Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <h2>Sri Sandhiya<span>Institution</span></h2>
                <p>No. 1 Tuition Centre in Irumbuliyur, Tambaram and Medavakkam </p>
              </div>
              <p className="footer-description">
                Sri Sandhiya Institution is committed to providing the highest quality education for IIT-JEE, NEET Foundation, and school subjects to students of all levels. Join us and experience excellence.
              </p>
              <div className="footer-social">
                <a href="#!" aria-label="Facebook"><FiFacebook /></a>
                <a href="#!" aria-label="Instagram"><FiInstagram /></a>
                <a href="#!" aria-label="Twitter"><FiTwitter /></a>
                <a href="#!" aria-label="YouTube"><FiYoutube /></a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#subjects" onClick={() => scrollToSection('subjects')}>Subjects</a></li>
                <li><a href="#programs" onClick={() => scrollToSection('programs')}>Programs</a></li>
                <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Our Programs</h3>
              <ul className="footer-links">
                <li><a href="#!" onClick={() => handleNavigateToDetails('home-personal')}>Home Personal Tuition</a></li>
                <li><a href="#!">Online Tutoring</a></li>
                <li><a href="#!">Group Classes</a></li>
                <li><a href="#!">Crash Courses</a></li>
                <li><a href="#!">Holiday Camps</a></li>
                <li><a href="#!">Exam Prep</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new courses and offers</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
              </form>
              <p className="newsletter-note">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>&copy; 2026 Sri Sandhiya Institution. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#!">Privacy Policy</a>
                <a href="#!">Terms of Service</a>
                <a href="#!">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowRight className="scroll-icon" />
      </button>


    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-personal" element={<HomePersonalTuition />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
