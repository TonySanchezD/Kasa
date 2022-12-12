import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import Main from './Main'


function Error() {
    return (
        <div>
            <Header />
            <Main />
            <Footer className='error--footer' />
        </div>
    )
}

export default Error