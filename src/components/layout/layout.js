import { Fragment } from 'react';
import Footer from './footer';

export * from '../../components/scroll';

function Layout(props) {
    return (
        <Fragment>
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
}

export default Layout;
