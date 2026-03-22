import "../App.css"
// First block img
import Ipad from "../assets/Ipad.png"
import iPhone from "../assets/iPhone.png"
// Logo brand
import logo__brand__one from "../assets/logo-brand/Logo first.png"
import logo__brand__two from "../assets/logo-brand/Logo two.png"
import logo__brand__there from "../assets/logo-brand/Logo there.png"
import logo__brand__four from "../assets/logo-brand/Logo four.png"
import logo__brand__five from "../assets/logo-brand/Logo five.png"
import logo__brand__six from "../assets/logo-brand/Logo six.png"
// Benefits img
import Cable__icon from "../assets/icons/Cable icon.png"
import Earth__icon from "../assets/icons/Earth icon.png"
import Vector__icon from "../assets/icons/Vector.png"
import Chart__icon from "../assets/icons/Chart icon.png"
// Big images
import Hero from "../assets/big-images/Hero Image.png"
import Oval from "../assets/big-images/oval.png"
import Round__stones from "../assets/big-images/round stones.png"
import mountains__green from "../assets/big-images/mountains.png"
// Cheak icon and Close icon
import Check__icon from "../assets/icons/Check icon.png"
import CloseX__icon from "../assets/icons/Close icon.png"
// Arrow
import arrow from '../assets/icons/Arrow.png'

