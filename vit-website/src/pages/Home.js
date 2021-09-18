import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <section class="header">
        <nav>
            
            <div class="nav-links" id="navLinks">
                
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="course.html">COURSE</a></li>
                    <li><a href="login.html">LOGIN</a></li>
                    <li><a href="contact.html">CONTACT US</a></li>
                </ul>
            </div>
        </nav>
        <div class="text-box">
            <h1>Vidyalankar Institute of Technology</h1>
            <p>Vidyalankar offers a wide spectrum of co-curricular, extracurricular, and athletic opportunities in addition to academics, which stands on the pillars of many Student Clubs and Student Councils</p>
            <a href="#" class="hero-btn">Visit Us To Know More</a>
        </div>
    </section>
    {/* <!---------Course-----------> */}
    <section class="course">
        <h1>Courses We Offers</h1>
        <p>Master in Management Studies department at Vidyalankar Institute of Technology offers a two year postgraduate program in Management Studies affiliated to University of Mumbai. It is a two year postgraduate degree course. Functional groups are Marketing, Finance, Human Resource, Operations and Systems.</p>

        <div class="row">
            <div class="course-col">
                <h3>Intermidiate</h3>
                <p>B.Sc- Interior Design,
                  ,B.Sc.- Hospitality and Hotel Administration
                ,Bachelor of Design (B. Design)
                ,Bachelor of Performing Arts
                ,BA in History</p>
            </div>
            <div class="course-col">
                <h3>Degree</h3>
                <p>BE/B.Tech- Bachelor of Technology,
                B.Arch- Bachelor of Architecture,
                BCA- Bachelor of Computer Applications,
                B.Sc.- Information Technology,
                B.Sc- Nursing,
                BPharma- Bachelor of Pharmacy,
                B.Sc- Interior Design,
                BDS- Bachelor of Dental Surgery</p>
            </div>
            <div class="course-col">
                <h3>Post Graduation</h3>
                <p>Master of Arts (MA),
                   Master of Science (MS, MSc),
                   Master of Research (MRes),
                   Master by Research (MPhil),
                   Master of Studies (MSt)</p>
            </div>
        </div>
    </section>

    



    {/* <!---------Facilities---------> */}

    <section class="facilities">
        <h1>Our Facilities</h1>

        <div class="row">
            <div class="facilities-col">
                <img src="assets/img-stock/Vit-Library.jpg" alt="" />
                <h3>VIT Library</h3>
            </div>
            <div class="facilities-col">
                <img src="assets/img-stock/play ground img.png" alt="" />
                <h3>Play Ground</h3>
            </div>
            <div class="facilities-col">
                <img src="assets/img-stock/cantein.jpg" alt="" />
                <h3>Tasty and Healthy Food</h3>
            </div>
        </div>
    </section>

    {/* <!--------testimonials---------> */}
    <section class="testimonials">
        <h1>TESTIMONIALS</h1>

        <div class="row">
            <div class="testimonials-col">
                <img src="assets/img-stock/mb.png" alt="" />
                <div>
                    <p>Passionate math teacher with 6+ years of experience in high school and middle school environments. Designed integrated lesson plans and incorporated authorial college prep elements to the state curricula. In my previous role prepared and run after-school tutoring for students with learning difficulties that helped improve their final test results by 30%. A winner of Teaching for Progress state award, seeking to leverage math and communication skills at VIT.</p>
                    <h3>Micky Barua</h3>
                </div>
            </div>
            <div class="testimonials-col">
                <img src="assets/img-stock/SRS.png" alt="" />
                <div>
                    <p>State certified English teacher with 3+ years of experience in educating middle and high school students. Knowledgeable of English Language Arts Standards, modern teaching methods, and assessment systems. At St James High School helped grad class students improve final test scores by 20%. Eager to provide a creative environment for English language and literature learning at NO State High School.</p>
                    <h3>S.R.S</h3>
                </div>
            </div>
        </div>

    </section>

    {/* <!--------Call To Action-------> */}

    <section class="cta">
        <h1>Enroll For Our Various Online Courses<br />Any Where From The World</h1>
        <a href="contact.html" class="hero-btn">CONTACT US</a>
    </section>


{/* <!--========== FOOTER ==========--> */}
        <footer class="footer section bd-container">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <a href="#" class="footer__logo">VIT</a>
                    <span class="footer__description">College</span>
                    <div>
                        <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Contact Us</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Vidyalankar Institute of Technology, Vidyalankar College Marg, Wadala(E), Mumbai-400 037</a></li>
                        <li><a href="#" class="footer__link">COVID-19 Restricted Timings.</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Event</a></li>
                        <li><a href="#" class="footer__link">Contact us</a></li>
                        <li><a href="#" class="footer__link">Privacy policy</a></li>
                        <li><a href="#" class="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                
            </div>

           
        </footer>

        </div>









    

        )
    }
}
export default Home