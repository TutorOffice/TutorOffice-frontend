import ErrorInfo from '@/components/errorInfo/ErrorInfo'
import Layout from '@/components/layout/Layout'
import { errorTypes } from '@/shared/constants'

import s from './ErrorPage.module.css'

interface ErrorPageProps {
  errorCode: string | number
}

// eslint-disable-next-line react/prop-types
const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode = 404 }) => {
  return (
    <Layout>
      <div className={s.errorPage}>
        {errorTypes.map((obj) => (
          <div key={obj.id}>
            {obj.code === errorCode ? (
              <ErrorInfo
                imageUrl={obj.imageUrl}
                title={obj.title}
                description={obj.description}
                errorCode={obj.code}
              />
            ) : null}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ErrorPage
