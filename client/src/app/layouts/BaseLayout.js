import { Footer, Header } from '../components/layout';

import styled from './BaseLayout.module.scss';

const BaseLayout = ({children}) => {
  return (
    <div className={styled.baseLayout}>
      <Header />
      <main className={styled.main}>
        { children }
      </main>
      <Footer />
    </div>
  )
};

export default BaseLayout;