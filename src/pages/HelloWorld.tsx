import { NextPage } from 'next';

interface Props {
  message: string;
}

const Homes: NextPage<Props> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

Homes.defaultProps = {
  message: 'Hello, world!',
};

export default Homes;
