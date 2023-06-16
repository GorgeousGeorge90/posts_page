import {Card} from 'react-bootstrap';

const CardItem = ({description,title,link,pic}) => {

    return (<li>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top"
                      src={pic}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={link}>{link}</Card.Link>
            </Card.Body>
        </Card>
    </li>)
}

export default CardItem