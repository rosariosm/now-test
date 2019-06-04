import Link from 'next/link'

const PageFooter = () => (
  <React.Fragment>
    <footer>
      <div className='container'>
        <ul>
          <li>SERVICES</li>
          <li>Web Applications</li>
          <li>Mobile Applications</li>
          <li>Enterprise Solutions</li>
          <li>Digital Transformation</li>
          <li>Research & Development</li>
          <li>Big Data</li>
        </ul>
        <ul>
          <li>WORK</li>
          <li>React Native app</li>
          <li>NodeJS enterprise solution</li>
          <li>Microservices Solution</li>
          <li>Android app</li>
          <li>Ruby on Rails ecommerce</li>
        </ul>
        <ul>
          <li>COMPANY</li>
          <li>Team</li>
          <li>Careers > We are hiring!</li>
          <li>Quality Policy</li>
        </ul>
        <ul>
          <li>BLOG</li>
          <li>News</li>
          <li>Back-end</li>
          <li>Front-end</li>
          <li>Mobile</li>
          <li>Devops</li>
          <li>Methodologies</li>
        </ul>
      </div>
    </footer>
    <span className='footer-separator'></span>
    <section className='copyright'>
      <p>Small enough to care, big enough to get the job done.</p>
      <p>© 2019 <strong>NaN</strong>LABS. All Rights Reserved.</p>
    </section>
    <style jsx>{`

      ul {
        list-style-type: none;
      }
      li {
        margin-bottom: 10px;
      }
      li:last-child {
        margin-bottom: 0;
      }

      footer {
        background-color: #474747;
        color: white;
      }
      footer .container {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      .footer-separator {
        display: block;
        height: 5px;
        background: linear-gradient(to right, #00EFE6 0%, #5174E7 80%, #8035E8 100%);
      }
      .copyright {
        background-color: white;
        text-align: center;
        padding: 15px 0;
      }
      .copyright p:first-child {
        margin-bottom: 10px;
      }

    `}</style>
  </React.Fragment>
)

export default PageFooter