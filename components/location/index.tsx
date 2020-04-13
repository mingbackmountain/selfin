import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import { SectionTitle, SectionSubtitle } from "../section-title"

import { LocationContainer } from "./styles/location"

export const Location = () => (
  <LocationContainer>
    <SectionTitle
      title="แผนที่"
      style={css`
        margin-bottom: 20px;
      `}
    />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5622693783316!2d100.50566581547116!3d13.741485601233132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29921f76193f7%3A0x5864886b1bdc3702!2sYaowarat%20Rd%2C%20Khet%20Samphanthawong%2C%20Krung%20Thep%20Maha%20Nakhon!5e0!3m2!1sen!2sth!4v1586714853383!5m2!1sen!2sth"
      width="600"
      height="450"
      style={{ border: 0 }}
      aria-hidden="false"
    ></iframe>
    <SectionSubtitle
      title="สอบถามข้อมูลเพิ่มเติม"
      style={css`
        margin-bottom: 20px;
      `}
    />
    <div>
      <FontAwesomeIcon icon={faFacebook} size="lg" />
      <div>Lorem ipsum</div>
    </div>
    <div>
      <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
      <div>Lorem ipsum</div>
    </div>
  </LocationContainer>
)
