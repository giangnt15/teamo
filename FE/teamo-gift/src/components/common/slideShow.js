import { useEffect, useRef, useState } from "react";
import '../../assets/styles/common/slideShow.scss';

var defaultData = [{
    id: 1,
    url: 'http://localhost:3000/images/3-1.jpg'
},{
    id: 2,
    url: 'http://localhost:3000/images/2-2.jpg'
}]
function SlideShow({data = defaultData}){

    var wrapperRef = useRef(null);
    var [state, setState] = useState({
        currentPage: 0,
        xStart: 0,
        x: 0,
        previousX: 0
    });

    useEffect(()=>{
        setState({
            ...state,
            x: -wrapperRef.current.offsetWidth
        })
    }, [wrapperRef]);

    function handleSwiperDrag(e){
        e.preventDefault();
        let {clientX} = e;
        setState({
            ...state,
            x: -wrapperRef.current.offsetWidth + clientX - state.xStart
        })
    }

    function handleSwiperDragStart(e){
        console.log(e)
        let {clientX} = e;
        setState({
            ...state,
            xStart: clientX
        })
    }

    function handleSwiperDragEnd(e){
        let {clientX} = e;
        console.log(state.x)
        if (state.x >= wrapperRef.current.offsetWidth/2){
            setState({
                ...state,
                x: -wrapperRef.current.offsetWidth,
            })
        }
    }

    return(<div className="slide-show">
        <div className="swiper" draggable='true' 
        onDragStart={handleSwiperDragStart} 
        onDragEnd={handleSwiperDragEnd}
        onDrag={handleSwiperDrag}>
            <div className="swiper-pagination">
              
            </div>
            <div className="swiper-next"></div>
            <div className="swiper-back"></div>
        </div>
        <div className="slide-wrapper" ref={wrapperRef} style={{transform: `translateX(${state.x}px)`}}>
                 <div className="slide-item"> 
                        <a style={{backgroundImage: `url(${data[data.length-1].url})`, width: '100%', height: '100%', display: 'block'}}></a>
                   </div>
                {data.map(item=>{
                   return (
                   <div key={item.id} className="slide-item"> 
                        <a style={{backgroundImage: `url(${item.url})`, width: '100%', height: '100%', display: 'block'}}></a>
                   </div>)
                })}
                  <div className="slide-item"> 
                        <a style={{backgroundImage: `url(${data[0].url})`, width: '100%', height: '100%', display: 'block'}}></a>
                   </div>
            </div>
          
    </div>)
}

export default SlideShow;

