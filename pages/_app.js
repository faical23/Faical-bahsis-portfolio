import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import LangReducer from '../Store'

const store = createStore(LangReducer)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
    </Provider>
  );
}

export default MyApp;
