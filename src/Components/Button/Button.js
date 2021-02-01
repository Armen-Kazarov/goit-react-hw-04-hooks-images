import s from './Button.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={s.Button} onClick={() => onClick()}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