const Main = () => {
  return (
    <main className="main">
    <section className="block__first">
      <h1 className="h1__main">Browse <span className="span__main">everything.</span></h1>
      <div className="block__image">
        <img className="img__first__pad" src={Ipad} alt="creen Effciency Improvments ipad"/>
        <img className="img__first__mobile" src={iPhone} alt="Screen Effciency Improvments mobile"/>
      </div>
      <div className="green__block">
        <button className="btn__green"></button>
      </div>
    </section>

    <div className="block__brand">
      <h3 className="h3__brand">Trusted by:</h3>
      <div className="images__brands">
        <img src={logo__brand__one} alt="Brand logotype"/>
        <img src={logo__brand__two} alt="Logoipsum logo"/>
        <img src={logo__brand__there} alt="Brand logotype"/>
        <img src={logo__brand__four} alt="Logoipsum logo"/>
        <img src={logo__brand__five} alt="Logoipsum logo"/>
        <img src={logo__brand__six} alt="Logoipsum logo"/>
      </div>
    </div>

    <section id="benefits" className="benefits__block">
      <h2 className="h2__benefits">Benefits</h2>
      <h3 className="h3__benefits">We've cracked the code.</h3>
      <p className="p__benefits__info">Area provides real insights, without the data overload.</p>
    

    <div className="blocks__benefits">

      <section className="block__benefits__inf">
        <img src={Cable__icon} alt="Cable icon"/>
        <p>Amplify insights</p>
        <p className="p__benefits__info">Unlock data-driven decisions
          with comprehensive analytics,
          revealing key opportunities for strategic regional growth.
        </p>
      </section>

      <section className="block__benefits__inf">
        <img src={Earth__icon} alt="Earth icon"/>
        <p>Control Your Global Presence</p>
        <p className="p__benefits__info">
          Manage and track satellite offices,
          ensuring consistent performance
          and streamlined operations everywhere.
        </p>
      </section>

      <section className="block__benefits__inf">
        <img src={Vector__icon} alt="Vector icon"/>
        <p>Remove Language Barriers</p>
        <p className="p__benefits__info">
          Adapt to diverse markets with
          built-in localization for
          clear communication and enhanced
          user experience.
        </p>
      </section>

      <section className="block__benefits__inf">
        <img src={Chart__icon} alt="Chart icon"/>
        <p>Visualize Growth</p>
        <p className="p__benefits__info">
          Generate precise, visually
          compelling reports
          that illustrate your growth
          trajectories across all regions.
        </p>
      </section>

    </div>
  </section>
    <div className="image__container">
      <img className="img__hero" src={Hero} alt="Hero images"/>
    </div>


    <section className="blocks__big__picture">

      <div className="block__info__picture">
        <h3 className="h3__picture">See the Big Picture</h3>
        <p className="p__picture__info">
          Area turns your data into clear,
          vibrant visuals that show you exactly
          what's happening in each region.
        </p>
        <section className="section__info__picture">
          <p className="p__number__picture">01</p>
          <p className="p__info__picture">Spot Trends in Seconds: No more digging through numbers.</p>
        </section>

        <section className="section__info__picture">
          <p className="p__number__picture">02</p>
          <p className="p__info__picture">Get Everyone on the Same Page: Share easy-to-understand reports with your team.
          </p>
        </section>

        <section className="section__info__picture">
          <p className="p__number__picture">03</p>
          <p className="p__info__picture">Make Presentations Pop: Interactive maps and dashboards keep your audience
            engaged.</p>
        </section>

        <section className="section__info__picture">
          <p className="p__number__picture">04</p>
          <p className="p__info__picture">Your Global Snapshot: Get a quick, clear overview of your entire operation.</p>
        </section>

        <button className="btn__picture">Discover More</button>
      </div>

      <div className="block__img__picture">
        <img src={Oval} alt="Oval figure image"/>
      </div>
    </section>

    <section id="specifications" className="specification">
      <p className="p__specs__main">Specs</p>
      <h1 className="h1__specs">Why Choose Area?</h1>
      <p className="p__specs">
        You need a solution that keeps up.
        That’s why we developed Area.
        A developer-friendly approach to
        <br />
        streamline your business.
      </p>
      <button className="btn__picture">Discover More</button>
    </section>

    <section className="table__info">
      <table className="table__main"/>
        <tr>
          <th className="th__area">Area</th>
          <th className="th__two">WebSurge</th>
          <th className="th__other">HyperView</th>
        </tr>
        <tr>
          <td className="td__table__area">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon" />
              <p className="p__table">Ultra-fast browsing</p>
          </div>
          </td>
          

          <td className="td__table__web-surage">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon" />
              <p className="p__table">Fast browsing</p> 
            </div>
          </td>

          <td className="td__table__hyper-view">
            <div className="block__table">
              <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon" />
              <p className="p__table">Moderate speeds</p>
            </div>
          </td>

        </tr>

        <tr>
          <td className="td__table__area">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon" />
              <p className="p__table">Advance AI insinghts</p>
          </div>
          </td>
          

          <td className="td__table__web-surage">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon" />
              <p className="p__table">Basic AI recommendations</p>
            </div>
          </td>

          <td className="td__table__hyper-view">
            <div className="block__table">
              <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon" />
              <p className="p__table">No AI assistance</p>
            </div>
          </td>
        </tr>

        <tr>
          <td className="td__table__area">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon" />
              <p className="p__table">Seamless integration</p>
          </div>
          </td>
          

          <td className="td__table__web-surage">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon"/>
              <p className="p__table">Restricts customization</p>
            </div>
          </td>

          <td className="td__table__hyper-view">
            <div className="block__table">
              <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon"/>
              <p className="p__table">Steep learninng curve</p>
            </div>
          </td>
        </tr>

        <tr>
          <td className="td__table__area">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon"/>
              <p className="p__table">Advanced AI insights</p>
          </div>
          </td>
          

          <td className="td__table__web-surage">
            <div className="block__table">
              <img className="img__table__check" src={CloseX__icon} alt="Check close x icon"/>
              <p className="p__table">Basic AI insights</p>
            </div>
          </td>

          <td className="td__table__hyper-view">
            <div className="block__table">
              <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon"/>
              <p className="p__table">No AI assistance</p>
            </div>
          </td>
        </tr>

        <tr>
          <td className="td__table__area">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon"/>
              <p className="p__table">Ultra-fast browsing</p>
          </div>
          </td>
          

          <td className="td__table__web-surage">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon"/>
              <p className="p__table">Fast browsing</p>
            </div>
          </td>

          <td className="td__table__hyper-view">
            <div className="block__table">
              <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon"/>
              <p className="p__table">Moderate speeds</p>
            </div>
          </td>
        </tr>

        <tr>
          <td className="td__table__area">
            <div className="block__table">
              <img className="img__table__check" src={Check__icon} alt="Check icon"/>
              <p className="p__table">Full UTF-8 support</p>
          </div>
          </td>
          

          <td className="td__table__web-surage">
            <div className="block__table">
              <img className="img__table__check" src={CloseX__icon} alt="Check close x icon"/>
              <p className="p__table">Potential display errors</p>
            </div>
          </td>

          <td className="td__table__hyper-view">
            <div className="block__table">
              <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon"/>
              <p className="p__table">Partial UTF-8 support</p>
            </div>
          </td>
        </tr>
      <table/>
    </section>

    <section className="blocks__big__info">
      <div className="block__image__big">
        <img className="img__stones" src={Round__stones} alt="round stones"/>
      </div>
      <div className="block__big__info">
        <h2 className="h2__big__info">“I was skeptical, but Area has completely transformed the way
          I manage my business. The data visualizations are so clear and
          intuitive, and the platform is so easy to use. I can't imagine
          running my company without it.”
        </h2>
        <p className="p__big__main">John Smith</p>
        <p className="p__big__info">Head of Data</p>
      </div>
    </section>

    <section id="how-to" className="block__map">
      <div className="block__main__map">
        <h1 className="h1__main__map">Map Your Success</h1>
        <button className="btn__picture__map">Discover More</button>
      </div>
      <div className="item__how__to">
        <div className="block__item">
          <p className="p__how__main">01</p>
          <p className="p__how__subtitle">Get started</p>
          <p className="p__how__info">
            With our intuitive setup, you’re up and running in minutes.
          </p>
        </div>
        <div className="block__item">
          <p className="p__how__main">02</p>
          <p className="p__how__subtitle">Customize and Configure</p>
          <p className="p__how__info">
            Adapt Area to your specific requirements and preferences.
          </p>
        </div>
        <div className="block__item">
          <p className="p__how__main">03</p>
          <p className="p__how__subtitle">Grow Your Business</p>
          <p className="p__how__info">
            Make informed decisions to exceed your goals.
          </p>
        </div>
      </div>
    </section>

    <div className="image__container">
      <img className="img__map" src={mountains__green} alt="green mountains image"/>
    </div>

    <section id="contact-us" className="connect__with__us">
      <div className="block__connect">
        <p className="p__connect__main">Connect with us</p>
        <p className="p__connect__info">
          Schedule a quick call to learn how Area can turn your regional data into a powerful
          <br /> advantage.
        </p>
        <button className="btn__connect">Learn More
          <img className="img__btn__header" src={arrow} alt="Arrow"/>
        </button>
      </div>
    </section>
  </main>
  )
}

export default Main;