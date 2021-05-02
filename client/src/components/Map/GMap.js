import { useEffect } from 'react';

export default function GMap({ options, id, onMapLoad }) {
  useEffect(() => {
    const onScriptLoad = () => {
      const map = new window.google.maps.Map(
        document.getElementById(id),
        options
      );
      onMapLoad(map);
    };

    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_KEY}`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      s.addEventListener('load', (e) => {
        onScriptLoad();
      });
    } else {
      onScriptLoad();
    }
  }, [id, onMapLoad, options]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
      id={id}
    />
  );
}
