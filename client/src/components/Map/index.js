import { useEffect } from 'react';

export default function Map(props) {
  const onScriptLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(props.id),
      props.options
    );
    props.onMapLoad(map);
  };

  useEffect(() => {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_KEY}`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', (e) => {
        onScriptLoad();
      });
    } else {
      onScriptLoad();
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
      id={props.id}
    />
  );
}
