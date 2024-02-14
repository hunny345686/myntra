import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="border-t-2 mt-16 pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between footer mt-4">
          <div>
            <h2> ONLINE SHOPPING</h2>
            <ul>
              <li><a href="">Men</a></li>
              <li><a href="">Women</a></li>
              <li><a href="">Kids</a></li>
              <li><a href="">Home & Living</a></li>
              <li><a href="">Beauty</a></li>
              <li><a href="">Gift Cards</a></li>
              <li><a href="">Myntra Insider</a></li>
            </ul>
          </div>
          <div>
            <h2> CUSTOMER POLICIES</h2>
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">T&C</a></li>
              <li><a href="">Term Of use</a></li>
              <li><a href="">Treck Order</a></li>
              <li><a href="">Cancellation</a></li>
              <li><a href="">Returns</a></li>
              <li><a href="">Privacy policy</a></li>
              <li><a href="">Grievance Officer</a></li>
            </ul>
          </div>
          <div>
            <h2> EXPERIENCE MYNTRA APP ON MOBILE</h2>
            <div className="flex gap-4 pb-6">
              <img className="w-40" src="/assets/home-img/anddrod.png" alt="" />
              <img className="w-40" src="/assets/home-img/googleStor.png" alt="" />
            </div>
            <div>
              <h2>Keep in Touch</h2>
              <div className="flex gap-4 socialMediaIcon">
                <a href=""><FaFacebook /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaYoutube /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div >
            <div className="flex items-center gap-4">
              <img className="w-20" src="/assets/home-img/original.png" alt="" />
              <span><b>100% ORIGINAL </b>guarantee <br />for all products at myntra.com</span>
            </div>
            <div className="flex items-center gap-4 ">
              <img className="w-20" src="/assets/home-img/return.png" alt="" />
              <span><b>Return within 14 days </b> <br />of receiving your order</span>
            </div>
          </div>
          <div>
            <h2>  USEFUL LINKS </h2>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Site map</a></li>
              <li><a href="">Home & Living</a></li>
              <li><a href="">Beauty</a></li>
              <li><a href="">Gift Cards</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4 font-semibold pt-5 pb-4">
          <h2 className="whitespace-nowrap">POPULAR SEARCHES</h2>
          <hr className="h-1 w-full bottom-3" />
        </div>
        <p>
          <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a> <a href="">Kurta Pajama |</a> <a href=""> Leather Jackets |</a>  <a href="">Sherwani |</a>  <a href="">Shirts |</a>
        </p>
        <div className="flex items-center justify-between pt-12">
          <div>
            In case of any concern, <a href="">Contact Us</a>
          </div>
          <div>
            © 2024 www.myntra.com. All rights reserved.
          </div>
          <div>
            A Flipkart company
          </div>
        </div>
      </div >
    </div >
  )
}

export default Footer