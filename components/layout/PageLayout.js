import Head from 'next/head'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

import { variables, utils } from '../../commons/theme'

const PageLayout = props => (
  <div>
    <Head>
      <link rel='stylesheet' href='/static/styles/font-faces.css'></link>
      <link rel='icon' href='/static/logos/favicon.ico' sizes='32x32'></link>
      <style jsx global>{`

        /* https://meyerweb.com/eric/tools/css/reset/ */
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol, ul {
          list-style: none;
        }
        blockquote, q {
          quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /* https://www.paulirish.com/2012/box-sizing-border-box-ftw/ */
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }

        /* Custom styles */
        body {
          font-family: ${variables.font.family.main};
          font-weight: ${variables.font.weight.light};
        }
        .container {
          width: 1200px;
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
        }
        
      `}</style>
    </Head>
    <PageHeader />
    {props.children}
    <PageFooter />
  </div>
)

export default PageLayout