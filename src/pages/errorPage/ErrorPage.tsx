import Layout from '../../components/layout/Layout';
import Wrapper from '../../components/wrapper/Wrapper';
import ErrorInfo from '../../components/errorInfo/ErrorInfo';
import { errorTypes } from '../../shared/utils/errorTypes';

const ErrorPage = () => {
  return (
    <Layout>
      <Wrapper>
        {errorTypes.map((obj) => (
          <div key={obj.id}>
            {obj.code === '400' ? (
              <ErrorInfo imageUrl={obj.imageUrl!} title={obj.title} description={obj.description} code={obj.code} />
            ) : null}
          </div>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default ErrorPage;
