import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Nightowl */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Nightowl Tech Solutions Pvt. Ltd.</h5>
              </div>
              <h3>09/2025 - Present</h3>
            </div>
            <p>
              Developing responsive and high-performance web interfaces using HTML, CSS, JavaScript, and Bootstrap. 
              Collaborating with design and backend teams to implement pixel-perfect UI from Figma and optimizing websites for speed and cross-browser compatibility.
            </p>
          </div>

          {/* Code Calibre */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Code Calibre</h5>
              </div>
              <h3>02/2024 - 09/2025</h3>
            </div>
            <p>
              Built and customized WordPress websites from Figma designs with full responsiveness. 
              Integrated third-party APIs, developed custom plugins, and improved website performance through optimization techniques.
            </p>
          </div>

          {/* Business World Trade */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Designer</h4>
                <h5>Business World Trade</h5>
              </div>
              <h3>11/2022 - 10/2023</h3>
            </div>
            <p>
              Designed and developed responsive websites and landing pages. Created visual assets like banners and logos, and delivered multiple client projects within deadlines.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA (Bachelor of Computer Applications)</h4>
                <h5>IGNOU</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Completed graduation with a focus on computer fundamentals, web development, and software concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;