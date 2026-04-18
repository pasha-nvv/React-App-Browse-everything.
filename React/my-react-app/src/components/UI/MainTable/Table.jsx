import "../../../App.css"
import Check__icon from "../../../assets/icons/Check icon.png"
import CloseX__icon from "../../../assets/icons/Close icon.png"

const Table = () => {
  return (
      <section className="table__info">
              <table className="table__main" />
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
                    <img className="img__table__check" src={Check__icon} alt="Check icon" />
                    <p className="p__table">Restricts customization</p>
                  </div>
                </td>
      
                <td className="td__table__hyper-view">
                  <div className="block__table">
                    <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon" />
                    <p className="p__table">Steep learninng curve</p>
                  </div>
                </td>
              </tr>
      
              <tr>
                <td className="td__table__area">
                  <div className="block__table">
                    <img className="img__table__check" src={Check__icon} alt="Check icon" />
                    <p className="p__table">Advanced AI insights</p>
                  </div>
                </td>
      
      
                <td className="td__table__web-surage">
                  <div className="block__table">
                    <img className="img__table__check" src={CloseX__icon} alt="Check close x icon" />
                    <p className="p__table">Basic AI insights</p>
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
                    <p className="p__table">Full UTF-8 support</p>
                  </div>
                </td>
      
      
                <td className="td__table__web-surage">
                  <div className="block__table">
                    <img className="img__table__check" src={CloseX__icon} alt="Check close x icon" />
                    <p className="p__table">Potential display errors</p>
                  </div>
                </td>
      
                <td className="td__table__hyper-view">
                  <div className="block__table">
                    <img className="img__table__dagger" src={CloseX__icon} alt="Check close x icon" />
                    <p className="p__table">Partial UTF-8 support</p>
                  </div>
                </td>
              </tr>
              <table />
            </section>
  )
}

export default Table;