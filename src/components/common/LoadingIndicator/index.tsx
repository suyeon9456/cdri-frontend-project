import { Dot, LoaderWrapper } from './styles';

const LoadingIndicator = () => {
  return (
    <LoaderWrapper>
      <Dot delay="0s" />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
    </LoaderWrapper>
  );
};
export default LoadingIndicator;
