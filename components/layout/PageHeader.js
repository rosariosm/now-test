import Link from 'next/link'
import { variables, utils } from '../../commons/theme'

const PageHeader = () => (
  <header>
    <Link href='/'>
      <div className='brand-container'>
        <img className='logo' src='/static/logos/logo.svg' />
        <img className='brand' src='/static/logos/brand.svg' />
      </div>
    </Link>
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/'>
        <a>Services</a>
      </Link>
      <Link href='/'>
        <a>Work</a>
      </Link>
      <Link href='/'>
        <a>Blog</a>
      </Link>
      <Link href='/'>
        <a>Team</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
    <style jsx>{`
      header {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .brand-container {
        display: flex;
        align-items: center;
      }
      .logo {
        width: 50px;
      }
      .brand {
        height: 30px;
        margin-left: 15px;
      }
      a {
        font-family: ${variables.font.family.alt};
        font-size: ${utils.px(variables.font.size.h3)};
        text-transform: uppercase;
        text-decoration: none;
        color: ${variables.color.gray.base};
        margin-right: 15px;
      }
      a:hover {
        color: ${variables.color.brand.main};
      }
    `}</style>
  </header>
)

export default PageHeader