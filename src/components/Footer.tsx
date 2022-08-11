import React from "react"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <>
        <footer style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }} className="bg-dark text-center text-white">
          <div className="pb-0 bg-light">
            <section style={{background: '#dfe1dc'}}>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/khurram.javid.47/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noopener noreferrer"
              ><i className="fab fa-facebook-f"></i
              ></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/hafiz-javid-6a0810225/"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ><i className="fab fa-linkedin-in"></i
              ></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/hafizkh"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ><i className="fab fa-github"></i
              ></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://join.slack.com/t/hafizsteam/shared_invite/zt-1e4ihmtvl-_fpoAiNQTZIviejN84GIXw"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ><i className="fab fa-slack-hash"></i
              ></a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://wa.me/+358456011488"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              ><i className="fab fa-whatsapp"></i
              ></a>
            </section>
          </div>
  
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © {year} Hyper Ecommerce Shop | Made by Hafiz
          </div>
        </footer>
  
      </>
    )
  }
  
  export default Footer