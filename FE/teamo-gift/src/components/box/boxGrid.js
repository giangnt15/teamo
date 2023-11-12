import '../../assets/styles/box/boxGrid.scss';
import BoxGridItem from './boxGridItem';

var defaultData = [];

for (let i=0;i<22;i++){
    defaultData.push({
        id: i,
        images: [{
            url: 'https://www.teamogift.com//storage/hopqua0669-edit-1.jpg',
        },{
            url: 'https://www.teamogift.com//storage/san-pham-le\/dsc05573.jpg',
        }],
        name: "RELOOM BOX " + i,
        price: "1,399,000 Đ"
    });
}

function BoxGrid({data = defaultData}){
    return(<div className="box-grid">
        <div className='box-grid-wrapper'>
            {data.map(item=><BoxGridItem item={item}/>)}
        </div>
    </div>)
}

export default BoxGrid;