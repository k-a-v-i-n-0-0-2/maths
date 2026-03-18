import { useState, useEffect } from 'react';
import { 
  FiArrowLeft, FiCheck, FiUser, FiCalendar, 
  FiClock, FiDollarSign, FiBook, FiAward, FiHome, FiTarget
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import styles from './HomePersonalTuition.module.css';

function HomePersonalTuition() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    
    // Handle scroll effect for navbar
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={styles.minHscreen}>
        {/* Navigation */}
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <h1>Sri Sandhiya <span>Institution</span></h1>
            </div>
            <nav className={styles.navbar}>
              <button onClick={() => navigate(-1)} className={styles.backButton}>
                <FiArrowLeft /> Back
              </button>
            </nav>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Home Personal Tuition</h1>
            <p className={styles.pageSubtitle}>Personalized Learning in the Comfort of Your Home</p>
          </div>
        </section>
  
        {/* Main Content */}
        <section className={`${styles.section} ${styles.programOverview}`}>
          <div className={styles.container}>
            <div className={styles.overviewContent}>
              {/* Left Column - Program Details */}
              <div className={styles.overviewText}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Program Details</h2>
                  <p className={styles.sectionSubtitle}>Tailored learning for academic success</p>
                </div>
                
                <div className={styles.keyHighlights}>
                  <h3>About the Program</h3>
                  <p>
                    Our Home Personal Tuition program offers one-on-one instruction in the comfort and convenience of your own home. 
                    This personalized approach allows our tutors to focus entirely on your child's needs, learning style, and pace.
                  </p>
                  <p>
                    We carefully match students with tutors who not only have expertise in mathematics but also connect well with your child's 
                    learning style and personality. This personalized approach has proven to significantly improve academic performance and confidence.
                  </p>
                </div>
    
                <div className={styles.keyHighlights}>
                  <h3>Key Benefits</h3>
                  <ul className={styles.highlightsList}>
                    <li>
                      <FiCheck />
                      <span>Complete personalization of learning materials and teaching methods</span>
                    </li>
                    <li>
                      <FiCheck />
                      <span>Convenience of learning in your own home environment</span>
                    </li>
                    <li>
                      <FiCheck />
                      <span>Flexible scheduling to accommodate your family's busy lifestyle</span>
                    </li>
                    <li>
                      <FiCheck />
                      <span>Elimination of travel time and associated costs</span>
                    </li>
                    <li>
                      <FiCheck />
                      <span>Regular progress reports and parent communication</span>
                    </li>
                  </ul>
                </div>
    
                <div className={styles.keyHighlights}>
                  <h3>Curriculum Coverage</h3>
                  <p>
                    Our home tuition covers the complete mathematics curriculum with additional focus on areas where your child needs extra support:
                  </p>
                  <div className={styles.subjectGrid}>
                    <div className={styles.subjectCard}>
                      <div className={styles.subjectIcon}>
                        <FiBook />
                      </div>
                      <h3>Algebra and Functions</h3>
                    </div>
                    <div className={styles.subjectCard}>
                      <div className={styles.subjectIcon}>
                        <FiBook />
                      </div>
                      <h3>Geometry and Trigonometry</h3>
                    </div>
                    <div className={styles.subjectCard}>
                      <div className={styles.subjectIcon}>
                        <FiBook />
                      </div>
                      <h3>Calculus and Advanced Math</h3>
                    </div>
                    <div className={styles.subjectCard}>
                      <div className={styles.subjectIcon}>
                        <FiBook />
                      </div>
                      <h3>Problem-Solving Techniques</h3>
                    </div>
                    <div className={styles.subjectCard}>
                      <div className={styles.subjectIcon}>
                        <FiBook />
                      </div>
                      <h3>Exam Preparation</h3>
                    </div>
                    <div className={styles.subjectCard}>
                      <div className={styles.subjectIcon}>
                        <FiBook />
                      </div>
                      <h3>Competitive Exam Training</h3>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right Column - Sidebar */}
              <div className={styles.sidebarContent}>
                {/* Program Details Card */}
                <div className={styles.detailCard}>
                  <h3>At a Glance</h3>
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                      <div className={styles.detailIcon}>
                        <FiUser />
                      </div>
                      <div>
                        <p className={styles.detailLabel}>Students</p>
                        <p className={styles.detailValue}>One-on-One Instruction</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <div className={styles.detailIcon}>
                        <FiHome />
                      </div>
                      <div>
                        <p className={styles.detailLabel}>Location</p>
                        <p className={styles.detailValue}>Student's Home</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <div className={styles.detailIcon}>
                        <FiCalendar />
                      </div>
                      <div>
                        <p className={styles.detailLabel}>Duration</p>
                        <p className={styles.detailValue}>Flexible (3-12 months)</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <div className={styles.detailIcon}>
                        <FiClock />
                      </div>
                      <div>
                        <p className={styles.detailLabel}>Hours</p>
                        <p className={styles.detailValue}>Flexible (2-6 hours weekly)</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <div className={styles.detailIcon}>
                        <FiTarget />
                      </div>
                      <div>
                        <p className={styles.detailLabel}>Grade Levels</p>
                        <p className={styles.detailValue}>6th - 12th Grade</p>
                      </div>
                    </div>
                    <div className={styles.detailItem}>
                      <div className={styles.detailIcon}>
                        <FiDollarSign />
                      </div>
                      <div>
                        <p className={styles.detailLabel}>Pricing</p>
                        <p className={styles.detailValue}>Starting at ₹800 per hour</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Call to Action */}
                <div className={styles.enrollmentCta}>
                  <div className={styles.ctaContent}>
                    <h3>Interested in Home Tuition?</h3>
                    <p>Contact us today to schedule a free consultation and find the perfect tutor for your child.</p>
                    <div className={styles.ctaButtons}>
                      <button className={`${styles.ctaButton} ${styles.primaryButton}`} onClick={() => window.open('https://www.annauniv.edu/result.php', '_blank')}>
                        Schedule Consultation
                      </button>
                    </div>
                  </div>
                </div>
  
                {/* Testimonials */}
                <div className={styles.testimonialsSection}>
                  <h3>Parent Testimonials</h3>
                  <div className={styles.testimonialCards}>
                    <div className={styles.testimonialCard}>
                      <p className={styles.testimonialText}>
                        "The home tuition program has been a game-changer for my daughter. Her grades improved significantly, and she's now much more confident in her math abilities."
                      </p>
                      <p className={styles.testimonialAuthor}>- Parent of 9th Grade Student</p>
                    </div>
                    <div className={styles.testimonialCard}>
                      <p className={styles.testimonialText}>
                        "Having a tutor come to our home has made learning so much more convenient. The personalized attention has helped my son overcome his math anxiety."
                      </p>
                      <p className={styles.testimonialAuthor}>- Parent of 7th Grade Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <h2>Sri Sandhiya <span>Institution</span></h2>
              <p>Personalized mathematics education for academic excellence</p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerLinkGroup}>
                <h3>Programs</h3>
                <ul>
                  <li><Link to="/">Home Tuition</Link></li>
                  <li><Link to="/">Online Classes</Link></li>
                  <li><Link to="/">Exam Preparation</Link></li>
                </ul>
              </div>
              <div className={styles.footerLinkGroup}>
                <h3>Contact</h3>
                <ul>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Our Tutors</Link></li>
                  <li><Link to="/">Get in Touch</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 Sri Sandhiya Institution. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default HomePersonalTuition;