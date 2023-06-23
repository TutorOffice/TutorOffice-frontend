import s from './ErrorPage.module.css';

import ErrorInfo from '@/components/errorInfo/ErrorInfo';
import Layout from '@/components/layout/Layout';
import { errorTypes } from '@/shared/constants';

const ErrorPage = () => {
  return (
    <Layout>
      <div className={s.errorPage}>
        {errorTypes.map((obj) => (
          <div key={obj.id}>
            {obj.code === '400' ? (
              <ErrorInfo imageUrl={obj.imageUrl} title={obj.title} description={obj.description} code={obj.code} />
            ) : null}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ErrorPage;
