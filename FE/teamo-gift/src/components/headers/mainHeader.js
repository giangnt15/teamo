import { Link } from 'react-router-dom';
import '../../assets/styles/headers/mainHeader.scss';

function MainHeader() {
    return (
        <div className="main-header">
            <div className="header-left header-container">
                <Link className="collection header-item" to={'/collection'}>BỘ SƯU TẬP</Link>
                <Link className="box-build header-item">TỰ LÀM HỘP QUÀ</Link>
                <Link className="prebuilt-box header-item">HỘP QUÀ CÓ SẴN</Link>
            </div>
            <div className="header-middle header-container">
                <Link className="shop-name header-item" to={'/'}>
                </Link>
            </div>
            <div className="header-right header-container">
                <Link className="enterprise-box header-item">QUÀ TẶNG DOANH NGHIỆP</Link>
                <div className="about header-item">GIỚI THIỆU</div>
                <div className="functional-btns">

                </div>
            </div>
        </div>
    )
}

export default MainHeader;