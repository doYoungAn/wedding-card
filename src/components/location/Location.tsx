import { FC, useEffect } from 'react';

const Location: FC = () => {

  useEffect(() => {
    const container = document.getElementById('map');
    const lat = 37.505514447293876;
    const long = 126.88379188839032;


    const map = new window.kakao.maps.Map(container, {
      center: new window.kakao.maps.LatLng(lat, long), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    });

    const markerPosition  = new window.kakao.maps.LatLng(lat, long); 

  // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

  }, []);

  return (
    <div id="map" style={ { width: '100%', height: 400 }}></div>
  )
}

export default Location