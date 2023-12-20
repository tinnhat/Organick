import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import team1 from "../../assets/img/team1.png"
import team2 from "../../assets/img/team2.png"
import team3 from "../../assets/img/team3.png"

function Team(props) {
  return (
    <section className='team'>
      <div className='container'>
        <div className='team-container'>
          <p className='team-title'>Team</p>
          <p className='team-sub-title'>Our Organic Experts</p>
          <p className='team-sub-text'>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="list-team">
            <div className="member">
              <img src={team1} alt="" />
              <div className="member-info">
                <p className="member-name">Giovani Bacardo</p>
                <div className="member-contact">
                  <p className="position">Farmer</p>
                  <div className="box-icon">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img src={team2} alt="" />
              <div className="member-info">
                <p className="member-name">Marianne Loreno</p>
                <div className="member-contact">
                  <p className="position">Designer</p>
                  <div className="box-icon">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="member">
              <img src={team3} alt="" />
              <div className="member-info">
                <p className="member-name">Riga Pelore</p>
                <div className="member-contact">
                  <p className="position">Farmer</p>
                  <div className="box-icon">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Team.propTypes = {}

export default Team
