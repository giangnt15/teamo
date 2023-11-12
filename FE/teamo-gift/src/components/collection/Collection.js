import SlideShow from "../common/slideShow";
import TextRunner from "../common/textRunner";
import '../../assets/styles/collection/collection.scss';
import BoxGrid from "../box/boxGrid";

function Collection() {
    return (<div className="collection-page">
        <TextRunner text={" ƯU ĐÃI GIẢM 10% VÀ FREESHIP CHO TOÀN BỘ ĐƠN HÀNG KHI ĐẶT MUA CÁC SẢN PHẨM TRONG THỜI GIAN TỪ 28/10 ĐẾN 3/11 "} />
        <div className="home-banner">
            <SlideShow />
        </div>
        <div className="container-wrapper">
            <div className="container">
                <div className="container-name">
                    Sản phẩm
                </div>
                <BoxGrid />
            </div>
        </div>
    </div>)
}

export default Collection;