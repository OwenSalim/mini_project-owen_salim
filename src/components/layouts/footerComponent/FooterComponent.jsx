import React from "react";
import "./footerCoponent.css";
import {
  Ryzen,
  GitHubIcon,
  IgIcon,
  Intel,
  Linkedin,
  Nvidia,
  Youtube,
} from "../../../assets";
import { Anteraja } from "../../../assets";
import { JNE } from "../../../assets";
import { Grab } from "../../../assets";
import { Gojek } from "../../../assets";

const FooterComponent = () => {
  return (
    <div className="footer-layout">
      <div className="footer-content">
        <div className="atrix-box">
          <h3>ATRIX SHOP</h3>
          <p>Jl. Jendral Sudirman No.108</p>
          <p>Prabumulih, 31121</p>
          <p>Indonesia</p>
        </div>

        <div className="social-box">
          <h3>Social Media</h3>
          <button>
            <a href="https://github.com/OwenSalim/" target="_blank">
              <img src={GitHubIcon} height="40px" alt="GitHub" />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/owen-salim/" target="_blank">
              <img src={Linkedin} height="40px" alt="Linkdin" />
            </a>
          </button>
          <button>
            <a
              href="https://www.youtube.com/channel/UC5u0zFBNMBfNZanBodRRF7A  "
              target="_blank"
            >
              <img src={Youtube} height="40px" alt="Youtube" />
            </a>
          </button>
          <button>
            <a href="https://www.instagram.com/owen_salim/" target="_blank">
              {<img src={IgIcon} height="40px" alt="Instagram" />}
            </a>
          </button>
        </div>

        <div class="newsletter-box">
          <h3>Metode Pengiriman</h3>
          <img src={Anteraja} height="35px" alt="Anter Aja" />
          <img src={JNE} height="35px" alt="JNE" />
        </div>

        <div class="partner-box">
          <h3>Our Partnership</h3>
          <button>
            <a href="https://www.nvidia.com/en-us/" target="_blank">
              <img src={Nvidia} height="40px" alt="" />
            </a>
          </button>
          <button>
            <a
              href="https://www.intel.com/content/www/us/en/homepage.html"
              target="_blank"
            >
              <img src={Intel} height="40px" alt="" />
            </a>
          </button>
          <button>
            <a href="https://www.amd.com/en" target="_blank">
              <img src={Ryzen} height="40px" alt="" />
            </a>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="copyright-box">
        <div className="copyright">
          <a href="#">Privacy</a> · <a href="#">Sitemap</a> ·
          <a href="#">Support</a> · ©2023 Atrix Shop - @Owen Salim
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
