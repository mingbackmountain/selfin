import {
  NameContainer,
  PlaceWithDescription,
  Logo,
  ReservationContainer,
} from "./styles/name-section"

export const NameSection = () => (
  <NameContainer>
    <div>
      <h1>TOMOKO ฝึกปัญญาพัฒนาสมอง (Education)</h1>
      <PlaceWithDescription>
        <Logo>logo</Logo>
        <div>
          <p>วันเวลา : 2 พฤศจิกายน 2562 (09.00 น. -16.00 น.)</p>
          <p>สถานที่ : TOMOKO CENTER ราชดำริ</p>
          <p className="warning">กิจกรรมนี้เหมาะสำหรับเด็กอายุ 7 ปีขึ้นไป</p>
        </div>
      </PlaceWithDescription>
    </div>
    <ReservationContainer>
      <h1>บัตรเข้าร่วมกิจกรรม</h1>
      <div>
        <div className="price">
          ฿690 X{" "}
          <select>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <div className="ticket-left">12 ที่นั่งเหลืออยู่</div>
      <button>จองตอนนี้</button>
    </ReservationContainer>
  </NameContainer>
)
