import { Link } from 'react-router-dom';
import '../../assets/styles/headers/mainHeader.scss';

function MainHeader() {
    return (
        <div className="main-header">
            <div className="header-left header-container">
                <Link className="collection header-item" to={'/collection'}>Bộ sưu tập</Link>
                <Link className="box-build header-item">Tự làm hộp quà</Link>
                <Link className="prebuilt-box header-item">Hộp quà có sẵn</Link>
            </div>
            <div className="header-middle header-container">
                <Link className="shop-name header-item" to={'/'}>Teamo</Link>
            </div>
            <div className="header-right header-container">
                <Link className="enterprise-box header-item">Quà tặng doanh nghiệp</Link>
                <div className="about header-item">Giới thiệu</div>
                <div className="functional-btns">

                </div>
            </div>
        </div>
    )
}

export default MainHeader;