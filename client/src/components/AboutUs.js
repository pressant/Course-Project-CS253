import React from "react";
import ContactCard from "./ContactCard";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ContactCard name="AMAN PAHAL" imageUrl="https://vision-iitk.github.io/img/Aman.jpeg" />
          <ContactCard name="SHREY BANSAL" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210997_0.jpg" />
          <ContactCard name="ANIKET BORKAR" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210135_0.jpg" />
          <ContactCard name="KARTIK SONI" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210496_0.jpg" />
          <ContactCard name="SHUBHAM PATEL" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210709_0.jpg" />
          <ContactCard name="DEVEN GANGWANI" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210327_0.jpg" />
          <ContactCard name="SWASTIK SINGHAL" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/211090_0.jpg" />
          <ContactCard name="NARENDRA SINGH" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210649_0.jpg" />
          <ContactCard name="GOUTAM DAS" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210394_0.jpg" />
          <ContactCard name="PRASHANT KUMAR" imageUrl="https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/210750_0.jpg" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
