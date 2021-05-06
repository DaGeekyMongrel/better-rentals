import { ListGroup } from 'react-bootstrap-v5';

function ListingInfo({ listing }) {
  const { address, price, rooms, halfrooms, size, url } = listing;
  const formatter = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    minimumFractionDigits: 0,
  });

  return (
    <>
      <h6 className="px-2 py-3">{address}</h6>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between">
          <b>Price:</b> {formatter.format(price)}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <b>Rooms:</b> {rooms + (halfrooms > 0 ? `+ ${halfrooms} half` : '')}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <b>Size:</b> {size} m2
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <a href={url} target="_blank" rel="noreferrer">
            External link
          </a>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default ListingInfo;
