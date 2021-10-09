
import styles from './HomePage.module.scss';
import { BaseLayout } from '../layouts';


const NotFoundPage = () => {
  return (
    <BaseLayout>
      <div className={styles.main}>
        <img alt="404page" src="https://miro.medium.com/max/1400/1*EQisBuMOijQT8woW0Jn6pA.jpeg"/>
      </div>
    </BaseLayout>
  );
};

export default NotFoundPage;