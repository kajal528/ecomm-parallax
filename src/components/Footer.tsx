import { Facebook, Instagram, Twitter } from "../Icons/Icons";

const Footer = () => {
  return (
    <section className=" py-12 px-20 flex justify-between max-w-[1280px] mx-auto">
      <div>
        <h4>Shop</h4>
        <ul className=" text-[12px] mt-2 cursor-pointer space-y-1">
          <li>Men's Collection</li>
          <li>Women's Collection</li>
          <li>Kids' Collection</li>
          <li>New Arrivals</li>
          <li>Sale</li>
        </ul>
      </div>
      <div>
        <h4>Customer Service</h4>
        <ul className=" text-[12px] mt-2 cursor-pointer space-y-1">
          <li> Contact Us</li>
          <li>Shipping & Delivery</li>
          <li>Returns & Exchanges</li>
          <li>FAQs</li>
          <li>Track Order</li>
        </ul>
      </div>
      <div>
        <h4>About Us</h4>
        <ul className=" text-[12px] mt-2 cursor-pointer space-y-1">
          <li>Our Story</li>
          <li>Sustainability</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div>
        <h4>Policies</h4>
        <ul className=" text-[12px] mt-2 cursor-pointer space-y-1">
      <li> Privacy Policy</li> 
<li>Terms of Service</li>
<li>Cookie Policy</li>
        </ul>
      </div>
      <div>
        <h4>Connect With Us</h4>
        <div className=" flex gap-x-2 cursor-pointer mt-2">
          <Facebook/>
          <Twitter/>
          <Instagram/>
          </div>
      </div>
    </section>
  );
};

export default Footer;
