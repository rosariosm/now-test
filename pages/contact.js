import Layout from '../components/layout/PageLayout'

export default function Index() {
  return (
    <Layout>
      <div className='container page-header'>
        <h1>Let's <br />join <br />forces</h1>
        <h3>Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.</h3>
      </div>
      <div className='container page-content'>
        <form>
          <div className='field-group'>
            <div className='field'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' id='firstName' />
            </div>
            <div className='field'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' id='lastName' />
            </div>
          </div>
          <div className='field-group'>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' />
            </div>
            <div className='field'>
              <label htmlFor='companyName'>Company Name</label>
              <input type='text' id='companyName' />
            </div>
          </div>
          <div>
            <label htmlFor='source'>How did you hear about us?</label>
            <input type='text' id='source' />
          </div>
          <div>
            <label htmlFor='source'>I'd like to discuss</label>
            <select>
              <option>Doing a project with NaNLABS</option>
              <option>Possibility to join NaNLABS team</option>
              <option>I want to offer my services</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor='description'>What do you think we can accomplish together?</label>
            <textarea id='description'></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
      <style jsx>{`
        .page-header {
          display: flex;
          margin-top: 90px;
          margin-bottom: 150px;
        }
        .page-content {
          margin-bottom: 120px;
        }

        h1 {
          font-size: 100px;
          font-family: 'Oswald';
          font-weight: 700;
          text-transform: uppercase;
          text-align: left;
          flex: 1;
        }
        h3 {
          font-family: 'Oswald';
          font-weight: 100;
          font-size: 30px;
          padding-left: 15px;
          align-self: flex-end;
          flex: 1;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input, 
        select, 
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 30px;
          border: 1px #ccc solid;
          border-radius: 0;
        }

        textarea {
          height: 150px;
        }

        .field-group {
          display: flex;
        }

        .field-group .field {
          width: 100%;
        }

        .field-group .field:first-child {
          margin-right: 7.5px;
        }
        .field-group .field:last-child {
          margin-left: 7.5px;
        }
    `}</style>
    </Layout>
  )
}