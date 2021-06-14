
import styles from './Iframe.module.scss';

const Iframe= ({ item3 }) => {
  return (

    <div className={styles.iframe}>
       <iframe title={ item3.title ? item3.title : item3.name} src={`https://www.youtube.com/embed/${item3.results[0].key}`}
       position="absolute"
      width="100%"
      id={item3.id}
      height="500vw"
      />
    </div>
  );
};

export default Iframe;





   